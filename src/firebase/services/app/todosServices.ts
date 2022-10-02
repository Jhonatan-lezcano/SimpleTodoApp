import {
  collection,
  doc,
  setDoc,
  query,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import {db} from '../../../../config/firebase';
import {
  getArrayList,
  getArrayTodos,
  getCurrentTodos,
  loading,
  Todo,
} from '../../../store/slices/todoList/todoListSlice';
import {AppDispatch} from '../../../store/store';

interface list {
  id?: string;
  idUser: string;
  name: string;
  color: string;
}

interface todos {
  id?: string;
  idUser: string;
  idList: string;
  title: string;
  completed: boolean;
}

// List services
export const createList = async (data: list) => {
  const newList = doc(collection(db, 'Lists'));
  await setDoc(newList, data);
  console.log('List created successfully');
};

export const getLists = async (idUser: string, dispatch: AppDispatch) => {
  dispatch(loading(true));
  const q = query(collection(db, 'Lists'), where('idUser', '==', idUser));

  const unsuscribe = onSnapshot(q, querySnapshot => {
    const lists = querySnapshot.docs.map(list => ({
      ...list.data(),
      id: list.id,
    }));
    dispatch(getArrayList(lists));
    dispatch(loading(false));
  });
};

export const deleteListService = async (idList: string) => {
  console.log('delete');
  const listRef = doc(db, 'Lists', idList);
  await deleteDoc(listRef);
};

//Todos services
export const createTodo = async (data: todos) => {
  const newList = doc(collection(db, 'Todos'));
  await setDoc(newList, data);
  console.log('Todo created successfully');
};

export const getTodos = (idUser: string, dispatch: AppDispatch) => {
  const q = query(collection(db, 'Todos'), where('idUser', '==', idUser));

  const unsuscribe = onSnapshot(q, querySnapshot => {
    const todos = querySnapshot.docs.map(todo => ({
      ...todo.data(),
      id: todo.id,
    }));
    dispatch(getArrayTodos(todos));
  });
};

export const getTodosPerIdList = (idList: string, dispatch: AppDispatch) => {
  const q = query(collection(db, 'Todos'), where('idList', '==', idList));
  const unsuscribe = onSnapshot(q, querySnapshot => {
    const todos = querySnapshot.docs.map(todo => ({
      ...todo.data(),
      id: todo.id,
    }));
    dispatch(getCurrentTodos(todos));
  });
};

export const updateTodosPerId = async (data: Todo) => {
  const todoRef = doc(db, 'Todos', data.id);
  await updateDoc(todoRef, {
    completed: !data.completed,
  });
};

export const deleteTodoService = async (id: string) => {
  const todoRef = doc(db, 'Todos', id);
  await deleteDoc(todoRef);
};

export const deleteAllTodosService = async (idList: string) => {
  const collectionRef = collection(db, 'Todos');
  const q = query(collectionRef, where('idList', '==', idList));
  const snapshot = await getDocs(q);

  const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  results.forEach(async result => {
    const docRef = doc(db, 'Todos', result.id);
    await deleteDoc(docRef);
  });
  console.log('se elimino con exito');
};
