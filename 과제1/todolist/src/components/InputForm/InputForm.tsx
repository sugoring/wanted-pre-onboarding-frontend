// src/components/InputForm/InputForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addListItem } from '../../store/index';

const InputForm: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addListItem(inputText));
    setInputText('');
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default InputForm;
