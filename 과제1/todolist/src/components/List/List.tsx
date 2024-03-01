// src/components/List/List.tsx

import React from 'react';
import { useDispatch } from 'react-redux'; 
import { removeListItem } from '../../store/index'; 
import './../../App.css';

interface ListProps {
  text: string; // 리스트 아이템의 text
  id: number; // 리스트 아이템의 ID
}

const List: React.FC<ListProps> = ({ text, id }) => {
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수 가져오기

  // 리스트 아이템 삭제 핸들러
  const handleRemove = () => {
    dispatch(removeListItem(id)); // 해당 ID를 가진 리스트 아이템 삭제 액션 디스패치
  };

  return (
    <div>
      <span>{text}</span> {/* 리스트 아이템의 텍스트 출력 */}
      <button onClick={handleRemove}>Remove</button> {/* 삭제 버튼 클릭 시 handleRemove 함수 호출 */}
    </div>
  );
};

export default List;
