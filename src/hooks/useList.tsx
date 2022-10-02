import React, {useEffect} from 'react';
import {getLists, getTodos} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';

const useList = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {listData, isLoading} = useAppSelector(state => state.todoList);

  useEffect(() => {
    getLists(id, dispatch);
    getTodos(id, dispatch);
    console.log(id);
  }, [id]);

  return {listData, isLoading};
};

export default useList;
