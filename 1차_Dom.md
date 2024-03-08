
## 프레임워크 및 라이브러리
- 발전 동기: 어플리케이션 규모 확장에 따라 API 통신 데이터 업데이트, 이벤트 및 상태(state) 조작 필요성 증가
- 기존 방식의 한계: document.getElementById() 같은 DOM API로 HTML을 직접 조작하는 방식은 불편하고 비효율적
- 예시: Angular, React, Vue, Svelte
- 역할: 브라우저 DOM 조작을 프레임워크 및 라이브러리에 위임

---
## DOM(Document Object Model)
- HTML 문서의 계층적 구조와 정보를 표현하고 제어할 수 있는 API, 프로퍼티, 메서드를 제공하는 트리 자료구조
- 구성 요소: 노드(Node), 객체(Object)

### DOM 등장 배경
- 서버에서 HTML 동적 생성을 가능하게 하는 PHP 같은 서버 언어 등장
- 브라우저 내부에서 서버 개입 없이 HTML 동적 변경을 위해 JavaScript 개발
- JavaScript가 조작할 수 있도록 HTML 문서를 객체로 변환하는 인터페이스 = DOM


## window 및 document
- window 객체: 브라우저 창을 나타내며, JavaScript에서 가장 상위에 있는 객체, HTML 요소가 아님
- document 객체: HTML 문서 자체를 나타내며, window.document를 통해 접근 가능

---
## 파싱(Parsing)
- 웹 페이지 내용을 분석, 해석하는 과정
- HTML을 DOM 트리로 변환
- 문서를 코드에서 사용할 수 있는 구조로 변환하는 과정, 토큰화를 통해 DOM트리, CSSOM 트리로 표현

## 렌더링(Rendering)
 - HTML, CSS, JS로 작성된 문서를 파싱하여 브라우저에 시각적으로 출력하는 과정
 - 브라우저 렌더링 과정: Critical Rendering Path, 중요 렌더링 경로를 따름