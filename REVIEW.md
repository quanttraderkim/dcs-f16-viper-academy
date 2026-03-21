# Code Review Guidelines

## Always check

- The static app still works without a build step.
- New learning content remains understandable to a Korean beginner.
- Important aviation and combat-system terminology keeps English alongside Korean explanation where needed.
- Changes to quiz or module data do not break navigation between module list, detail panel, drills, search, and page reader.
- Extracted data changes remain consistent with `scripts/extract_dcs_f16_guide.py`.
- Startup, taxi, takeoff, landing, and HOTAS explanations do not introduce procedural contradictions.

## Review focus

- Prioritize correctness bugs, broken interactions, navigation regressions, and data wiring issues.
- Flag missing handling for empty or invalid search results if it breaks the experience.
- Flag content mismatches where page ranges, module labels, or drill references point to the wrong guide sections.

## Skip

- Formatting-only changes
- Generated data under `generated/dcs_f16_guide/` unless the generated output is clearly inconsistent with the extractor
- Subjective wording choices that do not affect correctness or learner clarity
