import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../../../config/firebase';

interface list {
  idUser: string;
  name: string;
  color: string;
}

export const createList = async (data: list) => {
  console.log(data);

  await addDoc(collection(db, 'Lists'), data);
  console.log('List created successfully');
};
