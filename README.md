# Netflix Clone
#React
# src
---
*index.js*

*App.js* : GlobalStyles, ScreenRouter 컴포넌트.

*API.js* : axios를 사용해서 일괄적으로 api통신을 할 수 있도록 설계.

* *Folder*
> assets
> Components
> Routes


# Components
---
*GlobalStyles* : App.js 전역 스타일링

*Header* : 상단 고정헤더. useLocation으로 메뉴명 하단에 현재 페이지 표시.

*Loader* : 각 스크린 로딩화면

*Poster* : Link로 id값을 동적라우팅으로 연결하고 포스터, 제목, 날짜 등 개별 아이템의 컴포넌트.

*ScreenRouter* : 라우터. 스크린 페이지 -> 각 스크린 폴더, 동적라우팅 -> 디테일 페이지

*Section* : 스크린 폴더 내부의 각 섹션 분할.

Section, Poster 컴포넌트 -> proptype 검사.


# Routes -> 개별 Screen 폴더
---
*index.js* : 폴더로 라우팅 시에 기본적으로 읽어 들이는 파일. container로 export.

*Container* : API.js 에서 각 스크린에 필요한 데이터를 state로 받아와서 Presenter 컴포넌트로 데이터 리턴. proptype 검사.

*Presenter* : 조건문으로 로딩 페이지 확인 후 각각 Section 타이틀, Poster 컴포넌트로 데이터 매핑해서 출력.