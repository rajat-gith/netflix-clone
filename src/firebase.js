import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmgW89Tb5FWJGJ5KV21gdkwutBA64kqdQ",
  authDomain: "netflix-clone-d1dbf.firebaseapp.com",
  projectId: "netflix-clone-d1dbf",
  storageBucket: "netflix-clone-d1dbf.appspot.com",
  messagingSenderId: "598763686836",
  appId: "1:598763686836:web:59b7b3f0f6cb6a20d340e1"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
