import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc,
  doc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgjvB9P7b0T2J6m-P-ks_VqRCb86b9ZIA',
  authDomain: 'sn-wataritori.firebaseapp.com',
  projectId: 'sn-wataritori',
  storageBucket: 'sn-wataritori.appspot.com',
  messagingSenderId: '718791831933',
  appId: '1:718791831933:web:842ea9f135b552a00d5c14',
  measurementId: 'G-J52Y358N81',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const colRef = collection(db, 'Posts');
// const analytics = getAnalytics(app);
// const auth = getAuth();

export {
  auth, provider, db, colRef,
};
