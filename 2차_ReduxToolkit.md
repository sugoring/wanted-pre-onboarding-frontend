
### useDispatch()
- dispatch: action을 실행하는 함수
- 컴포넌트 내부에서 action을 실행함
- useDispatch() hook을 사용하여 dispatch를 정의함

### useSelector()
- store의 state에서 필요한 데이터만 select하게 해주는 hook
- action이 dispatch 되었을 때 이전 결과 값과 현재 값을 비교해서 값이 바뀌었을 때만, 컴포너트가 리렌더링 된다

### crateSlice()
- slice: 특정 값에 대한 action과 reducer가 정의된 fuction
- slice에 reducer와 state에 해당하는 action creator와 action type이 만들어짐
- store를 slice해서 state, action, reducer를 만든다는 뜻
- 이름, 상태 초기 값, 리듀서 함수들로 이루어진 객체를 받아, 그에 맞느 액션 생산자와 액션 타입을 포함하는 리듀서를 자동으로 만들어줌

### createAsyncThunk()
- thunk: 특정 작업을 나중에 할 수 있도록 redux store와 상호작용을 하는 함수
- 비동기 처리시 사용
- 액션 타입 문자열과 프로미스를 반환하는 함수를 받아 pending, fulfilled, rejected 액션 타입을 티스패치해주는 thunk를 생성함
- 3가지 파라미터: type, payloadCreator, options

### extraReducers
- reducer에서 끝내지 못한 일들을 할 수 있게 하는 함수
- slice reducer에 맵핑된 액션 함수가 아니라 외부의 액션을 참조하기 위해 사용됨
- 일반적으로 thunk를 핸들링 할 떼 사용해서 addCase로 api call 한 것을 분기처리를 해줄 수 있다