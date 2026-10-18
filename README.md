# 역사재판 (History Judgement)

초등 5학년 역사 수업용 법정 추리 웹게임. 역전재판을 참고한 오리지널 게임으로, 사료를 증거로 역사 인물의 증언을 따지고 판결문을 씁니다.

- **사건 1 「백제는 왜 무너졌나」**: 의자왕 · 검사 · 4일 구성 (튜토리얼)
- **사건 2 「왕검성의 밤」**: 위만 · 검사(4일) / 변호인 · 난이도 2

## 바로 플레이
GitHub Pages를 켜면 `index.html`이 첫 화면입니다.
- 저장소 **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root)** 를 고르고 저장
- 몇 분 뒤 `https://<계정이름>.github.io/historyjudgement/` 에서 열립니다

## 폴더
| 위치 | 내용 |
|---|---|
| `index.html` | 게임 페이지 (그림 제외 약 300KB) |
| `assets/` | 그림 파일 (배경 `bg/`, 인물 `sprites/`, 책상 `desk/`, 증거 `ev/`) |
| `src/` | 원본 코드. `build.py`로 한 파일 판을, `split_build.py`로 그림 분리 판을 만듦 |
| `src/tests/solver.js` | 게임 데이터를 읽어 사건을 처음부터 끝까지 혼자 플레이하는 자동 검사 (jsdom 필요) |

## 고칠 때 (Claude Code 등)
1. `src/`의 파일을 고침 (`game.js` 엔진, `story.js` 사건 1, `story2.js` 사건 2, `shell.html` 화면·스타일)
2. `python3 build.py` → `python3 split_build.py` → `dist/`의 `index.html`, `assets/`를 저장소 맨 위로 복사
3. `node tests/solver.js c1` / `c2p` / `c2d` 로 세 갈래가 끝까지 도는지 확인

※ 그림 처리(`process_assets.py`)는 원본 그림 파일 경로가 필요해 이 저장소만으로는 다시 돌릴 수 없습니다. 지금 그림은 `assets/`에 처리된 상태로 들어 있습니다.

※ 재판장, 검사, 변호인, 피고의 대사는 상상으로 만든 것입니다. 증거 카드는 실제 사료를 바탕으로 했고, 고증 확인 중입니다.
