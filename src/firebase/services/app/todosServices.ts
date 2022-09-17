import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {db} from '../../../../config/firebase';
import {
  getArrayList,
  getArrayTodos,
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
  console.log(data);
  const newList = doc(collection(db, 'Lists'));
  await setDoc(newList, data);
  console.log('List created successfully');
};

export const getLists = (idUser: string, dispatch: AppDispatch) => {
  dispatch(loading(true));
  const q = query(collection(db, 'Lists'), where('idUser', '==', idUser));
  const unsuscribe = onSnapshot(q, querySnapshot => {
    const lists: list[] = [];
    querySnapshot.forEach(doc => {
      lists.push({
        id: doc.id,
        idUser: doc.data().idUser,
        color: doc.data().color,
        name: doc.data().name,
      });
    });
    dispatch(getArrayList(lists));
    dispatch(loading(false));
  });
};

//Todos services
export const createTodo = async (data: todos) => {
  console.log(data);
  const newList = doc(collection(db, 'Todos'));
  await setDoc(newList, data);
  console.log('Todo created successfully');
};

export const getTodos = (idUser: string, dispatch: AppDispatch) => {
  const q = query(collection(db, 'Todos'), where('idUser', '==', idUser));
  const unsuscribe = onSnapshot(q, querySnapshot => {
    const todos: todos[] = [];
    querySnapshot.forEach(doc => {
      todos.push({
        id: doc.id,
        idUser: doc.data().idUser,
        idList: doc.data().idList,
        title: doc.data().title,
        completed: doc.data().completed,
      });
    });
    dispatch(getArrayTodos(todos));
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
