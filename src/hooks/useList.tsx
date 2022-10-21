import {collection, onSnapshot, query, where} from 'firebase/firestore';
import React, {useEffect} from 'react';
import {db} from '../../config/firebase';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {
  getArrayList,
  getArrayTodos,
  loading,
} from '../store/slices/todoList/todoListSlice';

const useList = () => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(state => state.user);
  const {listData, isLoading, todosData} = useAppSelector(
    state => state.todoList,
  );

  useEffect(() => {
    dispatch(loading(true));
    const collectionRef = collection(db, 'Lists');
    const q = query(collectionRef, where('idUser', '==', id));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      dispatch(
        getArrayList(
          querySnapshot.docs.map(list => ({
            ...list.data(),
            id: list.id,
          })),
        ),
      );
      dispatch(loading(false));
    });
    console.log(id);
    return unsubscribe;
  }, [id]);

  useEffect(() => {
    const collectionRef = collection(db, 'Todos');
    const q = query(collectionRef, where('idUser', '==', id));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      dispatch(
        getArrayTodos(
          querySnapshot.docs.map(todo => ({
            ...todo.data(),
            id: todo.id,
          })),
        ),
      );
    });
    return unsubscribe;
  }, [id]);

  return {listData, isLoading, todosData};
};

export default useList;
