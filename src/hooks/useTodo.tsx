import React, {useEffect} from 'react';
import {
  deleteTodoService,
  getTodos,
  updateTodosPerId,
} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {Todo} from '../store/slices/todoList/todoListSlice';

const useTodo = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {todosData} = useAppSelector(state => state.todoList);

  useEffect(() => {
    getTodos(id, dispatch);
  }, [id]);

  const updateTodo = (data: Todo) => {
    updateTodosPerId(data);
  };

  const deleteTodo = (id: string) => deleteTodoService(id);

  const deleteAllTodos = (idList: string) => console.log(id);

  return {todosData, updateTodo, deleteTodo, deleteAllTodos};
};

export default useTodo;
