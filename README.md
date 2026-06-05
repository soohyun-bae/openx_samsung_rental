# OpenX Samsung Rental Landing

삼성가전 렌탈 창업 랜딩 페이지입니다.
React와 Vite 기반의 정적 프론트엔드로 구성되어 있으며, 상담 신청 폼은 Supabase `form_submissions` 테이블에 저장됩니다.

## 기술 스택

- React 19
- Vite 8
- Tailwind CSS 4
- Sass
- Supabase JavaScript Client
- Embla Carousel
- Framer Motion
- Vercel

## 시작하기

```bash
npm install
npm run dev
```

## 환경변수

Vite는 클라이언트 코드에서 사용하는 환경변수에 `VITE_` 접두사가 필요합니다. 이 프로젝트에서는 다음 변수를 사용합니다.

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_LANDING_PAGE_ID=2
```

- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon public key
- `VITE_LANDING_PAGE_ID`: 상담 신청 데이터에 함께 저장할 랜딩 페이지 ID

## 프로젝트 구조

```text
src/
  App.jsx                 # 랜딩 페이지 섹션 조립 및 /admin iframe 라우팅
  main.jsx                # React 앱 진입점
  components/             # 공통 UI 컴포넌트
  datas/                  # 섹션별 카드/메뉴 데이터
  lib/supabaseClient.js   # Supabase 클라이언트 생성
  sections/               # 랜딩 페이지 주요 섹션
  style/                  # SCSS 스타일 파일
  index.css               # Tailwind 테마, 폰트, 전역 스타일
public/
  robots.txt
  sitemap.xml
  _redirects
  favicon.*
  kakao_meta.png
```

## 코드 설명

`src/main.jsx`는 `#root` 엘리먼트에 React 앱을 마운트합니다.

`src/App.jsx`는 메인 랜딩 페이지의 섹션을 순서대로 렌더링합니다. 현재 구성은 `Hero`, `Research`, `Troubleshooting`, `Reliability`, `Differentiation`, `RevenueStructure`, `Support`, `Categories`, `Expense`, `Footer` 순서입니다. 하단 상담 탭은 footer 위치를 감지해서 footer와 겹치지 않도록 `bottom` 값을 동적으로 조정합니다.

`/admin` 또는 `/admin/*` 경로로 접근하면 랜딩 페이지 대신 `https://openx-form-admin.vercel.app`을 iframe으로 표시합니다. `vercel.json`은 SPA 라우팅을 위해 모든 경로를 `index.html`로 rewrite하고, `/admin` 경로에는 검색엔진 색인을 막는 `X-Robots-Tag` 헤더를 추가합니다.

`src/lib/supabaseClient.js`는 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`가 모두 있을 때만 Supabase 클라이언트를 생성합니다. 설정이 없으면 `supabase`는 `null`이 되며, 상담 폼 제출 시 설정 오류를 표시합니다.

`src/components/FooterTab.jsx`는 모바일/데스크톱 상담 신청 UI를 담당합니다. 이름, 연락처, 개인정보 동의 값을 검증한 뒤 Supabase의 `form_submissions` 테이블에 `landing_page_id`와 `form_data`를 저장합니다.

`src/components/Carousel.jsx`는 Embla Carousel을 감싼 공통 캐러셀 컴포넌트입니다. 슬라이드가 적을 때는 항목을 복제해 루프 동작이 자연스럽게 보이도록 처리하고, 도트와 이전/다음 버튼 상태를 관리합니다.

`src/index.css`는 Tailwind CSS 4의 `@theme`으로 폰트, 색상, 텍스트 크기 토큰을 정의합니다. Pretendard, LINE Seed, Cafe24Dangdanghae 웹폰트를 불러오고, 공통 flex 유틸리티와 텍스트 애니메이션도 함께 관리합니다.
