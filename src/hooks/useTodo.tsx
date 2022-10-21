import {collection, onSnapshot, query, where} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {db} from '../../config/firebase';
import {
  deleteAllTodosService,
  deleteListService,
  deleteTodoService,
  getTodos,
  getTodosPerIdList,
  updateTodosPerId,
} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {getCurrentTodos, Todo} from '../store/slices/todoList/todoListSlice';

const useTodo = () => {
  const dispatch = useAppDispatch();
  const {todosData, currentList, currentTodos} = useAppSelector(
    state => state.todoList,
  );

  useEffect(() => {
    if (!currentList.id) return;

    dispatch(getCurrentTodos([]));
    const collectionRef = collection(db, 'Todos');
    const q = query(collectionRef, where('idList', '==', currentList.id));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      dispatch(
        getCurrentTodos(
          querySnapshot.docs.map(todo => ({
            ...todo.data(),
            id: todo.id,
          })),
        ),
      );
    });
    return unsubscribe;
  }, []);

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
