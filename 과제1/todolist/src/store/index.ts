import { createSlice, configureStore } from '@reduxjs/toolkit'; 

// 전역 상태를 관리합니다. 리스트 아이템을 추가하거나 삭제하는 액션을 정의하고, 해당 액션을 디스패치하여 상태를 변경합니다.

// 리스트 아이템의 타입 정의
export interface ListItem {
  id: number;
  text: string;
}

// 상태 타입 정의
interface ListState {
  listItems: ListItem[]; // 리스트 아이템 배열
}

// 초기 상태 정의
const initialState: ListState = {
  listItems: [], // 초기에는 빈 배열
};

// Redux slice 생성
const listSlice = createSlice({
  name: 'list', // slice의 이름
  initialState, // 초기 상태
  reducers: {
    // 리스트 아이템 추가 액션
    addListItem: (state, action) => {
      const newItem: ListItem = {
        id: state.listItems.length + 1, // 새로운 아이템의 ID는 현재 리스트 아이템 개수 + 1
        text: action.payload, // 전달된 텍스트를 새로운 아이템의 텍스트로 설정
      };
      state.listItems.push(newItem); // 새로운 아이템을 배열에 추가
    },
    // 리스트 아이템 삭제 액션
    removeListItem: (state, action) => {
      state.listItems = state.listItems.filter(
        item => item.id !== action.payload
      ); // 전달된 ID와 일치하지 않는 아이템만 필터링하여 배열에 남김
    },
  },
});

// 액션 생성자 함수 추출
export const { addListItem, removeListItem } = listSlice.actions;

// 스토어 생성
export default configureStore({
  reducer: listSlice.reducer, // slice의 리듀서를 스토어에 등록
});
