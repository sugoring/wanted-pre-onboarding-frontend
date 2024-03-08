import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index'; // Redux 스토어 불러오기
import App from './App'; // 애플리케이션 컴포넌트 불러오기

// 애플리케이션을 렌더링하는 진입점
ReactDOM.render(
  <Provider store={store}> {/* Redux 스토어를 애플리케이션에 제공하기 위한 Provider */}
    <App /> {/* App 컴포넌트 렌더링 */}
  </Provider>,
  document.getElementById('root') // index.html의 root 요소에 애플리케이션 렌더링
);
