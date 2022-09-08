import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBri6DvrKu5jqI54zZ5ZJvVsTrx4Txpr-c',
  authDomain: 'todoapp-80f43.firebaseapp.com',
  databaseURL: 'https://todoapp-80f43-default-rtdb.firebaseio.com',
  projectId: 'todoapp-80f43',
  storageBucket: 'todoapp-80f43.appspot.com',
  messagingSenderId: '778088472057',
  appId: '1:778088472057:web:4e87d6778ab508f5f93128',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const methodsFirebase = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
