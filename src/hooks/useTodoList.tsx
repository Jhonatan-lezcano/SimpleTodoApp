import React, {useEffect} from 'react';
import {getLists, getTodos} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {getArrayList} from '../store/slices/todoList/todoListSlice';

const useTodoList = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {listData, isLoading} = useAppSelector(
    state => state.todoList,
  );

  useEffect(() => {
    getLists(id, dispatch);
  }, [id]);

  return {listData, isLoading};
};

export default useTodoList;
