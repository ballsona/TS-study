import React, { createContext, useReducer, useContext } from 'react';

//Context 초기값
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};
// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS_ING':
      return { ...state, users: loadingState };
    case 'GET_USERS_SUCCESS': {
      return { ...state, users: success(action.data) };
    }
    case 'GET_USERS_ERROR':
      return { ...state, users: error(action.err) };
    case 'GET_USER_ING':
      return { ...state, user: loadingState };
    case 'GET_USER_SUCCESS':
      return { ...state, user: success(action.data) };
    case 'GET_USER_ERROR':
      return { ...state, user: success(action.err) };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export const getUsers = async (dispatch) => {
  dispatch({ type: 'GET_USERS_ING' });
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dispatch({ type: 'GET_USERS_SUCCESS', data: data });
  } catch (err) {
    dispatch({ type: 'GET_USERS_ERROR', err });
  }
};

export const getUser = async (dispatch, id) => {
  dispatch({ type: 'GET_USER_ING' });
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    dispatch({ type: 'GET_USER_SUCCESS', data: data });
  } catch (err) {
    dispatch({ type: 'GET_USER_ERROR', err });
  }
};

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}
