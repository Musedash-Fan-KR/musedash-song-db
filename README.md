# Muse Dash song db
- CSV로 관리됩니다.
- 제목 등에 쉼표가 들어가는 경우 `"제,목"`과 같이 따옴표로 감싸면 됩니다.

## Columns
- title: 곡 제목 (일본어 기준)
- title_ko: 곡 제목, 한국어 기준, `title`과 같으면 비워둠
- title_en: 곡 제목, 영어 기준, `title`과 같으면 비워둠
- artist: 작곡가, 일본어 기준, 없을 시 비워둠
- level_easy: 초보 코스 레벨 (없으면 비워둠)
- level_hard: 어려움 코스 레벨 (없으면 비워둠)
- level_master: 마스터 코스 레벨 (없으면 비워둠)
- level_supreme: 전문가 코스 레벨 (없으면 비워둠)
- combo_easy: 초보 코스 콤보수 (없으면 비워둠)
- combo_hard: 어려움 코스 콤보수 (없으면 비워둠)
- combo_master: 마스터 코스 콤보수 (없으면 비워둠)
- combo_supreme: 전문가 코스 콤보수 (없으면 비워둠)
- bpm_min: 최소 BPM
- bpm_max: 최대 BPM
- pack: `default` | `concept` | `otaku` | `cute` | `rhythm_games` | `collab` | `md`
- sub_pack
  - Vol. 로 나누어지는 경우 `otaku-1`과 같이 작성
  - 콘셉트 팩의 경우
    - ???
    - ???
  - 콜라보 팩의 경우
    - ???
    - ???
- length: 곡 길이를 초로 적음 예)`120`
