import React from 'react';

const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Add
    </button>
  );
}

export default AddButton;
