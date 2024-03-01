// src/App.tsx
import React from 'react';
import InputForm from './components/InputForm/InputForm';
import List from './components/List/List';
import { useSelector } from 'react-redux';
import store from './store/index';

const App: React.FC = () => {
  const listItems = useSelector((state: ReturnType<typeof store.getState>) => state.listItems);

  return (
    <div>
      <InputForm />
      {listItems.map(item => (
        <List key={item.id} text={item.text} id={item.id} />
      ))}
    </div>
  );
};

export default App;
