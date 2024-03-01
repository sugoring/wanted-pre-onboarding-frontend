### /src
  #### /components
    ##### /List
      - **List.tsx:** 전체 리스트를 관리하는 컴포넌트. Redux store에서 리스트 데이터를 가져와 각 항목에 대한 컴포넌트를 렌더링하고, Add와 Delete 기능을 구현함.
      - **ListItem.tsx:** 각 항목을 나타내는 컴포넌트. 리스트의 각 요소를 렌더링하고, Delete 버튼을 클릭할 때 해당 항목을 삭제하는 기능을 구현함.
  #### /store
    - **index.ts:** Redux store를 생성하고 내보냄.
    - **listSlice.ts:** Redux Toolkit을 사용하여 Redux 상태 및 액션을 정의하는 슬라이스. 리스트의 추가 및 삭제와 관련된 액션을 정의하고, 이를 통해 상태를 업데이트함.
- **App.tsx:** 전체 애플리케이션을 렌더링하는 루트 컴포넌트. 
- **index.tsx:** 애플리케이션의 진입점. App 컴포넌트를 렌더링함.

2가지 기능
1. input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
2. 각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.
