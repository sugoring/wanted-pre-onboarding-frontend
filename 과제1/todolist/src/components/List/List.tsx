// src/components/List/List.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeListItem } from '../../store/index';

interface ListProps {
  text: string;
  id: number;
}

const List: React.FC<ListProps> = ({ text, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeListItem(id));
  };

  return (
    <div>
      <span>{text}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default List;
