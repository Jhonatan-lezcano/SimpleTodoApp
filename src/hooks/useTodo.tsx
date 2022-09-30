import React, {useEffect, useState} from 'react';
import {
  deleteAllTodosService,
  deleteTodoService,
  getTodos,
  updateTodosPerId,
} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {getCurrentTodos, Todo} from '../store/slices/todoList/todoListSlice';

const useTodo = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {todosData, currentList, currentTodos} = useAppSelector(
    state => state.todoList,
  );

  useEffect(() => {
    getTodos(id, dispatch);
  }, [id]);

  useEffect(() => {
    if (!currentList.id) return;
    const todos = todosData.filter(item => item.idList === currentList.id);
    dispatch(getCurrentTodos(todos));
  }, [currentList, todosData]);

  const updateTodo = (data: Todo) => {
    updateTodosPerId(data);
    console.log('completed');
  };

  const deleteTodo = (id: string) => deleteTodoService(id);

  const deleteAllTodos = (idList: string) => deleteAllTodosService(idList);

  return {
    todosData,
    updateTodo,
    deleteTodo,
    deleteAllTodos,
    currentTodos,
  };
};

export default useTodo;
