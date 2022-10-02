import React, {useEffect, useState} from 'react';
import {
  deleteAllTodosService,
  deleteListService,
  deleteTodoService,
  getTodos,
  getTodosPerIdList,
  updateTodosPerId,
} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {Todo} from '../store/slices/todoList/todoListSlice';

const useTodo = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {todosData, currentList, currentTodos} = useAppSelector(
    state => state.todoList,
  );

  useEffect(() => {
    if (!currentList.id) return;
    getTodosPerIdList(currentList.id, dispatch);
  }, [currentList]);

  const updateTodo = (data: Todo) => {
    updateTodosPerId(data);
    console.log('completed');
  };

  const deleteList = (idList: string) => {
    deleteAllTodosService(idList);
    deleteListService(idList);
  };

  const deleteTodo = (id: string) => deleteTodoService(id);

  const deleteAllTodos = (idList: string) => deleteAllTodosService(idList);

  return {
    todosData,
    updateTodo,
    deleteTodo,
    deleteAllTodos,
    currentTodos,
    deleteList,
  };
};

export default useTodo;
