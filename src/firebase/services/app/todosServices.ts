import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import {db} from '../../../../config/firebase';
import {loading} from '../../../store/slices/todoList/todoListSlice';
import {AppDispatch} from '../../../store/store';

interface list {
  id?: string;
  idUser: string;
  name: string;
  color: string;
}

export const createList = async (data: list) => {
  console.log(data);
  // console.log(db.app);
  const newList = doc(collection(db, 'Lists'));
  await setDoc(newList, data);
  console.log('List created successfully');
};

export const getLists = (
  idUser: string,
  dispatch: AppDispatch,
  action: Function,
) => {
  dispatch(loading(true));
  const q = query(collection(db, 'Lists'), where('idUser', '==', idUser));
  onSnapshot(q, querySnapshot => {
    const lists: list[] = [];
    querySnapshot.forEach(doc => {
      lists.push({
        id: doc.id,
        idUser: doc.data().idUser,
        color: doc.data().color,
        name: doc.data().name,
      });
    });
    console.log(lists);
    dispatch(action(lists));
    dispatch(loading(false));
  });
};
