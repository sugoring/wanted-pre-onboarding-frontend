// src/store/index.ts
import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface ListItem {
  id: number;
  text: string;
}

interface ListState {
  listItems: ListItem[];
}

const initialState: ListState = {
  listItems: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addListItem: (state, action) => {
      const newItem: ListItem = {
        id: state.listItems.length + 1,
        text: action.payload,
      };
      state.listItems.push(newItem);
    },
    removeListItem: (state, action) => {
      state.listItems = state.listItems.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addListItem, removeListItem } = listSlice.actions;

export default configureStore({
  reducer: listSlice.reducer,
});
