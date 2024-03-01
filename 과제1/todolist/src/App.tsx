import React from 'react';
import InputForm from './components/InputForm/InputForm'; 
import List from './components/List/List';

import { useSelector } from 'react-redux'; // Redux의 useSelector 훅 불러오기
import store from './store/index'; // Redux 스토어 불러오기

// List 컴포넌트와 InputForm 컴포넌트를 렌더링하고, Redux 스토어의 상태를 구독하여 상태 변경 시 UI를 업데이트합니다.

const App: React.FC = () => {
  const listItems = useSelector((state: ReturnType<typeof store.getState>) => state.listItems); // Redux 스토어의 상태에서 리스트 아이템 가져오기

  return (
    <div>
      <InputForm /> {/* 입력 폼 컴포넌트 렌더링 */}
      {listItems.map(item => (
        <List key={item.id} text={item.text} id={item.id} /> // 리스트 컴포넌트 렌더링
      ))}
    </div>
  );
};

export default App;
