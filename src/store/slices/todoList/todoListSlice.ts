import {createSlice} from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ListData {
  listData: List[];
}

export interface List {
  id: string;
  name: string;
  color: string;
  todos: Todo[];
}

const initialState: ListData = {
  listData: [
    {
      id: '1',
      name: 'plan to travel tomorrow',
      color: '#24A6D9',
      todos: [
        {
          id: '1',
          title: 'Book Flight',
          completed: false,
        },
        {
          id: '2',
          title: 'Book Flight',
          completed: false,
        },
        {
          id: '3',
          title: 'Book Flight',
          completed: false,
        },
        {
          id: '4',
          title: 'Book Flight',
          completed: false,
        },
      ],
    },
    {
      id: '2',
      name: 'Shopping List',
      color: '#8022D9',
      todos: [
        {
          id: '1',
          title: 'Book Flight',
          completed: true,
        },
        {
          id: '2',
          title: 'Book Flight',
          completed: false,
        },
        {
          id: '3',
          title: 'Book Flight',
          completed: false,
        },
        {
          id: '4',
          title: 'Book Flight',
          completed: false,
        },
      ],
    },
    {
      id: '3',
      name: 'Worked',
      color: '#24A6D9',
      todos: [
        {
          id: '1',
          title: 'Book Flight',
          completed: true,
        },
        {
          id: '2',
          title: 'Book Flight',
          completed: true,
        },
        {
          id: '3',
          title: 'Book Flight',
          completed: false,
        },
        {
          id: '4',
          title: 'Book Flight',
          completed: false,
        },
      ],
    },
    {
      id: '4',
      name: 'Study',
      color: '#8022D9',
      todos: [
        {
          id: '1',
          title: 'Book Flight',
          completed: true,
        },
        {
          id: '2',
          title: 'Book Flight',
          completed: true,
        },
        {
          id: '3',
          title: 'Book Flight',
          completed: true,
        },
        {
          id: '4',
          title: 'Book Flight',
          completed: false,
        },
      ],
    },
  ],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    prueba: state => console.log(state),
  },
});

export const {prueba} = todoListSlice.actions;

export default todoListSlice.reducer;
