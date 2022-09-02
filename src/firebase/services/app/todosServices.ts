import {collection, addDoc, doc, setDoc} from 'firebase/firestore';
import {db} from '../../../../config/firebase';

interface list {
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
