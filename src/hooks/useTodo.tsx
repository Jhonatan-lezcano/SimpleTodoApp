import React, {useEffect} from 'react';
import {
  getTodos,
  updateTodosPerId,
} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {Todo} from '../store/slices/todoList/todoListSlice';

const useTodo = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {listData, todosData} = useAppSelector(state => state.todoList);

  useEffect(() => {
    getTodos(id, dispatch);
  }, [listData]);

  const updateTodo = (data: Todo) => {
    updateTodosPerId(data);
  };

  return {todosData, updateTodo};
};

export default useTodo;
