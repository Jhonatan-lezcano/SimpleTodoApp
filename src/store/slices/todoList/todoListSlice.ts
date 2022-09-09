import {createSlice} from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  idList: string;
  title: string;
  completed: boolean;
}

export interface List {
  id: string;
  idUser: string;
  name: string;
  color: string;
}

interface StateType {
  isLoading: boolean;
  listData: List[];
  todosData: Todo[];
}

const initialState: StateType = {
  isLoading: false,
  listData: [],
  todosData: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    getArrayList: (state, action) => {
      return {...state, listData: action.payload};
    },
    loading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});

export const {getArrayList, loading} = todoListSlice.actions;

export default todoListSlice.reducer;
