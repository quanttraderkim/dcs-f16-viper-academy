# DCS F-16 Viper Academy

한국어 설명 중심으로 DCS F-16C Viper를 처음부터 끝까지 학습할 수 있게 만든 정적 학습 게임 프로토타입입니다.

핵심 목표는 세 가지입니다.

- F-16C Viper 가이드를 전체 구조로 이해하기
- 중요한 항공/전술 용어를 한글 설명과 영어 원어로 같이 익히기
- 시동, 이륙, 착륙, HOTAS, 센서, 무장, 방어, 항법, 공중급유까지 단계적으로 훈련하기

## 포함 내용

- `f16_viper_academy.html`
  - 학습 게임 메인 화면
- `f16_viper_academy.js`
  - UI, 퀴즈, 진행률 저장, 검색, 페이지 리더
- `scripts/extract_dcs_f16_guide.py`
  - PDF에서 전체 목차, 페이지 텍스트, 파트별 분할본, 브라우저용 JS 번들을 생성
- `generated/dcs_f16_guide/`
  - 추출 결과물
  - `guide_bundle.js`: 브라우저 런타임 데이터
  - `guide_bundle_ko.js`: 한국어 기계번역 런타임 데이터
  - `guide_manifest.json`: 전체 목차와 메타데이터
  - `outline.md`: 사람이 읽기 쉬운 목차
  - `full_text.md`: 전체 페이지 텍스트
  - `pages.json`: 전체 페이지 텍스트 JSON
  - `page_images/`: 로컬에서 생성하는 페이지 이미지
  - `page_images_hd/`: 확대 모달용 로컬 HD 페이지 이미지
  - `page_translations_ko.json`: 한국어 기계번역 페이지 데이터
  - `sections/*.md`: 파트별 분할본

## 실행

필요한 파이썬 패키지를 먼저 설치합니다.

```bash
python3 -m pip install --user -r requirements.txt
```

그 다음 로컬 서버를 띄웁니다.

```bash
python3 -m http.server 8123
```

브라우저에서 아래 주소를 엽니다.

`http://127.0.0.1:8123/f16_viper_academy.html`

## PDF 재추출

```bash
python3 -m pip install --user -r requirements.txt

python3 scripts/extract_dcs_f16_guide.py \
  "/Users/daehwan/Library/Mobile Documents/iCloud~md~obsidian/Documents/Vault/300. 취미/FlightSim/DCS F-16C Viper Guide.pdf" \
  --output-dir generated/dcs_f16_guide \
  --render-page-images
```

한국어 기계번역 번들도 만들려면 아래 스크립트를 추가로 실행합니다.

```bash
python3 scripts/translate_dcs_f16_guide_ko.py
```

## 학습 방식

- 한국어 설명 중심
- 중요 용어 영어 병기
- 전체 18개 파트 로드맵
- 시퀀스 드릴: 시동, 이륙, 착륙
- HOTAS 드릴: 스틱/스로틀 입력 암기
- Topic Intercept: 전체 가이드 목차 기반 파트 매핑 퀴즈
- 전체 가이드 검색과 페이지 리더
- 페이지 이미지와 텍스트를 나란히 보는 가이드 리더
- 우측 텍스트 패널의 한국어 기계번역 / 영문 추출본 토글
- 약어, 용어사전, 파트 브리핑, 영문 원문, 한국어 번역을 함께 타는 통합 검색

## 참고

- 진행률은 브라우저 `localStorage`에 저장됩니다.
- PDF가 업데이트되면 추출 스크립트를 다시 실행하면 됩니다.
- `generated/dcs_f16_guide/page_images/`와 `generated/dcs_f16_guide/page_images_hd/`는 PDF에서 로컬로 다시 생성할 수 있으므로 기본적으로 Git 추적 대상에서 제외합니다.
- 한국어 텍스트는 기계번역이므로 HOTAS, INS, IFF 같은 핵심 영어 용어는 원문과 함께 보는 것을 권장합니다.
- 한국어 번역 스크립트는 페이지별 체크포인트 JSON을 갱신하면서 진행하고, 브라우저용 `guide_bundle_ko.js`는 전체 번역이 끝난 뒤에만 갱신합니다.
- 추출된 `pages.json`이 바뀌면 번역 스크립트가 해당 페이지들만 다시 번역해 한국어 번역본을 자동으로 갱신합니다.
