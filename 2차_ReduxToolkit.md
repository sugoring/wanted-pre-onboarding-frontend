# Redux-Toolkit
- Redux를 사용하여 애플리케이션의 상태를 관리할 때 발생할 수 있는 복잡성과 반복적인 코드를 줄이기 위해 고안된 공식 도구

## useDispatch() 
- dispatch: Redux store에 action을 보내는 함수
- useDispatch(): React 컴포넌트 내부에서 dispatch 함수를 쉽게 사용할 수 있게 해주는 React hook

## useSelector() 
- Redux store의 state에서 필요한 부분만을 선택(select)하여 가져올 수 있게 해주는 함수
- 컴포넌트가 useSelector를 사용하여 store의 state 일부를 선택하면, 해당 state 부분이 변경될 때마다 컴포넌트가 리렌더링됨

## crateSlice()
- slice: Redux state의 일부분을 나타내며, 관련된 action과 reducers를 그룹화한 것
- 각 slice는 해당 slice의 state와 이를 변경하는 로직을 캡슐화함
- createSlice(): slice의 이름, 초기 상태(initial state), slice가 처리할 reducers를 정의하는 객체를 인자로 받음 

## createAsyncThunk()
- thunk: Redux 애플리케이션에서 비동기 로직을 처리하기 위한 방법
- createAsyncThunk() 함수: 비동기 작업을 수행함, 액션 타입 문자열과 프로미스를 반환하는 payload creator 함수를 인자로 받음
- 비동기 작업의 세 가지 상태(pending, fulfilled, rejected)에 대해 처리할 수 있는 action types를 자동으로 생성함

## extraReducers
- createSlice 또는 다른 slice 내부에서 직접적으로 처리되지 않는 외부 actions를 관리하기 위한 방법
- slice reducer에 맵핑된 액션 함수가 아니라 외부의 액션을 참조하기 위해 사용됨
- 일반적으로 thunk를 핸들링 할 떼 사용해서 addCase로 api call 한 것을 분기처리를 해줄 수 있음