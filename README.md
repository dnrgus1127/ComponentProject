React에 익숙해지기 위해서 다양한 컴포넌트들을 만들어 보고 그 결과물들을 보기 쉽게 정리하는 공부 목적 프로젝트

프로젝트 제작 계기

- 리액트를 다루면서 어떤 컴포넌트들을 만들어 볼까 고민하던 도중 velog에서 웹 에서 자주 사용되는 32가지 UI 요소 글을 보고 아이디어를 떠올렸으며
  해당 UI들을 전부 개발해보고, 컨트롤러를 통해서 실시간으로 크기 조절과 색상 조절 등을 추가하여 추후에 컴포넌트를 만들기 전에 보면 도움될 수 있도록 개발해 보았다.

사용 패키지

- react
- styled-component

목표 기능

- 컨트롤러를 이용해 크기 조절, 폰트 조절, 색상 조절, border 조절
- 상호작용시 웹 하단에 간단한 메시지
- 32개 이상의 UI 컴포넌트 제공

제약 조건

- 다크모드 지원
- 반응형 웹 페이지는 일단 지원 안함, 개발 이후 리팩토링을 통해서 구현 해보면 좋을것 같음

TODO

- 컨트롤러로 조정할 수 있는 값을 px, %, rem 단위 변경할 수 있게 수정하면 좋을 것 같다.
- 버튼 등에서 편하게 비율맞추도록 가로나 세로를 고정하고 고정비에 따라 나머지 값이 변하게 하는 기능
- 폰트 크기가 height값에 따라 제한을 둬서 엘리먼트 밖으로 나가지 못하게
- 컨트롤러 밑에 컨트롤러 값에 따른 실제 엘리먼트 크기(px)를 표현할 수 있는 상태창을 만들면 좋을것 같다.
