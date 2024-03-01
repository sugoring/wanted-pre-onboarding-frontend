import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addListItem } from '../../store/index'; 
import './../../App.css';

// 사용자가 입력한 값을 받아 리스트에 추가하는 입력 폼을 제공합니다.

const InputForm: React.FC = () => {
  const [inputText, setInputText] = useState(''); // 입력값을 상태로 관리
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수 가져오기

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value); // 입력값 업데이트
  };

  // 폼 제출 핸들러
  const handleSubmit = () => {
    dispatch(addListItem(inputText)); // 입력값을 가진 리스트 아이템 추가 액션 디스패치
    setInputText(''); // 입력값 초기화
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} /> {/* 입력 폼 */}
      <button onClick={handleSubmit}>Add</button> {/* 추가 버튼 클릭 시 handleSubmit 함수 호출 */}
    </div>
  );
};

export default InputForm;
