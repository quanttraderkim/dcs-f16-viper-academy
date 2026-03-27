(() => {
    const manifest = window.__DCS_F16_GUIDE_MANIFEST__ || {
        pageCount: 0,
        tree: [],
    };
    const pageTexts = window.__DCS_F16_GUIDE_PAGES__ || [];
    const pageTextsKo = window.__DCS_F16_GUIDE_PAGES_KO__ || [];
    const hasAnyKoTranslation = pageTextsKo.some((text) => Boolean(String(text || "").trim()));
    const hasHdPageImages = Boolean(window.__DCS_F16_GUIDE_HD_IMAGES_ENABLED__);

    const ROUTE_ORDER = [2, 3, 4, 5, 6, 9, 7, 8, 15, 16, 10, 12, 13, 14, 11, 17, 1, 18];
    const STORAGE_KEY = "viper-academy-progress-v1";
    const LAYOUT_STORAGE_KEY = "viper-academy-layout-v1";

    const PART_BRIEFINGS = {
        "Part 1 - Introduction": {
            koTitle: "기체 감잡기",
            track: "Orientation",
            mission: "왜 F-16이 이런 방식으로 날고, 왜 조작 감각이 다른지 이해하는 파트입니다.",
            summary: "Viper의 철학을 모르면 이후의 HOTAS, 에너지 관리, 착륙 감각이 다 따로 놀게 됩니다.",
            bullets: [
                "F-16의 별명인 Viper, 개발 배경, 멀티롤 전투기로서의 성격을 먼저 잡습니다.",
                "Fly-by-Wire와 고기동 기체라는 특성이 이후 절차와 비행 감각 전체를 바꾼다는 점을 이해합니다.",
                "뉴비 기준으로는 세부 전술보다도 먼저 “이 기체가 어떤 놈인지” 감을 잡는 역할입니다.",
            ],
            terms: ["Viper", "Fly-by-Wire", "9G"],
        },
        "Part 2 - Controls Setup": {
            koTitle: "컨트롤 세팅",
            track: "Setup",
            mission: "스로틀과 스틱에 무엇을 우선 배치해야 하는지 정리하는 파트입니다.",
            summary: "입문자는 실력이 아니라 바인딩 문제로 무너지는 경우가 많습니다. 이 파트는 그걸 막습니다.",
            bullets: [
                "Pitch, Roll, Rudder, Thrust, Radar Cursor 같은 축 세팅을 먼저 안정화합니다.",
                "TMS, DMS, CMS, NWS, Speed Brake처럼 손에 익혀야 하는 입력을 우선 배치합니다.",
                "트림이 시점 변경에 물려 있지 않은지 같은 기본 실수를 먼저 제거합니다.",
            ],
            terms: ["Pitch", "Roll", "Trim", "RDR Cursor", "NWS"],
        },
        "Part 3 - Cockpit & Equipment": {
            koTitle: "조종석과 장비 읽기",
            track: "Core",
            mission: "패널과 경고등, 스위치 위치를 읽을 수 있어야 체크리스트가 머리에 들어옵니다.",
            summary: "Viper는 익숙해지면 빠르지만, 초반에는 조종석 정보량이 높습니다. 어디를 봐야 하는지부터 익혀야 합니다.",
            bullets: [
                "DED, HUD, 경고등, 전원, 연료, 엔진 관련 패널이 어디 있는지 위치 감각을 만듭니다.",
                "시동과 비상 절차에서 자주 보는 패널의 목적을 먼저 익힙니다.",
                "나중에 무장과 센서 운용을 할 때도 결국 조종석 읽기 능력이 바탕이 됩니다.",
            ],
            terms: ["DED", "HUD", "Caution Panel", "EPU", "Main Power"],
        },
        "Part 4 - Start-Up Procedure": {
            koTitle: "시동 절차",
            track: "Startup",
            mission: "Cold Start를 외우는 것이 아니라, 왜 그 순서인지 이해하면서 반복 훈련하는 파트입니다.",
            summary: "배터리, FLCS, JFS, 엔진, INS, Datalink, IFF가 서로 어떤 흐름으로 이어지는지 감을 잡습니다.",
            bullets: [
                "A부터 I까지 시동 단계를 큰 흐름으로 먼저 외우고, 이후 세부 체크로 내려갑니다.",
                "JFS와 엔진 RPM, FTIT, 유압, 발전기 전환 같은 확인 포인트를 놓치지 않는 게 핵심입니다.",
                "실전에서는 빠른 램프 스타트보다도 안정적이고 재현 가능한 시동 루틴이 더 중요합니다.",
            ],
            terms: ["FLCS", "JFS", "INS", "IFF", "Datalink"],
        },
        "Part 5 - Taxi & Takeoff": {
            koTitle: "활주와 이륙",
            track: "Flightline",
            mission: "활주 중 NWS 사용, 속도 관리, 이륙 시점 감각을 만드는 파트입니다.",
            summary: "뉴비가 활주에서 흐트러지거나 로테이션 타이밍을 놓치는 문제를 가장 직접적으로 줄여줍니다.",
            bullets: [
                "NWS 활성화와 해제 타이밍을 확실히 익혀야 이륙 직전이 깔끔해집니다.",
                "CAT I / CAT III 확인, Probe Heat, Speed Brake, 브레이크 홀드 등 활주로 체크를 습관화합니다.",
                "중량별 이륙 속도와 스틱 당기는 타이밍이 왜 다른지 감각을 만듭니다.",
            ],
            terms: ["Taxi", "NWS", "CAT I", "CAT III", "Afterburner"],
        },
        "Part 6 - Landing": {
            koTitle: "착륙 패턴",
            track: "Recovery",
            mission: "F-16 특유의 패턴 착륙 감각과 AOA 중심의 접근 방식을 만드는 파트입니다.",
            summary: "특히 AOA를 스틱이 아니라 스로틀로 관리하는 감각을 몸에 넣는 것이 중요합니다.",
            bullets: [
                "Initial, Break, Downwind, Base, Final, Short Final, Roll-Out 흐름을 순서대로 익힙니다.",
                "11도 AOA와 13도 노즈업 브레이킹의 의미를 이해하면 착륙 안정성이 크게 올라갑니다.",
                "브레이크 성능이 약한 F-16의 롤아웃 특성을 반드시 체감해야 합니다.",
            ],
            terms: ["AOA", "Overhead Break", "Downwind", "Final Turn", "Roll-Out"],
        },
        "Part 7 - Engine & Fuel Management": {
            koTitle: "엔진과 연료 관리",
            track: "Systems",
            mission: "엔진 상태, 제한치, 연료 개념을 이해해서 기체를 함부로 혹사하지 않게 만드는 파트입니다.",
            summary: "비행은 되는 것 같아도, 연료와 엔진 개념이 약하면 장거리 임무나 비상상황에서 바로 막힙니다.",
            bullets: [
                "F110 엔진 계기와 한계를 읽는 법, Afterburner 특성, EPU 역할을 이해합니다.",
                "Bingo Fuel 개념을 익혀야 임무 후반 연료 판단이 쉬워집니다.",
                "엔진 재시동 절차는 비상상황 대처의 기초 체력입니다.",
            ],
            terms: ["F110-GE-129", "Bingo Fuel", "Afterburner", "EPU", "Relight"],
        },
        "Part 8 - Flight & Aerodynamics": {
            koTitle: "비행 특성과 공력",
            track: "Airmanship",
            mission: "기체 한계와 에너지 감각을 이해해서 조작이 왜 그렇게 반응하는지 파악하는 파트입니다.",
            summary: "이 파트를 이해하면 기체가 이상한 게 아니라, 내가 기체 특성을 모르는 거였다는 게 보입니다.",
            bullets: [
                "고기동 기체의 한계와 경고 체계가 어떻게 연결되는지 이해합니다.",
                "ALOW와 VMS는 단순한 경고음이 아니라 생존 보조 도구입니다.",
                "공력 특성 이해는 BFM뿐 아니라 이착륙과 저고도 비행에도 직결됩니다.",
            ],
            terms: ["Aerodynamics", "ALOW", "VMS", "Aircraft Limits"],
        },
        "Part 9 - HOTAS": {
            koTitle: "HOTAS 조작 체계",
            track: "Hands",
            mission: "손에서 눈을 떼지 않고 센서와 무장을 다루기 위한 기본 언어를 익히는 파트입니다.",
            summary: "DCS F-16에서 진짜 장벽은 HOTAS입니다. 여기서 손이 풀리면 게임이 아니라 기체를 조종하게 됩니다.",
            bullets: [
                "TMS, DMS, CMS, NWS, Paddle, Dogfight Switch, MAN RNG/UNCAGE의 역할을 분리해서 외웁니다.",
                "Stick과 Throttle 각각의 입력 철학을 이해하면 바인딩도 덜 헷갈립니다.",
                "이 파트는 이후 레이더, TGP, 무장, 방어체계의 공통 조작 언어가 됩니다.",
            ],
            terms: ["HOTAS", "TMS", "DMS", "CMS", "Paddle Switch"],
        },
        "Part 10 - Radar & Sensors": {
            koTitle: "레이더와 센서",
            track: "Sensors",
            mission: "Viper의 눈과 손전등 역할을 하는 레이더, TGP, HMCS, Maverick 센서를 배우는 파트입니다.",
            summary: "이 파트가 커다란 이유는 당연합니다. F-16의 전투력 대부분이 센서 운용에서 나옵니다.",
            bullets: [
                "RWS, TWS, STT, ACM 같은 A-A 레이더 모드와 A-G 레이더 모드를 구분합니다.",
                "LITENING AT, HMCS, Maverick 영상 운용이 어떻게 연결되는지 익힙니다.",
                "센서 선택, 슬레이브, 커서 제어를 HOTAS 기준으로 이해해야 실전에서 손이 꼬이지 않습니다.",
            ],
            terms: ["FCR", "RWS", "TWS", "LITENING AT", "HMCS"],
        },
        "Part 11 - Offence: Weapons & Armament": {
            koTitle: "무장 운용",
            track: "Weapons",
            mission: "A-A와 A-G 무장을 실제로 어떤 논리로 써야 하는지 배우는 파트입니다.",
            summary: "센서를 본 뒤 곧바로 무장을 붙여야 전체 킬체인이 연결됩니다.",
            bullets: [
                "AIM-9, AIM-120 같은 공대공 무장과 CCIP, CCRP, JDAM, JSOW 같은 공대지 운용이 이어집니다.",
                "투하 모드와 표적 지정 흐름을 이해해야 무장 사용이 단순 버튼 누르기로 끝나지 않습니다.",
                "실전 감각은 결국 센서 + HOTAS + 무장 절차를 하나로 엮는 데서 나옵니다.",
            ],
            terms: ["CCIP", "CCRP", "JDAM", "JSOW", "AIM-120"],
        },
        "Part 12 - Defence: RWR & Countermeasures": {
            koTitle: "방어체계",
            track: "Survival",
            mission: "적에게 락되기 전에 보는 법, 락된 뒤 버티는 법, 맞기 전에 끊는 법을 배우는 파트입니다.",
            summary: "RWR를 못 읽으면 센서와 무장을 배워도 오래 살아남기 어렵습니다.",
            bullets: [
                "RWR 심볼과 위협 방향을 읽고, 위험도 우선순위를 판단합니다.",
                "CMS와 프로그램 기반 Chaff/Flare 운용을 연결합니다.",
                "방어는 따로 노는 기능이 아니라 항상 센서, 기동, 속도 관리와 같이 갑니다.",
            ],
            terms: ["RWR", "Countermeasures", "Chaff", "Flare", "CMS"],
        },
        "Part 13 - Datalink & IFF": {
            koTitle: "데이터링크와 IFF",
            track: "Network",
            mission: "내 센서만 보는 것이 아니라 네트워크 전장 정보를 읽는 파트입니다.",
            summary: "멀티든 싱글이든, Datalink와 IFF를 알면 상황인식이 완전히 달라집니다.",
            bullets: [
                "Datalink 심볼과 필터, IFF 절차가 어떻게 연동되는지 이해합니다.",
                "적아식별을 대충 넘기면 BVR에서 큰 사고로 이어질 수 있습니다.",
                "HMCS, FCR, SA 인식이 한 덩어리로 묶이는 지점입니다.",
            ],
            terms: ["Datalink", "IFF", "FCR", "Symbology", "SA"],
        },
        "Part 14 - Radio Tutorial": {
            koTitle: "무전 운용",
            track: "Comms",
            mission: "VHF/UHF 무전을 다뤄서 ATC, 편대, 탱커와의 흐름을 놓치지 않게 합니다.",
            summary: "무전은 전술보다 먼저 익혀야 하는 생활기술입니다. 특히 멀티나 절차 비행에서 더 그렇습니다.",
            bullets: [
                "UHF, VHF 전송 구조와 스위치 방향을 분리해서 이해합니다.",
                "라디오 세팅을 익혀야 탱커, ATC, AI 교신 흐름이 편해집니다.",
                "무전은 체크리스트 일부처럼 몸에 붙여두면 나중에 부담이 크게 줄어듭니다.",
            ],
            terms: ["UHF", "VHF", "Transmit Switch", "ATC", "Tanker"],
        },
        "Part 15 - Flight Controls & Autopilot": {
            koTitle: "비행조종과 오토파일럿",
            track: "Handling",
            mission: "수동 비행과 보조 자동비행 기능을 함께 이해하는 파트입니다.",
            summary: "트림, 비행제어, AP 개념이 잡히면 장거리 비행과 센서 작업 여유가 생깁니다.",
            bullets: [
                "Flight Controls의 제한과 특성을 이해하면 조작 입력이 더 깔끔해집니다.",
                "Autopilot은 게으름 도구가 아니라 작업 분산 도구입니다.",
                "센서 세팅이나 항법 작업을 할 때 여유를 확보하는 기반이 됩니다.",
            ],
            terms: ["Autopilot", "Flight Controls", "Trim", "Stability"],
        },
        "Part 16 - Navigation & ILS Landing": {
            koTitle: "항법과 ILS 착륙",
            track: "Nav",
            mission: "Steerpoint, TACAN, ILS, 계기 접근까지 묶어서 기체를 목적지로 정확히 가져가는 파트입니다.",
            summary: "가이드에서 규모가 큰 편이고, 실제 임무 완주 능력을 크게 올려주는 파트입니다.",
            bullets: [
                "Steerpoint, Flight Plan, HSI, TACAN, ILS를 서로 연결해서 이해합니다.",
                "악기상이나 야간에서 기체를 믿고 데려오는 능력이 여기서 생깁니다.",
                "단순 길찾기가 아니라, 전술 전후의 귀환 능력을 만드는 핵심 파트입니다.",
            ],
            terms: ["Steerpoint", "TACAN", "ILS", "HSI", "Flight Plan"],
        },
        "Part 17 - Air-to-Air Refueling": {
            koTitle: "공중급유",
            track: "Precision",
            mission: "접근, 위치 유지, boom 접속, 분리를 포함한 정밀 비행을 훈련하는 파트입니다.",
            summary: "많은 사람이 벽처럼 느끼는 파트지만, 사실은 속도·시선·미세 입력을 가다듬는 최고의 훈련입니다.",
            bullets: [
                "속도 차와 기준점 유지 감각을 익히면 AAR뿐 아니라 편대 비행도 좋아집니다.",
                "NWS 버튼의 A/R 기능처럼 평소와 다른 컨텍스트도 자연스럽게 이해하게 됩니다.",
                "실패를 많이 해도 정상입니다. 이 파트는 정밀 입력 훈련에 가깝습니다.",
            ],
            terms: ["AAR", "Boom", "Disconnect", "Formation", "Closure"],
        },
        "Part 18 - Other Resources": {
            koTitle: "추가 자료",
            track: "Sustainment",
            mission: "가이드를 다 본 뒤 계속 성장하기 위한 확장 자료와 연결하는 파트입니다.",
            summary: "한 번 보고 끝내는 문서가 아니라, 계속 참고하는 운영 매뉴얼로 쓰는 단계입니다.",
            bullets: [
                "반복 학습이 필요한 영역을 다시 돌아올 기준점 역할을 합니다.",
                "외부 리소스와 병행하면 특정 무장이나 센서 파트를 더 깊게 파고들 수 있습니다.",
                "결국 mastery는 한 번의 완독보다 반복 참조에서 나옵니다.",
            ],
            terms: ["Checklist", "Reference", "Training Loop"],
        },
    };

    const GLOSSARY = [
        { term: "HOTAS", ko: "손을 스로틀과 스틱에서 떼지 않는 조작 철학", desc: "Hands On Throttle And Stick. 전투 중 시선을 밖에 두고도 센서와 무장을 조작하도록 설계된 입력 체계입니다.", part: "Part 9 - HOTAS" },
        { term: "FLCS", ko: "비행제어 시스템", desc: "Flight Control System. F-16의 Fly-by-Wire 제어를 담당하며 시동 초기에 확인이 중요합니다.", part: "Part 4 - Start-Up Procedure" },
        { term: "JFS", ko: "제트 연료 시동기", desc: "Jet Fuel Starter. 엔진을 스풀업시키기 위한 보조 시동 장치입니다.", part: "Part 4 - Start-Up Procedure" },
        { term: "INS", ko: "관성항법장치", desc: "Inertial Navigation System. 정렬이 끝나야 정확한 항법과 무장 운용이 쉬워집니다.", part: "Part 4 - Start-Up Procedure" },
        { term: "IFF", ko: "적아식별", desc: "Identification Friend or Foe. BVR나 네트워크 전장에서 실수를 줄이는 핵심 절차입니다.", part: "Part 13 - Datalink & IFF" },
        { term: "HUD", ko: "헤드업 디스플레이", desc: "Heads-Up Display. 시야를 내리지 않고 주요 비행·전투 정보를 보는 창입니다.", part: "Part 3 - Cockpit & Equipment" },
        { term: "HMCS", ko: "헬멧 장착 조준 시스템", desc: "Helmet-Mounted Cueing System. 시선 방향과 표적 지정을 연결해주는 핵심 장비입니다.", part: "Part 10 - Radar & Sensors" },
        { term: "FCR", ko: "화기관제 레이더", desc: "Fire Control Radar. 공대공과 공대지 센서 운용의 중심이 되는 레이더입니다.", part: "Part 10 - Radar & Sensors" },
        { term: "RWR", ko: "레이더 경보 수신기", desc: "Radar Warning Receiver. 누가 나를 보고 있는지, 얼마나 위험한지 알려주는 방어 핵심 장비입니다.", part: "Part 12 - Defence: RWR & Countermeasures" },
        { term: "TMS", ko: "표적 관리 스위치", desc: "Target Management Switch. 표적 지정, 락, 센서 우선순위 흐름에서 핵심이 됩니다.", part: "Part 9 - HOTAS" },
        { term: "DMS", ko: "디스플레이 관리 스위치", desc: "Display Management Switch. 어느 MFD나 디스플레이를 주로 다룰지 정하는 입력입니다.", part: "Part 9 - HOTAS" },
        { term: "CMS", ko: "기만체계 관리 스위치", desc: "Countermeasures Switch. Chaff, Flare, 프로그램 동작 등 방어 절차의 중심 스위치입니다.", part: "Part 9 - HOTAS" },
        { term: "NWS", ko: "노즈휠 스티어링", desc: "Nosewheel Steering. 지상 활주 시 방향 제어에 필수이며, 이륙 가속 중 해제 타이밍도 중요합니다.", part: "Part 5 - Taxi & Takeoff" },
        { term: "AOA", ko: "받음각", desc: "Angle of Attack. F-16 착륙에서는 속도보다 AOA 감각이 훨씬 중요하게 작용합니다.", part: "Part 6 - Landing" },
        { term: "FTIT", ko: "팬 터빈 입구 온도", desc: "Fan Turbine Inlet Temperature. 엔진 상태를 확인하는 중요한 온도 지표입니다.", part: "Part 7 - Engine & Fuel Management" },
        { term: "EPU", ko: "비상 전원 장치", desc: "Emergency Power Unit. 비상 전력 공급과 관련된 장치이며 시동 전 확인도 중요합니다.", part: "Part 7 - Engine & Fuel Management" },
        { term: "CCIP", ko: "연속 계산 충돌점", desc: "Continuously Computed Impact Point. 주로 수동 조준 감각이 필요한 공대지 투하 모드입니다.", part: "Part 11 - Offence: Weapons & Armament" },
        { term: "CCRP", ko: "연속 계산 릴리즈 포인트", desc: "Continuously Computed Release Point. 컴퓨터가 투하시점을 계산하는 공대지 투하 모드입니다.", part: "Part 11 - Offence: Weapons & Armament" },
        { term: "DTOS", ko: "표적 오프셋 시점 지정 모드", desc: "Dive Toss와 연결되는 공대지 운용 모드로 HOTAS와 HMCS 운용과도 연결됩니다.", part: "Part 11 - Offence: Weapons & Armament" },
        { term: "RWS", ko: "탐색 모드", desc: "Range While Search. 공대공 레이더 기본 탐색 모드 중 하나입니다.", part: "Part 10 - Radar & Sensors" },
        { term: "TWS", ko: "추적 탐색 모드", desc: "Track While Scan. 복수 표적을 보면서 추적할 수 있는 고급 레이더 모드입니다.", part: "Part 10 - Radar & Sensors" },
        { term: "STT", ko: "단일 표적 추적", desc: "Single Target Track. 한 표적에 강하게 집중하는 레이더 추적 방식입니다.", part: "Part 10 - Radar & Sensors" },
        { term: "AAR", ko: "공중급유", desc: "Air-to-Air Refueling. 장거리 작전과 체공 시간을 늘리는 핵심 절차입니다.", part: "Part 17 - Air-to-Air Refueling" },
        { term: "ILS", ko: "계기착륙장치", desc: "Instrument Landing System. 시계가 나쁠 때 활주로 접근을 돕는 항법 체계입니다.", part: "Part 16 - Navigation & ILS Landing" },
        { term: "TACAN", ko: "전술 항법 장치", desc: "Tactical Air Navigation. 위치와 방위를 잡는 데 쓰는 중요한 항법 도구입니다.", part: "Part 16 - Navigation & ILS Landing" },
        { term: "Steerpoint", ko: "항법 기준점", desc: "비행 경로와 임무 진행 기준이 되는 웨이포인트 개념입니다.", part: "Part 16 - Navigation & ILS Landing" },
    ];

    const SEQUENCE_PACKS = [
        {
            title: "Cold Start Flow",
            moduleTitle: "Part 4 - Start-Up Procedure",
            modeLabel: "체크리스트 플로우 / Checklist Flow",
            trainingGoal: "램프에서 막히지 않으려면, 시동은 개별 스위치보다 큰 단계 흐름을 먼저 기억해야 합니다.",
            debrief: "시동은 전원, 엔진, 항전장비, INS, 데이터링크, IFF 순서의 큰 줄기를 유지하는 것이 핵심입니다.",
            steps: [
                { ko: "기체 전원 공급", en: "Provide Aircraft Power" },
                { ko: "시동 전 사전 설정", en: "Perform Aircraft Pre-Start Setup" },
                { ko: "엔진 시동", en: "Engine Start" },
                { ko: "항전장비 세팅", en: "Set Up Avionics" },
                { ko: "INS 정렬", en: "Perform INS Alignment" },
                { ko: "데이터링크 설정", en: "Set Up Datalink" },
                { ko: "IFF 설정", en: "Set Up IFF" },
                { ko: "기체 최종 세팅 완료", en: "Complete Aircraft Setup" },
                { ko: "시동 후 체크", en: "Perform Aircraft Post-Start Checks" },
            ],
        },
        {
            title: "Takeoff Run",
            moduleTitle: "Part 5 - Taxi & Takeoff",
            modeLabel: "체크리스트 플로우 / Checklist Flow",
            trainingGoal: "활주로에서 꼬이는 가장 큰 이유는 NWS, Probe Heat, 브레이크, 스풀업 순서가 흐트러지기 때문입니다.",
            debrief: "이륙 전 체크는 활주로 진입 뒤에 급하게 하는 것이 아니라, 가속 전에 기체 상태를 안정시키는 과정입니다.",
            steps: [
                { ko: "활주로 정렬", en: "Line up on the runway" },
                { ko: "Taxi Light 끄기", en: "Turn OFF taxi light" },
                { ko: "Position Light STEADY", en: "Set Position Lights Switch - STEADY" },
                { ko: "Probe Heat 켜기", en: "Set Probe Heat switch – PROBE HEAT" },
                { ko: "NWS, Speed Brake, FLCS 모드 확인", en: "Verify NWS, Speed Brakes and FLCS mode" },
                { ko: "휠 브레이크 홀드", en: "Hold wheel brakes" },
                { ko: "90% RPM까지 스풀업", en: "Throttle up to 90% RPM" },
                { ko: "MIL 또는 AB로 가속", en: "Throttle up to MIL or Afterburner" },
                { ko: "브레이크 릴리즈", en: "Release wheel brakes" },
                { ko: "70노트에서 NWS 해제", en: "Disengage nosewheel steering" },
                { ko: "이륙 속도 직전 로테이션", en: "Rotate before takeoff speed" },
                { ko: "양력 확인 후 기어 업", en: "Positive climb then gear up" },
            ],
        },
        {
            title: "Landing Pattern",
            moduleTitle: "Part 6 - Landing",
            modeLabel: "체크리스트 플로우 / Checklist Flow",
            trainingGoal: "착륙은 숫자 암기보다 패턴 흐름과 AOA 감각이 먼저 몸에 들어와야 안정됩니다.",
            debrief: "오버헤드 브레이크부터 숏 파이널까지 흐름을 머릿속에 고정하면 접근 중에도 시선이 덜 흔들립니다.",
            steps: [
                { ko: "초기 진입", en: "Initial Approach" },
                { ko: "오버헤드 브레이크", en: "Overhead Break" },
                { ko: "다운윈드", en: "Downwind Leg" },
                { ko: "베이스 턴", en: "Base Turn" },
                { ko: "파이널 턴", en: "Final Turn" },
                { ko: "숏 파이널", en: "Short Final" },
                { ko: "롤아웃", en: "Roll-Out" },
            ],
        },
    ];

    const HOTAS_QUESTIONS = [
        {
            prompt: "표적 관리 스위치 / Target Management Switch 는 무엇입니까?",
            context: "A-A와 A-G에서 표적 지정과 락 흐름의 중심이 되는 조작입니다.",
            choices: ["TMS", "DMS", "CMS", "Paddle Switch"],
            answer: "TMS",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "TMS는 Target Management Switch 입니다. 표적 관리와 센서 흐름에서 핵심 입력입니다.",
            practicalUse: "레이더 락이나 센서 우선순위를 바꿀 때 손에서 바로 나와야 하는 입력입니다.",
        },
        {
            prompt: "디스플레이 포커스를 다루는 Display Management Switch 는 무엇입니까?",
            context: "어느 디스플레이를 주로 다룰지 정하는 데 자주 쓰이는 입력입니다.",
            choices: ["DMS", "CMS", "Expand/FOV Button", "Dogfight Switch"],
            answer: "DMS",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "DMS는 Display Management Switch 입니다. MFD와 화면 우선순위를 다룰 때 자주 쓰입니다.",
            practicalUse: "SOI가 어디에 있는지 헷갈리면 센서 운용 전체가 꼬이기 시작합니다.",
        },
        {
            prompt: "Countermeasures Switch 의 약어는 무엇입니까?",
            context: "Chaff, Flare, 프로그램 방출 같은 방어 절차와 직접 연결됩니다.",
            choices: ["CMS", "TMS", "DMS", "MAN RNG"],
            answer: "CMS",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "CMS는 Countermeasures Switch 입니다. 방어체계 운용의 핵심 스위치입니다.",
            practicalUse: "RWR 경고가 들어왔을 때 생각보다 먼저 손이 가야 하는 스위치입니다.",
        },
        {
            prompt: "지상 활주 중 노즈휠 스티어링을 켜는 버튼은 무엇입니까?",
            context: "활주 유도와 이륙 직전 NWS 해제 타이밍에서 반드시 손에 익어야 합니다.",
            choices: ["NWS A/R DISC & MSL STEP Button", "Weapon Release Button", "Camera/Gun Trigger", "Expand/FOV Button"],
            answer: "NWS A/R DISC & MSL STEP Button",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "NWS A/R DISC & MSL STEP Button 은 지상에서는 Nosewheel Steering, 공중에서는 다른 맥락의 기능을 가집니다.",
            practicalUse: "활주 중 방향을 못 잡거나 70노트 해제 타이밍을 놓치면 이륙이 불안정해집니다.",
        },
        {
            prompt: "오토파일럿을 즉시 끊는 역할을 하는 입력은 무엇입니까?",
            context: "급박한 상황에서 즉시 수동 제어를 되찾는 용도로 중요합니다.",
            choices: ["Paddle Switch", "Dogfight Switch", "CMS", "TMS"],
            answer: "Paddle Switch",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "Paddle Switch 는 depressed 시 Autopilot override 역할을 합니다.",
            practicalUse: "접근이나 저고도 비행 중 기체가 내 손으로 바로 돌아와야 할 때 중요합니다.",
        },
        {
            prompt: "Dogfight / Missile Override / Center 3단 위치를 가지는 조작은 무엇입니까?",
            context: "근접전과 공대공 즉응 모드 전환을 빠르게 하기 위한 입력입니다.",
            choices: ["Dogfight Switch", "Speed Brake Switch", "Transmit Switch", "Radar Cursor/Enable"],
            answer: "Dogfight Switch",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "Dogfight Switch 는 근접 공중전 상태 전환을 매우 빠르게 수행하는 3위치 스위치입니다.",
            practicalUse: "A-A 상황에서 모드를 메뉴로 찾는 순간 이미 늦는 경우가 많습니다.",
        },
        {
            prompt: "센서 화면의 시야각을 바꾸는 Expand / FOV 조작은 무엇입니까?",
            context: "현재 선택된 센서나 시스템의 field-of-view를 순환합니다.",
            choices: ["Expand/FOV Button", "DMS", "CMS", "Paddle Switch"],
            answer: "Expand/FOV Button",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "Expand/FOV Button 은 현재 선택된 센서의 시야각을 전환할 때 사용됩니다.",
            practicalUse: "TGP나 레이더 화면을 더 자세히 보거나 넓게 훑을 때 즉시 쓰게 됩니다.",
        },
        {
            prompt: "레이더 또는 TGP 커서를 실제로 슬루하는 입력은 무엇입니까?",
            context: "센서 운용 전체에서 거의 항상 손에 익혀야 하는 입력입니다.",
            choices: ["Radar Cursor/Enable Switch", "Transmit Switch", "NWS Button", "Weapon Release Button"],
            answer: "Radar Cursor/Enable Switch",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "Radar Cursor/Enable Switch 는 FCR, TGP, 무장 비디오에서 커서를 움직이는 핵심 입력입니다.",
            practicalUse: "표적을 찾고 옮기고 지정하는 모든 흐름이 이 입력 위에 올라갑니다.",
        },
        {
            prompt: "레이더 안테나 고도를 바꾸는 조작은 무엇입니까?",
            context: "표적이 안 잡힐 때는 모드만이 아니라 안테나 높이 문제인 경우도 많습니다.",
            choices: ["Radar Antenna Elevation Knob", "MAN RNG/UNCAGE", "Dogfight Switch", "CMS"],
            answer: "Radar Antenna Elevation Knob",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "Radar Antenna Elevation Knob 는 레이더 탐색 볼륨을 수직 방향으로 조정할 때 사용합니다.",
            practicalUse: "표적이 안 보일 때 레이더 모드보다 먼저 확인해야 할 경우가 많습니다.",
        },
        {
            prompt: "Speed Brake 를 열고 닫는 3위치 조작은 무엇입니까?",
            context: "접근, 감속, 착륙 패턴에서 자주 손에 가는 조작입니다.",
            choices: ["Speed Brake Switch", "Dogfight Switch", "Weapon Release Button", "Transmit Switch"],
            answer: "Speed Brake Switch",
            moduleTitle: "Part 9 - HOTAS",
            explanation: "Speed Brake Switch 는 AFT로 전개, FWD로 수납, Center로 현 상태 유지입니다.",
            practicalUse: "패턴 진입과 에너지 정리에 직접 연결되는 만큼 손 감각이 중요합니다.",
        },
    ];

    const DRILL_CONFIGS = {
        sequence: {
            label: "체크리스트 플로우",
            objective: "시동, 활주, 이륙, 착륙 절차를 실제 체크리스트 흐름처럼 반복 훈련합니다.",
            practiceValue: "DCS 초반 막힘의 대부분은 절차 흐름이 끊기는 데서 옵니다. 이 훈련은 그 구간을 줄이는 데 가장 직접적입니다.",
            totalRounds: 5,
            lives: 3,
        },
        hotas: {
            label: "HOTAS 반응 훈련",
            objective: "센서와 무장을 다루는 핵심 스위치를 실제 상황 문맥과 함께 손에 익힙니다.",
            practiceValue: "실전에서는 메뉴를 읽는 속도보다 손이 먼저 가는 속도가 더 중요합니다.",
            totalRounds: 6,
            lives: 3,
        },
        topic: {
            label: "가이드 구조 훈련",
            objective: "토픽을 보고 어느 파트로 들어가야 하는지 즉시 연결하는 감각을 만듭니다.",
            practiceValue: "막혔을 때 바로 관련 파트를 다시 펼칠 수 있어야 학습 속도가 크게 올라갑니다.",
            totalRounds: 5,
            lives: 3,
        },
    };

    const BADGE_LIBRARY = {
        first_sortie: { label: "첫 정답", desc: "첫 문제를 맞혔습니다." },
        hot_streak: { label: "3연속 정답", desc: "3연속 정답을 달성했습니다." },
        clean_sortie: { label: "무실수 완주", desc: "오답 없이 훈련을 완주했습니다." },
        systems_brain: { label: "HOTAS 감각", desc: "HOTAS 반응 훈련을 클리어했습니다." },
        route_reader: { label: "구조 독파", desc: "가이드 구조 훈련을 클리어했습니다." },
        checklist_flow: { label: "절차 숙달", desc: "체크리스트 플로우를 클리어했습니다." },
        triple_track: { label: "세 갈래 완주", desc: "세 가지 훈련을 모두 클리어했습니다." },
        academy_loop: { label: "반복 학습자", desc: "총 5회 훈련 클리어를 달성했습니다." },
    };

    const PILOT_RANKS = [
        { xp: 0, label: "Cadet" },
        { xp: 120, label: "Wingman" },
        { xp: 260, label: "Flight Lead" },
        { xp: 520, label: "Viper Driver" },
        { xp: 900, label: "Mission Commander" },
    ];

    const refs = {};
    let guideSearchTimer = 0;
    let isGuideSearchComposing = false;
    let imageModalReturnFocus = null;

    const state = {
        modules: [],
        glossary: [...GLOSSARY],
        selectedModuleId: null,
        selectedPage: 1,
        readerLanguage: hasAnyKoTranslation ? "ko" : "en",
        modalImageUrl: "",
        modalImageTitle: "",
        modalImagePage: 1,
        modalTriedStandardImage: false,
        progress: loadProgress(),
        quiz: null,
        quizSession: null,
        searchResults: [],
        glossaryFilter: "",
        layoutMode: loadLayout().sidebarMode,
        themeMode: loadLayout().themeMode,
        lastGuideSearchTerm: "",
    };

    document.addEventListener("DOMContentLoaded", initialize);

    function initialize() {
        captureRefs();
        state.modules = buildModules();
        state.selectedModuleId = state.modules[0] ? state.modules[0].id : null;
        setSelectedPage(state.modules[0] ? state.modules[0].pageStart : 1);
        if (!hasAnyKoTranslation) {
            state.readerLanguage = "en";
        }
        bindEvents();
        renderRouteList();
        renderGlossary();
        renderAll();
        applyTheme();
        applyLayout();
        startDrill("sequence", { countRun: false });
    }

    function captureRefs() {
        refs.shell = document.querySelector(".shell");
        refs.workspace = document.getElementById("workspace");
        refs.workspaceToolbar = document.getElementById("workspaceToolbar");
        refs.layoutButtons = Array.from(document.querySelectorAll("[data-layout-mode]"));
        refs.themeButtons = Array.from(document.querySelectorAll("[data-theme-mode]"));
        refs.workspaceAside = document.querySelector("#workspace > aside");
        refs.routeList = document.getElementById("routeList");
        refs.statPages = document.getElementById("statPages");
        refs.statModules = document.getElementById("statModules");
        refs.statXp = document.getElementById("statXp");
        refs.statAccuracy = document.getElementById("statAccuracy");
        refs.moduleList = document.getElementById("moduleList");
        refs.glossaryList = document.getElementById("glossaryList");
        refs.glossarySearch = document.getElementById("glossarySearch");
        refs.glossaryReset = document.getElementById("glossaryReset");
        refs.moduleDetail = document.getElementById("moduleDetail");
        refs.quizShell = document.getElementById("quizShell");
        refs.guideSearchInput = document.getElementById("guideSearchInput");
        refs.guideSearchButton = document.getElementById("guideSearchButton");
        refs.searchResults = document.getElementById("searchResults");
        refs.searchResultsStatus = document.getElementById("searchResultsStatus");
        refs.imageModal = document.getElementById("imageModal");
        refs.imageModalCard = document.getElementById("imageModalCard");
        refs.imageModalTitle = document.getElementById("imageModalTitle");
        refs.imageModalImage = document.getElementById("imageModalImage");
        refs.imageModalFallback = document.getElementById("imageModalFallback");
        refs.imageModalClose = document.getElementById("imageModalClose");
    }

    function bindEvents() {
        refs.moduleList.addEventListener("click", handleModuleListClick);
        refs.moduleDetail.addEventListener("click", handleDetailClick);
        refs.quizShell.addEventListener("click", handleQuizClick);
        refs.searchResults.addEventListener("click", handleSearchResultClick);
        if (refs.glossarySearch) {
            refs.glossarySearch.addEventListener("input", () => {
                state.glossaryFilter = refs.glossarySearch.value.trim().toLowerCase();
                renderGlossary();
            });
        }
        if (refs.glossaryReset) {
            refs.glossaryReset.addEventListener("click", () => {
                if (refs.glossarySearch) {
                    refs.glossarySearch.value = "";
                }
                state.glossaryFilter = "";
                renderGlossary();
            });
        }
        refs.guideSearchButton.addEventListener("click", () => runGuideSearch(true));
        refs.guideSearchInput.addEventListener("input", scheduleGuideSearch);
        refs.guideSearchInput.addEventListener("compositionstart", () => {
            isGuideSearchComposing = true;
        });
        refs.guideSearchInput.addEventListener("compositionend", () => {
            isGuideSearchComposing = false;
            scheduleGuideSearch();
        });
        refs.guideSearchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !isGuideSearchComposing && !event.isComposing) {
                window.clearTimeout(guideSearchTimer);
                runGuideSearch(true);
            }
        });
        refs.workspaceToolbar.addEventListener("click", handleWorkspaceToolbarClick);
        refs.imageModal.addEventListener("click", handleImageModalClick);
        refs.imageModalClose.addEventListener("click", closeImageModal);
        refs.imageModalImage.addEventListener("error", handleModalImageError);
        refs.imageModalImage.addEventListener("load", handleModalImageLoad);
        document.addEventListener("keydown", handleDocumentKeydown);
        document.querySelectorAll("[data-drill]").forEach((button) => {
            button.addEventListener("click", () => startDrill(button.dataset.drill));
        });
    }

    function buildModules() {
        const roots = (manifest.tree || [])
            .filter((node) => /^Part \d+/.test(node.title))
            .map((node) => decorateModule(node));
        const referenceModule = buildReferenceModule();
        if (referenceModule) {
            roots.push(referenceModule);
        }

        return roots.sort((left, right) => left.routeRank - right.routeRank);
    }

    function buildReferenceModule() {
        const frontNodes = (manifest.tree || []).filter((node) => {
            return !/^Part \d+/.test(node.title) && node.pageStart && node.pageStart <= 3;
        });

        if (!frontNodes.length) {
            return null;
        }

        const pageStart = Math.min(...frontNodes.map((node) => node.pageStart || 1));
        const pageEnd = Math.max(...frontNodes.map((node) => node.pageEnd || node.pageStart || 1));
        const topics = frontNodes.map((node) => ({
            title: node.title,
            path: [node.title],
            pageStart: node.pageStart,
            pageEnd: node.pageEnd,
            rootTitle: "Guide Front Matter",
        }));

        topics.unshift({
            title: "가이드 서문",
            path: ["Guide Front Matter", "가이드 서문"],
            pageStart,
            pageEnd,
            rootTitle: "Guide Front Matter",
            synthetic: true,
        });

        return {
            id: "guide-front-matter",
            title: "Guide Front Matter",
            children: [],
            partNumber: 0,
            routeRank: 999,
            meta: {
                koTitle: "가이드 서문",
                track: "Reference",
                mission: "표지, 면책문, 목차 같은 앞머리 페이지도 검색 후 바로 열 수 있게 하는 레퍼런스 모듈입니다.",
                summary: "실제 학습 파트는 아니지만, 전체 가이드 구조를 빠르게 훑거나 검색 결과를 여는 데 필요합니다.",
                bullets: [
                    "표지, 면책문, 목차 페이지를 한데 묶어서 검색 결과 dead click을 없앱니다.",
                    "학습 루트에는 넣지 않지만, 전체 가이드 검색 범위는 그대로 유지합니다.",
                    "파트 1에 들어가기 전 가이드 구조를 빠르게 확인할 때 유용합니다.",
                ],
                terms: ["Cover", "Disclaimer", "Table of Contents"],
            },
            pageStart,
            pageEnd,
            topics,
        };
    }

    function decorateModule(node) {
        const partNumber = extractPartNumber(node.title);
        const meta = PART_BRIEFINGS[node.title] || defaultBriefing(node.title);
        const routeRank = routeRankFor(partNumber);
        const topics = collectTopics(node, node.title);
        topics.unshift({
            title: meta.koTitle,
            path: [node.title, meta.koTitle],
            pageStart: node.pageStart,
            pageEnd: node.pageEnd,
            rootTitle: node.title,
            synthetic: true,
        });

        return {
            ...node,
            partNumber,
            routeRank,
            meta,
            pageStart: node.pageStart || 1,
            pageEnd: node.pageEnd || node.pageStart || 1,
            topics,
        };
    }

    function collectTopics(node, rootTitle, list = []) {
        for (const child of node.children || []) {
            list.push({
                title: child.title,
                path: child.path,
                pageStart: child.pageStart,
                pageEnd: child.pageEnd,
                rootTitle,
            });
            collectTopics(child, rootTitle, list);
        }
        return list;
    }

    function renderAll() {
        renderStats();
        renderModules();
        renderModuleDetail();
        renderQuiz();
        renderSearchResults();
        applyLayout();
    }

    function renderRouteList() {
        const top = state.modules.filter((module) => module.partNumber > 0).slice(0, 6);
        refs.routeList.innerHTML = top
            .map(
                (module) => `
                    <div class="hero-list-item">
                        <span>${escapeHtml(module.meta.koTitle)} / ${escapeHtml(shortEnglishTitle(module.title))}</span>
                        <strong>${escapeHtml(moduleRankLabel(module))}</strong>
                    </div>
                `
            )
            .join("");
    }

    function renderStats() {
        const answered = state.progress.answered || 0;
        const correct = state.progress.correct || 0;
        const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
        const academyModuleCount = state.modules.filter((module) => module.partNumber > 0).length;
        refs.statPages.textContent = String(manifest.pageCount || pageTexts.length || 0);
        refs.statModules.textContent = String(academyModuleCount);
        refs.statXp.textContent = String(state.progress.xp || 0);
        refs.statAccuracy.textContent = `${accuracy}%`;
    }

    function renderModules() {
        refs.moduleList.innerHTML = state.modules
            .map((module) => {
                const score = getModuleScore(module.id);
                const active = state.selectedModuleId === module.id ? "active" : "";
                return `
                    <article class="module-card ${active}" data-module-id="${escapeHtml(module.id)}">
                        <div class="module-topline">
                            <span class="module-rank">${escapeHtml(moduleRankLabel(module))}</span>
                            <span class="module-score">${score.percent}%</span>
                        </div>
                        <div class="module-title">${escapeHtml(module.meta.koTitle)}</div>
                        <div class="module-subtitle">${escapeHtml(module.title)} / pp.${module.pageStart}-${module.pageEnd}</div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width:${score.percent}%;"></div>
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    function renderGlossary() {
        if (!refs.glossaryList) {
            return;
        }
        const filter = state.glossaryFilter;
        const filtered = state.glossary.filter((entry) => {
            if (!filter) {
                return true;
            }
            const haystack = `${entry.term} ${entry.ko} ${entry.desc} ${entry.part}`.toLowerCase();
            return haystack.includes(filter);
        });

        refs.glossaryList.innerHTML = filtered.length
            ? filtered
                  .map(
                      (entry) => `
                        <article class="glossary-card">
                            <div class="glossary-word">
                                <strong>${escapeHtml(entry.term)}</strong>
                                <span>${escapeHtml(entry.part)}</span>
                            </div>
                            <div class="muted"><strong>${escapeHtml(entry.ko)}</strong></div>
                            <div class="muted" style="margin-top:8px;">${escapeHtml(entry.desc)}</div>
                        </article>
                    `
                  )
                  .join("")
            : `<div class="empty-state">일치하는 용어가 없습니다.</div>`;
    }

    function renderModuleDetail() {
        syncModuleForSelectedPage();
        const module = getSelectedModule();
        if (!module) {
            refs.moduleDetail.innerHTML = `<div class="empty-state">선택된 모듈이 없습니다.</div>`;
            return;
        }

        const totalPages = guidePageCount();
        state.selectedPage = clamp(state.selectedPage, 1, totalPages);
        const pageText = currentReaderText(state.selectedPage);
        const moduleScore = getModuleScore(module.id);
        const topSections = module.topics.slice(0, 14);
        const imageUrl = pageImageUrl(state.selectedPage);
        const translationAvailable = hasKoTranslation(state.selectedPage);
        const atModuleStart = state.selectedPage <= module.pageStart;
        const atModuleEnd = state.selectedPage >= module.pageEnd;
        const atFirstPage = state.selectedPage <= 1;
        const atLastPage = state.selectedPage >= totalPages;
        const languageBadge =
            state.readerLanguage === "ko" && translationAvailable ? "한국어 기계번역" : "영문 추출본";
        const readerHeadline =
            state.readerLanguage === "ko" && translationAvailable
                ? "한국어로 먼저 이해하고, 필요할 때 바로 영문 용어로 전환하세요."
                : "영문 원문 기반 페이지입니다. 필요하면 인접 페이지도 함께 확인하세요.";

        refs.moduleDetail.innerHTML = `
            <div class="detail-headline">
                <div>
                    <div class="panel-kicker">${escapeHtml(module.meta.track)}</div>
                    <h3>${escapeHtml(module.meta.koTitle)}</h3>
                    <div class="english-title">${escapeHtml(module.title)} / ${formatPageRange(module.pageStart, module.pageEnd)}</div>
                </div>
                <div class="route-banner">
                    <span class="route-chip">${escapeHtml(moduleRankLabel(module))}</span>
                    <span class="route-chip">진행률 ${moduleScore.percent}%</span>
                    <span class="route-chip">토픽 ${module.topics.length}개</span>
                </div>
            </div>

            <div class="briefing-card">
                <div class="muted">${escapeHtml(module.meta.mission)}</div>
                <div class="muted">${escapeHtml(module.meta.summary)}</div>
                <ul class="briefing-list">
                    ${module.meta.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
                <div class="route-banner">
                    ${module.meta.terms.map((term) => `<span class="term-chip">${escapeHtml(term)}</span>`).join("")}
                </div>
            </div>

            <div class="detail-grid">
                <div class="section-card">
                    <strong>원문 구조 / English Outline</strong>
                    <div class="muted">가이드 목차를 그대로 따라가며, 현재 파트에서 무엇을 배우는지 한눈에 잡습니다.</div>
                    <div class="section-list">
                        ${topSections
                            .map(
                                (topic) => `
                                    <article class="section-card">
                                        <strong>${escapeHtml(topic.title)}</strong>
                                        <div class="section-meta">${escapeHtml(formatTopicPath(topic.path, module.title))}</div>
                                        <div class="route-banner" style="margin-top:10px;">
                                            <span class="meta-chip">${formatPageRange(topic.pageStart, topic.pageEnd)}</span>
                                            <button class="small-button" data-jump-page="${topic.pageStart || module.pageStart}">이 페이지 열기</button>
                                        </div>
                                    </article>
                                `
                            )
                            .join("")}
                    </div>
                </div>

                <div class="section-card">
                    <strong>학습 제안 / What To Drill</strong>
                    <div class="muted">
                        ${escapeHtml(buildPracticeHint(module))}
                    </div>
                    <div class="route-banner" style="margin-top:14px;">
                        <button class="small-button" data-drill-start="sequence">절차 훈련</button>
                        <button class="small-button" data-drill-start="hotas">HOTAS 반응 훈련</button>
                        <button class="small-button" data-drill-start="topic">구조 훈련</button>
                    </div>
                </div>
            </div>

            <div class="reader-head">
                <div>
                    <div class="panel-kicker">Guide Reader</div>
                    <div class="muted">현재 페이지 ${state.selectedPage} / 모듈 범위 ${module.pageStart}-${module.pageEnd} / ${languageBadge}</div>
                </div>
                <div class="reader-controls">
                    <div class="reader-language">
                        <span class="reader-language-label">Text</span>
                        <button class="reader-language-button ${state.readerLanguage === "ko" ? "active" : ""}" data-reader-language="ko" type="button" ${translationAvailable ? "" : "disabled"}>
                            한국어
                        </button>
                        <button class="reader-language-button ${state.readerLanguage === "en" ? "active" : ""}" data-reader-language="en" type="button">
                            English
                        </button>
                    </div>
                    <button class="small-button" data-page-action="first" type="button" ${atModuleStart ? "disabled" : ""}>처음</button>
                    <button class="small-button" data-page-action="prev" type="button" ${atFirstPage ? "disabled" : ""}>이전</button>
                    <button class="small-button" data-page-action="next" type="button" ${atLastPage ? "disabled" : ""}>다음</button>
                    <button class="small-button" data-page-action="last" type="button" ${atModuleEnd ? "disabled" : ""}>끝</button>
                </div>
            </div>
            <div class="reader-meta">
                <span class="meta-chip">${escapeHtml(module.meta.koTitle)}</span>
                <span class="meta-chip">${formatPageRange(state.selectedPage, state.selectedPage)}</span>
                <span class="meta-chip">${escapeHtml(languageBadge)}</span>
            </div>
            <div class="reader-layout">
                <div class="reader-visual">
                    <div class="reader-visual-top">
                        <div class="reader-visual-title">Page Visual / ${formatPageRange(state.selectedPage, state.selectedPage)}</div>
                        <button class="action-button" data-open-image-modal="${state.selectedPage}" type="button">크게 보기</button>
                    </div>
                    <div class="reader-image-shell">
                        <button class="reader-page-hotspot prev" data-page-action="prev" type="button" aria-label="이전 페이지" ${atFirstPage ? "disabled" : ""}></button>
                        <button class="reader-page-hotspot next" data-page-action="next" type="button" aria-label="다음 페이지" ${atLastPage ? "disabled" : ""}></button>
                        <img
                            class="reader-image"
                            src="${escapeHtml(imageUrl)}"
                            alt="Guide page ${state.selectedPage}"
                            data-open-image-modal="${state.selectedPage}"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        >
                        <div class="reader-fallback">
                            이 페이지 이미지가 아직 생성되지 않았습니다. PDF 추출 스크립트를
                            <code>--render-page-images</code> 옵션으로 다시 실행하면 페이지 그림과 설명을 같이 볼 수 있습니다.
                        </div>
                        <div class="reader-page-hint">좌우 클릭으로 페이지 넘기기</div>
                    </div>
                </div>
                <section class="reader-body">
                    <div class="reader-body-head">
                        <div class="reader-body-title">
                            <span class="reader-body-label">${escapeHtml(state.readerLanguage === "ko" && translationAvailable ? "Korean Reader" : "English Reader")}</span>
                            <div class="muted">${escapeHtml(readerHeadline)}</div>
                        </div>
                        <span class="meta-chip">${escapeHtml(languageBadge)}</span>
                    </div>
                    <article class="reader-copy">${escapeHtml(pageText)}</article>
                </section>
            </div>
        `;
    }

    function renderQuiz() {
        if (!state.quiz) {
            refs.quizShell.innerHTML = `
                <div class="quiz-kicker">훈련 대기</div>
                <div class="quiz-question">훈련 하나를 선택해 시작하세요.</div>
                <div class="quiz-context">체크리스트 플로우는 절차 감각, HOTAS 반응 훈련은 손 기억, 가이드 구조 훈련은 필요한 파트를 빨리 찾는 감각을 키웁니다.</div>
            `;
            return;
        }

        const question = state.quiz;
        const session = state.quizSession;
        const completedRounds = session ? session.correct + session.wrong : 0;
        const accuracy = completedRounds ? Math.round((session.correct / completedRounds) * 100) : 0;
        const drillConfig = session ? DRILL_CONFIGS[session.mode] : null;
        const nextActionLabel = !session
            ? "새 훈련 시작"
            : session.status === "active"
              ? question.answered
                  ? "다음 단계"
                  : "이번 훈련 다시"
              : "같은 훈련 재도전";
        const statusLabel = session ? quizSessionStatusLabel(session) : "대기";
        const rank = currentPilotRank();
        const objectiveText = session ? drillConfig.objective : "";
        const practiceValue = question.trainingValue || (drillConfig ? drillConfig.practiceValue : "");
        const missionPoint = question.answered
            ? question.trainingPoint || question.reference
            : question.preAnswerPoint || "정답을 확인하면 이번 문제의 핵심 연결 포인트가 열립니다.";
        const badgeList = renderUnlockedBadges();
        const sessionGrade = session ? quizSessionGrade(session) : "입문";

        refs.quizShell.innerHTML = `
            <div class="sortie-board">
                <div class="sortie-topline">
                    <div class="quiz-kicker">훈련 브리핑</div>
                    <div class="sortie-status">${escapeHtml(statusLabel)}</div>
                </div>
                <div class="sortie-grid">
                    <article class="sortie-tile">
                        <span>현재 등급</span>
                        <strong>${escapeHtml(rank.label)}</strong>
                        <small>${state.progress.xp} XP</small>
                    </article>
                    <article class="sortie-tile">
                        <span>진행 단계</span>
                        <strong>${session ? `${completedRounds}/${session.totalRounds}` : "0/0"}</strong>
                        <small>${session ? `문제 ${Math.min(session.round, session.totalRounds)} / ${session.totalRounds}` : ""}</small>
                    </article>
                    <article class="sortie-tile">
                        <span>콤보 / 여유</span>
                        <strong>${session ? `x${session.streak}` : "x0"} / ${session ? session.livesLeft : 0}</strong>
                        <small>최고 콤보 ${session ? session.bestStreak : 0}</small>
                    </article>
                    <article class="sortie-tile">
                        <span>훈련 평가</span>
                        <strong>${escapeHtml(sessionGrade)}</strong>
                        <small>정답률 ${accuracy}%</small>
                    </article>
                </div>
                <div class="sortie-progress">
                    <div class="sortie-progress-fill" style="width:${session ? quizSessionProgressPercent(session) : 0}%;"></div>
                </div>
                <div class="sortie-brief">${escapeHtml(objectiveText)}</div>
                <div class="sortie-badges">
                    ${badgeList || `<span class="sortie-badge muted-badge">배지는 첫 정답, 3연속 정답, 무실수 완주 같은 학습 성과로 열립니다.</span>`}
                </div>
            </div>
            <div class="quiz-kicker">${escapeHtml(question.kicker)}</div>
            <div class="quiz-question">${escapeHtml(question.prompt)}</div>
            <div class="quiz-context">${escapeHtml(question.context)}</div>
            <div class="quiz-brief-grid">
                <article class="quiz-brief-card">
                    <div class="quiz-brief-label">실전 연결</div>
                    <div class="quiz-brief-copy">${escapeHtml(practiceValue)}</div>
                </article>
                <article class="quiz-brief-card">
                    <div class="quiz-brief-label">이번 문제 포인트</div>
                    <div class="quiz-brief-copy">${escapeHtml(missionPoint)}</div>
                </article>
            </div>
            <div class="question-choices">
                ${question.choices
                    .map((choice, index) => {
                        let className = "choice-button";
                        if (question.answered) {
                            if (index === question.answerIndex) {
                                className += " correct";
                            } else if (index === question.selectedIndex) {
                                className += " wrong";
                            }
                        }
                        return `<button class="${className}" data-choice-index="${index}">${escapeHtml(choice)}</button>`;
                    })
                    .join("")}
            </div>
            <div class="quiz-footer">
                <div class="feedback">
                    ${question.answered ? escapeHtml(question.feedback) : `참조: ${escapeHtml(question.reference)}`}
                </div>
                <div class="reader-controls">
                    <button class="small-button" data-quiz-refresh="${escapeHtml(question.mode)}">${escapeHtml(nextActionLabel)}</button>
                    ${
                        question.moduleId
                            ? `<button class="small-button" data-open-module="${escapeHtml(question.moduleId)}">관련 파트 열기</button>`
                            : ""
                    }
                </div>
            </div>
        `;
    }

    function renderSearchResults() {
        if (!state.searchResults.length) {
            refs.searchResults.innerHTML = state.lastGuideSearchTerm
                ? `<div class="empty-state"><strong>${escapeHtml(state.lastGuideSearchTerm)}</strong>에 대한 결과가 없습니다. 약어, 원문 표현, 한국어 표현 중 다른 형태로 다시 검색해보세요.</div>`
                : `<div class="empty-state">검색어를 입력하면 목차 토픽과 영문 원문, 한국어 번역 페이지를 함께 찾습니다.</div>`;
            return;
        }

        refs.searchResults.innerHTML = state.searchResults
            .map(
                (result, index) => `
                    <button class="search-card" data-search-index="${index}" type="button">
                        <strong>${escapeHtml(result.title)}</strong>
                        <div class="section-meta">${escapeHtml(result.meta)}</div>
                        <div class="search-snippet" style="margin-top:8px;">${escapeHtml(result.snippet)}</div>
                    </button>
                `
            )
            .join("");
    }

    function handleModuleListClick(event) {
        const card = event.target.closest("[data-module-id]");
        if (!card) {
            return;
        }
        openModule(card.dataset.moduleId);
    }

    function handleDetailClick(event) {
        const pageJump = event.target.closest("[data-jump-page]");
        if (pageJump) {
            setSelectedPage(Number(pageJump.dataset.jumpPage) || state.selectedPage);
            renderModules();
            renderModuleDetail();
            return;
        }

        const pageAction = event.target.closest("[data-page-action]");
        if (pageAction) {
            handlePageAction(pageAction.dataset.pageAction);
            return;
        }

        const drillStart = event.target.closest("[data-drill-start]");
        if (drillStart) {
            startDrill(drillStart.dataset.drillStart);
            return;
        }

        const readerLanguage = event.target.closest("[data-reader-language]");
        if (readerLanguage) {
            const nextLanguage = readerLanguage.dataset.readerLanguage;
            if (nextLanguage === "ko" && !hasKoTranslation(state.selectedPage)) {
                return;
            }
            state.readerLanguage = nextLanguage;
            renderModuleDetail();
            return;
        }

        const imageTrigger = event.target.closest("[data-open-image-modal]");
        if (imageTrigger) {
            const page = Number(imageTrigger.dataset.openImageModal) || state.selectedPage;
            openImageModal(page, imageTrigger);
        }
    }

    function handleQuizClick(event) {
        const choice = event.target.closest("[data-choice-index]");
        if (choice) {
            answerQuiz(Number(choice.dataset.choiceIndex));
            return;
        }

        const refresh = event.target.closest("[data-quiz-refresh]");
        if (refresh) {
            advanceQuiz(refresh.dataset.quizRefresh);
            return;
        }

        const moduleButton = event.target.closest("[data-open-module]");
        if (moduleButton) {
            openModule(moduleButton.dataset.openModule);
        }
    }

    function handleSearchResultClick(event) {
        const card = event.target.closest("[data-search-index]");
        if (!card) {
            return;
        }
        const result = state.searchResults[Number(card.dataset.searchIndex)];
        if (!result) {
            return;
        }
        if (result.moduleId) {
            openModule(result.moduleId, result.page || undefined);
        }
    }

    function handlePageAction(action) {
        const module = getSelectedModule();
        if (!module) {
            return;
        }
        if (action === "first") {
            setSelectedPage(module.pageStart);
        } else if (action === "prev") {
            setSelectedPage(state.selectedPage - 1);
        } else if (action === "next") {
            setSelectedPage(state.selectedPage + 1);
        } else if (action === "last") {
            setSelectedPage(module.pageEnd);
        }
        renderModuleDetail();
        renderModules();
    }

    function handleImageModalClick(event) {
        if (event.target.closest("[data-close-image-modal]")) {
            closeImageModal();
        }
    }

    function openImageModal(page, trigger) {
        const module = getSelectedModule();
        const imageUrl = pageImageHdUrl(page);
        imageModalReturnFocus = trigger instanceof HTMLElement ? trigger : document.activeElement;
        state.modalImageUrl = imageUrl;
        state.modalImageTitle = `${module ? module.meta.koTitle : "Guide"} / ${formatPageRange(page, page)}`;
        state.modalImagePage = page;
        state.modalTriedStandardImage = false;
        refs.imageModalTitle.textContent = state.modalImageTitle;
        refs.imageModalFallback.style.display = "none";
        refs.imageModalImage.style.display = "block";
        refs.imageModalImage.src = imageUrl;
        refs.imageModalImage.alt = state.modalImageTitle;
        refs.imageModal.classList.add("open");
        refs.imageModal.setAttribute("aria-hidden", "false");
        if (refs.shell) {
            refs.shell.inert = true;
            refs.shell.setAttribute("aria-hidden", "true");
        }
        document.body.style.overflow = "hidden";
        window.requestAnimationFrame(() => {
            refs.imageModalClose.focus();
        });
    }

    function closeImageModal() {
        refs.imageModal.classList.remove("open");
        refs.imageModal.setAttribute("aria-hidden", "true");
        if (refs.shell) {
            refs.shell.inert = false;
            refs.shell.removeAttribute("aria-hidden");
        }
        document.body.style.overflow = "";
        if (imageModalReturnFocus && typeof imageModalReturnFocus.focus === "function") {
            imageModalReturnFocus.focus();
        }
        imageModalReturnFocus = null;
    }

    function handleModalImageError() {
        if (!state.modalTriedStandardImage) {
            state.modalTriedStandardImage = true;
            refs.imageModalImage.src = pageImageUrl(state.modalImagePage);
            return;
        }

        refs.imageModalImage.style.display = "none";
        refs.imageModalFallback.style.display = "block";
    }

    function handleModalImageLoad() {
        refs.imageModalFallback.style.display = "none";
        refs.imageModalImage.style.display = "block";
    }

    function handleDocumentKeydown(event) {
        if (!refs.imageModal.classList.contains("open")) {
            return;
        }
        if (event.key === "Escape") {
            event.preventDefault();
            closeImageModal();
            return;
        }
        if (event.key === "Tab") {
            trapFocusInImageModal(event);
        }
    }

    function trapFocusInImageModal(event) {
        const focusable = Array.from(
            refs.imageModal.querySelectorAll(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter((element) => element.offsetParent !== null);

        if (!focusable.length) {
            event.preventDefault();
            refs.imageModalClose.focus();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
            return;
        }

        if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function startDrill(mode, options = {}) {
        const { countRun = true } = options;
        const config = DRILL_CONFIGS[mode] || DRILL_CONFIGS.sequence;
        state.quizSession = createQuizSession(mode, config);
        state.quiz = buildQuizForMode(mode);
        if (countRun) {
            state.progress.modeRuns[mode] = (state.progress.modeRuns[mode] || 0) + 1;
            saveProgress();
            renderStats();
        }
        renderQuiz();
    }

    function advanceQuiz(mode) {
        const nextMode = mode || (state.quizSession ? state.quizSession.mode : "sequence");
        if (!state.quizSession || state.quizSession.mode !== nextMode || state.quizSession.status !== "active") {
            startDrill(nextMode);
            return;
        }

        if (!state.quiz || !state.quiz.answered) {
            startDrill(nextMode);
            return;
        }

        state.quizSession.round += 1;
        state.quiz = buildQuizForMode(nextMode);
        renderQuiz();
    }

    function buildQuizForMode(mode) {
        if (mode === "hotas") {
            return buildHotasQuestion();
        }
        if (mode === "topic") {
            return buildTopicQuestion();
        }
        return buildSequenceQuestion();
    }

    function buildSequenceQuestion() {
        const pack = sample(SEQUENCE_PACKS);
        const stepIndex = randomInt(1, pack.steps.length - 1);
        const correctStep = pack.steps[stepIndex];
        const distractors = shuffle(
            pack.steps
                .filter((_, index) => index !== stepIndex)
                .map((step) => `${step.ko} / ${step.en}`)
        ).slice(0, 3);
        const choices = shuffle([`${correctStep.ko} / ${correctStep.en}`, ...distractors]);
        const answerIndex = choices.indexOf(`${correctStep.ko} / ${correctStep.en}`);
        const contextSteps = pack.steps
            .slice(Math.max(0, stepIndex - 3), stepIndex)
            .map((step, index) => `${index + 1}. ${step.ko} / ${step.en}`)
            .join("\n");

        return {
            mode: "sequence",
            kicker: `${pack.modeLabel} / ${pack.title}`,
            prompt: "지금 흐름에서 다음으로 이어져야 할 체크 절차는 무엇입니까?",
            context: `현재까지 진행:\n${contextSteps}`,
            choices,
            answerIndex,
            moduleId: moduleIdForTitle(pack.moduleTitle),
            reference: pack.moduleTitle,
            feedback: "",
            trainingValue: pack.trainingGoal,
            trainingPoint: pack.debrief,
            preAnswerPoint: "정답을 고르면 다음 체크가 왜 필요한지 바로 연결해서 보여줍니다.",
            explanation: pack.debrief,
        };
    }

    function buildHotasQuestion() {
        const raw = sample(HOTAS_QUESTIONS);
        return {
            mode: "hotas",
            kicker: "HOTAS 반응 훈련 / HOTAS Reflex",
            prompt: raw.prompt,
            context: raw.context,
            choices: raw.choices,
            answerIndex: raw.choices.indexOf(raw.answer),
            moduleId: moduleIdForTitle(raw.moduleTitle),
            reference: raw.moduleTitle,
            feedback: "",
            explanation: raw.explanation,
            trainingValue: "실제 전투나 센서 운용에서는 메뉴보다 손이 먼저 움직여야 합니다.",
            trainingPoint: raw.practicalUse || raw.explanation,
            preAnswerPoint: "정답을 고르면 이 HOTAS 입력이 실전에서 언제 쓰이는지 바로 설명합니다.",
        };
    }

    function buildTopicQuestion() {
        const eligibleModules = state.modules.filter((item) => item.partNumber > 0 && item.topics.some((topic) => !topic.synthetic));
        const module = sample(eligibleModules);
        const topic = sample(module.topics.filter((item) => !item.synthetic));
        const correct = module;
        const distractorModules = shuffle(eligibleModules.filter((item) => item.id !== module.id)).slice(0, 3);
        const choices = shuffle([correct, ...distractorModules]).map(
            (item) => `${item.meta.koTitle} / ${shortEnglishTitle(item.title)}`
        );
        const answerIndex = choices.indexOf(`${correct.meta.koTitle} / ${shortEnglishTitle(correct.title)}`);
        const topicPath = formatTopicPath(topic.path, module.title);

        return {
            mode: "topic",
            kicker: "가이드 구조 훈련 / Guide Intercept",
            prompt: "다음 토픽이 집중적으로 다뤄지는 파트를 고르세요.",
            context: `${topic.title}\n${topicPath}`,
            choices,
            answerIndex,
            moduleId: module.id,
            reference: formatPageRange(topic.pageStart, topic.pageEnd),
            feedback: "",
            trainingValue: "실전 중 막히면 해당 파트를 빠르게 다시 열 수 있어야 학습 효율이 크게 올라갑니다.",
            trainingPoint: `${module.meta.koTitle} 파트는 ${module.meta.summary}`,
            preAnswerPoint: "정답을 확인하면 이 토픽이 왜 그 파트에 속하는지 바로 설명합니다.",
            explanation: `${module.meta.koTitle} 파트에서 이 토픽을 집중적으로 다룹니다.`,
        };
    }

    function createQuizSession(mode, config) {
        return {
            mode,
            label: config.label,
            totalRounds: config.totalRounds,
            round: 1,
            maxLives: config.lives,
            livesLeft: config.lives,
            correct: 0,
            wrong: 0,
            streak: 0,
            bestStreak: 0,
            score: 0,
            status: "active",
        };
    }

    function finalizeQuizSession(session) {
        if (session.status !== "active") {
            return;
        }
        const completedRounds = session.correct + session.wrong;
        if (session.livesLeft <= 0) {
            session.status = "failed";
            return;
        }
        if (completedRounds >= session.totalRounds) {
            session.status = "success";
        }
    }

    function quizSessionProgressPercent(session) {
        const completedRounds = session.correct + session.wrong;
        return Math.round((completedRounds / session.totalRounds) * 100);
    }

    function quizSessionAccuracy(session) {
        const completedRounds = session.correct + session.wrong;
        return completedRounds ? Math.round((session.correct / completedRounds) * 100) : 0;
    }

    function quizSessionGrade(session) {
        if (session.status === "failed") {
            return "재도전";
        }
        if (session.wrong === 0 && session.correct >= session.totalRounds) {
            return "완숙";
        }
        const accuracy = quizSessionAccuracy(session);
        if (accuracy >= 90) {
            return "실전 준비";
        }
        if (accuracy >= 75) {
            return "안정권";
        }
        return "입문";
    }

    function quizSessionStatusLabel(session) {
        if (session.status === "success") {
            return "훈련 완료";
        }
        if (session.status === "failed") {
            return "훈련 실패";
        }
        return "훈련 진행 중";
    }

    function unlockBadge(badgeId) {
        if (!BADGE_LIBRARY[badgeId]) {
            return false;
        }
        if (state.progress.badges.includes(badgeId)) {
            return false;
        }
        state.progress.badges.push(badgeId);
        return true;
    }

    function renderUnlockedBadges() {
        return state.progress.badges
            .slice(-4)
            .map((badgeId) => {
                const badge = BADGE_LIBRARY[badgeId];
                if (!badge) {
                    return "";
                }
                return `<span class="sortie-badge" title="${escapeHtml(badge.desc)}">${escapeHtml(badge.label)}</span>`;
            })
            .join("");
    }

    function currentPilotRank() {
        let current = PILOT_RANKS[0];
        for (const rank of PILOT_RANKS) {
            if ((state.progress.xp || 0) >= rank.xp) {
                current = rank;
            }
        }
        return current;
    }

    function answerQuiz(selectedIndex) {
        if (!state.quiz || state.quiz.answered) {
            return;
        }

        const correct = selectedIndex === state.quiz.answerIndex;
        state.quiz.answered = true;
        state.quiz.selectedIndex = selectedIndex;
        const moduleId = state.quiz.moduleId;
        const session = state.quizSession;

        state.progress.answered += 1;
        if (correct) {
            state.progress.correct += 1;
            state.progress.xp += 15 + ((session ? session.streak : 0) * 3);
        } else {
            state.progress.xp += 4;
        }

        if (moduleId) {
            const bucket = state.progress.modules[moduleId] || { answered: 0, correct: 0 };
            bucket.answered += 1;
            if (correct) {
                bucket.correct += 1;
            }
            state.progress.modules[moduleId] = bucket;
        }

        if (session) {
            if (correct) {
                session.correct += 1;
                session.streak += 1;
                session.bestStreak = Math.max(session.bestStreak, session.streak);
                session.score += 100 + (session.streak - 1) * 25;
                unlockBadge("first_sortie");
            } else {
                session.wrong += 1;
                session.streak = 0;
                session.livesLeft = Math.max(0, session.livesLeft - 1);
                session.score = Math.max(0, session.score - 35);
            }

            state.progress.bestStreak = Math.max(state.progress.bestStreak || 0, session.bestStreak);
            if (session.bestStreak >= 3) {
                unlockBadge("hot_streak");
            }
        }

        if (state.quiz.mode === "hotas") {
            state.quiz.feedback = correct
                ? `정답. ${state.quiz.explanation}`
                : `오답. 정답은 "${state.quiz.choices[state.quiz.answerIndex]}" 입니다. ${state.quiz.explanation}`;
        } else if (state.quiz.mode === "sequence") {
            state.quiz.feedback = correct
                ? `정답. ${state.quiz.explanation}`
                : `오답. 정답은 "${state.quiz.choices[state.quiz.answerIndex]}" 입니다. ${state.quiz.explanation}`;
        } else {
            state.quiz.feedback = correct
                ? `정답. ${state.quiz.explanation}`
                : `오답. 정답은 "${state.quiz.choices[state.quiz.answerIndex]}" 입니다. ${state.quiz.explanation}`;
        }

        if (session) {
            finalizeQuizSession(session);
            if (session.status === "success") {
                const successBonus = 35 + session.livesLeft * 8 + session.bestStreak * 5;
                state.progress.xp += successBonus;
                state.progress.missionsWon += 1;
                state.progress.modeWins[session.mode] = (state.progress.modeWins[session.mode] || 0) + 1;

                if (session.wrong === 0) {
                    unlockBadge("clean_sortie");
                }
                if (session.mode === "hotas") {
                    unlockBadge("systems_brain");
                } else if (session.mode === "topic") {
                    unlockBadge("route_reader");
                } else if (session.mode === "sequence") {
                    unlockBadge("checklist_flow");
                }
                if (
                    state.progress.modeWins.sequence > 0 &&
                    state.progress.modeWins.hotas > 0 &&
                    state.progress.modeWins.topic > 0
                ) {
                    unlockBadge("triple_track");
                }
                if (state.progress.missionsWon >= 5) {
                    unlockBadge("academy_loop");
                }

                state.quiz.feedback = `${state.quiz.feedback} 훈련 완료. 평가 ${quizSessionGrade(session)}, 보너스 ${successBonus} XP를 획득했습니다.`;
            } else if (session.status === "failed") {
                state.quiz.feedback = `${state.quiz.feedback} 훈련 실패. 실수 여유를 모두 소모했습니다.`;
            }
        }

        saveProgress();
        renderStats();
        renderModules();
        renderModuleDetail();
        renderQuiz();
    }

    function runGuideSearch(announce = false) {
        window.clearTimeout(guideSearchTimer);
        const term = refs.guideSearchInput.value.trim();
        if (term.length < 2) {
            state.lastGuideSearchTerm = "";
            state.searchResults = [];
            renderSearchResults();
            updateSearchStatus("");
            return;
        }
        state.lastGuideSearchTerm = term;

        const results = [];
        const seen = new Set();

        const pushResult = (result) => {
            const key = `${result.title}|${result.meta}|${result.page || ""}|${result.moduleId || ""}`;
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            results.push(result);
            return results.length >= 12;
        };

        for (const entry of state.glossary) {
            const haystack = `${entry.term} ${entry.ko} ${entry.desc} ${entry.part}`;
            if (!matchesSearch(haystack, term)) {
                continue;
            }
            const moduleId = moduleIdForTitle(entry.part);
            const module = moduleId ? state.modules.find((item) => item.id === moduleId) : null;
            if (
                pushResult({
                    title: `${entry.term} / ${entry.ko}`,
                    meta: `용어 검색 / ${entry.part}`,
                    snippet: entry.desc,
                    moduleId,
                    page: module ? module.pageStart : null,
                })
            ) {
                state.searchResults = results;
                renderSearchResults();
                updateSearchStatus(announce ? buildSearchAnnouncement(term, results.length) : "");
                return;
            }
        }

        for (const module of state.modules) {
            const academyHaystack = `${module.title} ${module.meta.koTitle} ${module.meta.mission} ${module.meta.summary} ${(module.meta.terms || []).join(" ")} ${(module.meta.bullets || []).join(" ")}`;
            if (
                matchesSearch(academyHaystack, term) &&
                pushResult({
                    title: `${module.meta.koTitle} / ${shortEnglishTitle(module.title)}`,
                    meta: `아카데미 파트 / ${module.title} / ${formatPageRange(module.pageStart, module.pageEnd)}`,
                    snippet: module.meta.summary,
                    moduleId: module.id,
                    page: module.pageStart,
                })
            ) {
                state.searchResults = results;
                renderSearchResults();
                updateSearchStatus(announce ? buildSearchAnnouncement(term, results.length) : "");
                return;
            }

            for (const topic of module.topics) {
                const haystack = `${topic.title} ${topic.path.join(" ")} ${module.title} ${module.meta.koTitle} ${module.meta.mission} ${module.meta.summary} ${(module.meta.terms || []).join(" ")} ${(module.meta.bullets || []).join(" ")}`;
                if (!matchesSearch(haystack, term)) {
                    continue;
                }
                if (
                    pushResult({
                        title: `${topic.title}`,
                        meta: `${module.meta.koTitle} / ${module.title} / ${formatPageRange(topic.pageStart, topic.pageEnd)}`,
                        snippet: formatTopicPath(topic.path, module.title),
                        moduleId: module.id,
                        page: topic.pageStart || module.pageStart,
                    })
                ) {
                    state.searchResults = results;
                    renderSearchResults();
                    updateSearchStatus(announce ? buildSearchAnnouncement(term, results.length) : "");
                    return;
                }
            }
        }

        for (let index = 0; index < pageTexts.length; index += 1) {
            const englishText = pageTexts[index] || "";
            const koreanText = pageTextsKo[index] || "";
            let matchedText = "";
            let sourceLabel = "";

            if (matchesSearch(englishText, term)) {
                matchedText = englishText;
                sourceLabel = "영문 추출본";
            } else if (matchesSearch(koreanText, term)) {
                matchedText = koreanText;
                sourceLabel = "한국어 기계번역";
            }

            if (!matchedText) {
                continue;
            }
            const page = index + 1;
            const module = moduleForPage(page);
            if (
                pushResult({
                    title: `Page ${page}`,
                    meta: `${module ? module.meta.koTitle : "Unknown"} / ${module ? module.title : "Guide"} / ${formatPageRange(page, page)} / ${sourceLabel}`,
                    snippet: makeSnippet(matchedText, term),
                    moduleId: module ? module.id : null,
                    page,
                })
            ) {
                break;
            }
        }

        state.searchResults = results;
        renderSearchResults();
        updateSearchStatus(announce ? buildSearchAnnouncement(term, results.length) : "");
    }

    function scheduleGuideSearch() {
        if (isGuideSearchComposing) {
            return;
        }
        window.clearTimeout(guideSearchTimer);
        const term = refs.guideSearchInput.value.trim();
        if (term.length < 2) {
            state.lastGuideSearchTerm = "";
            state.searchResults = [];
            renderSearchResults();
            updateSearchStatus("");
            return;
        }
        state.lastGuideSearchTerm = term;
        guideSearchTimer = window.setTimeout(() => runGuideSearch(false), 160);
    }

    function handleWorkspaceToolbarClick(event) {
        const themeButton = event.target.closest("[data-theme-mode]");
        if (themeButton) {
            setThemeMode(themeButton.dataset.themeMode);
            return;
        }
        const modeButton = event.target.closest("[data-layout-mode]");
        if (!modeButton) {
            return;
        }
        setLayoutMode(modeButton.dataset.layoutMode);
    }

    function setThemeMode(nextTheme) {
        if (!["light", "dark"].includes(nextTheme)) {
            return;
        }
        state.themeMode = nextTheme;
        saveLayout();
        applyTheme();
    }

    function applyTheme() {
        document.body.dataset.theme = state.themeMode;
        (refs.themeButtons || []).forEach((button) => {
            const isActive = button.dataset.themeMode === state.themeMode;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    function setLayoutMode(nextMode) {
        if (!["default", "compact", "focus"].includes(nextMode)) {
            return;
        }
        state.layoutMode = nextMode;
        saveLayout();
        applyLayout();
    }

    function applyLayout() {
        if (!refs.workspace) {
            return;
        }
        const isFocus = state.layoutMode === "focus";
        const isCompact = state.layoutMode === "compact";

        refs.workspace.classList.toggle("compact-mode", isCompact);
        refs.workspace.classList.toggle("focus-mode", isFocus);
        if (refs.workspaceAside) {
            refs.workspaceAside.inert = isFocus;
            refs.workspaceAside.setAttribute("aria-hidden", isFocus ? "true" : "false");
        }
        (refs.layoutButtons || []).forEach((button) => {
            const isActive = button.dataset.layoutMode === state.layoutMode;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    function openModule(moduleId, page) {
        const module = state.modules.find((item) => item.id === moduleId);
        if (!module) {
            return;
        }
        state.selectedModuleId = module.id;
        setSelectedPage(page || module.pageStart);
        renderModules();
        renderModuleDetail();
    }

    function getSelectedModule() {
        return state.modules.find((module) => module.id === state.selectedModuleId) || null;
    }

    function getModuleScore(moduleId) {
        const bucket = state.progress.modules[moduleId] || { answered: 0, correct: 0 };
        const percent = bucket.answered ? Math.round((bucket.correct / bucket.answered) * 100) : 0;
        return { ...bucket, percent };
    }

    function moduleForPage(page) {
        return state.modules.find((module) => page >= module.pageStart && page <= module.pageEnd) || null;
    }

    function guidePageCount() {
        return Math.max(Number(manifest.pageCount) || pageTexts.length || 0, 1);
    }

    function syncModuleForSelectedPage() {
        const module = moduleForPage(state.selectedPage);
        if (module) {
            state.selectedModuleId = module.id;
        }
    }

    function setSelectedPage(page) {
        state.selectedPage = clamp(page, 1, guidePageCount());
        syncModuleForSelectedPage();
        if (state.readerLanguage === "ko" && !hasKoTranslation(state.selectedPage)) {
            state.readerLanguage = "en";
        }
    }

    function buildPracticeHint(module) {
        if (module.partNumber === 4) {
            return "시동은 큰 단계 A-I를 먼저 외운 뒤, JFS, RPM, FTIT, 발전기 전환 같은 확인 포인트를 세부로 붙이세요.";
        }
        if (module.partNumber === 5) {
            return "NWS 해제 타이밍, CAT I/CAT III 확인, 로테이션 속도 감각을 같이 묶어 연습하면 좋습니다.";
        }
        if (module.partNumber === 6) {
            return "착륙은 속도 숫자보다 AOA와 패턴 흐름을 먼저 몸에 넣는 편이 훨씬 빠릅니다.";
        }
        if (module.partNumber === 9) {
            return "손에서 바로 나와야 하는 입력은 TMS, DMS, CMS, NWS, Paddle 입니다. 생각보다 손 기억이 우선입니다.";
        }
        if (module.partNumber >= 10) {
            return "이 파트부터는 HOTAS와 센서 흐름이 같이 움직입니다. 단순 읽기보다 ‘무슨 버튼으로 무엇을 바꾸는가’를 함께 보세요.";
        }
        return "이 파트는 원문 구조를 따라가며 용어와 흐름을 익힌 뒤, 관련 드릴로 손 기억을 붙이는 방식이 좋습니다.";
    }

    function extractPartNumber(title) {
        const match = title.match(/^Part\s+(\d+)/i);
        return match ? Number(match[1]) : 999;
    }

    function routeRankFor(partNumber) {
        const index = ROUTE_ORDER.indexOf(partNumber);
        return index === -1 ? 99 : index + 1;
    }

    function moduleRankLabel(module) {
        if (module.partNumber === 0) {
            return "Reference";
        }
        return `Route ${String(module.routeRank).padStart(2, "0")}`;
    }

    function defaultBriefing(title) {
        return {
            koTitle: title,
            track: "Guide",
            mission: "이 파트의 역할을 직접 읽고 익히기 위한 기본 브리핑입니다.",
            summary: "원문을 따라가며 구조를 잡고 필요한 용어를 같이 익히세요.",
            bullets: [
                "목차 구조를 먼저 보고 큰 흐름을 잡습니다.",
                "영어 원문 제목과 페이지 범위를 같이 익힙니다.",
                "모르는 용어는 통합 검색으로 바로 보완합니다.",
            ],
            terms: ["Guide"],
        };
    }

    function moduleIdForTitle(title) {
        const module = state.modules.find((item) => item.title === title);
        return module ? module.id : null;
    }

    function defaultProgress() {
        return {
            xp: 0,
            answered: 0,
            correct: 0,
            modules: {},
            missionsWon: 0,
            bestStreak: 0,
            badges: [],
            modeRuns: { sequence: 0, hotas: 0, topic: 0 },
            modeWins: { sequence: 0, hotas: 0, topic: 0 },
        };
    }

    function normalizeModeCounter(value) {
        return {
            sequence: Number(value?.sequence) || 0,
            hotas: Number(value?.hotas) || 0,
            topic: Number(value?.topic) || 0,
        };
    }

    function normalizeProgress(value) {
        const base = defaultProgress();
        const source = value && typeof value === "object" ? value : {};
        return {
            ...base,
            xp: Number(source.xp) || 0,
            answered: Number(source.answered) || 0,
            correct: Number(source.correct) || 0,
            modules: source.modules && typeof source.modules === "object" ? source.modules : {},
            missionsWon: Number(source.missionsWon) || 0,
            bestStreak: Number(source.bestStreak) || 0,
            badges: Array.isArray(source.badges) ? source.badges.filter((item) => BADGE_LIBRARY[item]) : [],
            modeRuns: normalizeModeCounter(source.modeRuns),
            modeWins: normalizeModeCounter(source.modeWins),
        };
    }

    function loadProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return defaultProgress();
            }
            return normalizeProgress(JSON.parse(raw));
        } catch (error) {
            return defaultProgress();
        }
    }

    function loadLayout() {
        try {
            const raw = localStorage.getItem(LAYOUT_STORAGE_KEY);
            if (!raw) {
                return { sidebarMode: "default", themeMode: "light" };
            }
            const parsed = JSON.parse(raw);
            const themeMode = parsed && ["light", "dark"].includes(parsed.themeMode) ? parsed.themeMode : "light";
            if (parsed && ["default", "compact", "focus"].includes(parsed.sidebarMode)) {
                return { sidebarMode: parsed.sidebarMode, themeMode };
            }
            if (parsed && Object.prototype.hasOwnProperty.call(parsed, "sidebarCollapsed")) {
                return { sidebarMode: parsed.sidebarCollapsed ? "focus" : "default", themeMode };
            }
            return { sidebarMode: "default", themeMode };
        } catch (error) {
            return { sidebarMode: "default", themeMode: "light" };
        }
    }

    function saveProgress() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    }

    function saveLayout() {
        localStorage.setItem(
            LAYOUT_STORAGE_KEY,
            JSON.stringify({ sidebarMode: state.layoutMode, themeMode: state.themeMode })
        );
    }

    function updateSearchStatus(message) {
        if (!refs.searchResultsStatus) {
            return;
        }
        refs.searchResultsStatus.textContent = message;
    }

    function buildSearchAnnouncement(term, resultCount) {
        if (!term) {
            return "";
        }
        if (!resultCount) {
            return `${term} 검색 결과가 없습니다.`;
        }
        return `${term} 검색 결과 ${resultCount}건입니다.`;
    }

    function shortEnglishTitle(title) {
        return title.replace(/^Part\s+\d+\s+-\s+/i, "");
    }

    function formatPageRange(start, end) {
        if (!start && !end) {
            return "p.N/A";
        }
        if (start === end || !end) {
            return `p.${start}`;
        }
        return `pp.${start}-${end}`;
    }

    function formatTopicPath(path, rootTitle) {
        if (!path || !path.length) {
            return rootTitle;
        }
        const trimmed = path.filter((item) => item !== rootTitle);
        return trimmed.length ? trimmed.join(" > ") : rootTitle;
    }

    function pageImageUrl(page) {
        return `generated/dcs_f16_guide/page_images/page-${String(page).padStart(4, "0")}.jpg`;
    }

    function pageImageHdUrl(page) {
        if (!hasHdPageImages) {
            return pageImageUrl(page);
        }
        return `generated/dcs_f16_guide/page_images_hd/page-${String(page).padStart(4, "0")}.jpg`;
    }

    function normalizeSearchText(value) {
        return String(value || "")
            .toLowerCase()
            .normalize("NFKC")
            .replace(/[^a-z0-9가-힣]+/g, " ")
            .trim()
            .replace(/\s+/g, " ");
    }

    function compactSearchText(value) {
        return normalizeSearchText(value).replace(/\s+/g, "");
    }

    function matchesSearch(haystack, needle) {
        const rawHaystack = String(haystack || "").toLowerCase();
        const rawNeedle = String(needle || "").toLowerCase();
        if (!rawNeedle) {
            return false;
        }
        if (rawHaystack.includes(rawNeedle)) {
            return true;
        }

        const normalizedNeedle = normalizeSearchText(needle);
        if (!normalizedNeedle) {
            return false;
        }

        const normalizedHaystack = normalizeSearchText(haystack);
        if (normalizedHaystack.includes(normalizedNeedle)) {
            return true;
        }

        const compactNeedle = normalizedNeedle.replace(/\s+/g, "");
        return compactNeedle.length >= 3 && compactSearchText(haystack).includes(compactNeedle);
    }

    function currentReaderText(page) {
        if (state.readerLanguage === "ko" && hasKoTranslation(page)) {
            return pageTextsKo[page - 1] || "로컬 한국어 번역 텍스트가 없습니다.";
        }
        return pageTexts[page - 1] || "로컬 페이지 텍스트가 없습니다.";
    }

    function hasKoTranslation(page) {
        return Boolean(pageTextsKo[page - 1]);
    }

    function makeSnippet(text, term) {
        const index = findSnippetIndex(text, term);
        if (index === -1) {
            return text.slice(0, 180);
        }
        const start = Math.max(0, index - 70);
        const end = Math.min(text.length, index + term.length + 110);
        return text.slice(start, end).replace(/\s+/g, " ").trim();
    }

    function findSnippetIndex(text, term) {
        const rawText = String(text || "");
        const rawNeedle = String(term || "");
        const rawIndex = rawText.toLowerCase().indexOf(rawNeedle.toLowerCase());
        if (rawIndex !== -1) {
            return rawIndex;
        }

        const compactNeedle = compactSearchText(term);
        if (!compactNeedle) {
            return -1;
        }

        const compactSource = buildCompactSearchSource(rawText);
        const compactIndex = compactSource.compact.indexOf(compactNeedle);
        if (compactIndex === -1) {
            return -1;
        }
        return compactSource.indexMap[compactIndex] ?? -1;
    }

    function buildCompactSearchSource(value) {
        const source = String(value || "");
        const compact = [];
        const indexMap = [];

        for (let index = 0; index < source.length; index += 1) {
            const normalized = source[index].normalize("NFKC").toLowerCase();
            for (const character of normalized) {
                if (!/[a-z0-9가-힣]/.test(character)) {
                    continue;
                }
                compact.push(character);
                indexMap.push(index);
            }
        }

        return {
            compact: compact.join(""),
            indexMap,
        };
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function shuffle(items) {
        const copy = [...items];
        for (let index = copy.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
        }
        return copy;
    }

    function sample(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
})();
