import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBri6DvrKu5jqI54zZ5ZJvVsTrx4Txpr-c',
  authDomain: 'todoapp-80f43.firebaseapp.com',
  projectId: 'todoapp-80f43',
  storageBucket: 'todoapp-80f43.appspot.com',
  messagingSenderId: '778088472057',
  appId: '1:778088472057:web:4e87d6778ab508f5f93128',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const methodsFirebase = {
  collection,
  addDoc,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
};
