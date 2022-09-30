import React, {useEffect} from 'react';
import {
  getLists,
  deleteAllTodosService,
  deleteListService,
} from '../firebase/services/app/todosServices';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';

const useList = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {listData, isLoading} = useAppSelector(state => state.todoList);

  useEffect(() => {
    getLists(id, dispatch);
    console.log(id);
  }, [id]);

  const deleteList = (idList: string) => {
    deleteAllTodosService(idList);
    deleteListService(idList);
  };

  return {listData, isLoading, deleteList};
};

export default useList;
