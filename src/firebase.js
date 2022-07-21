
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2ufGaAfH_dom4csVOnN_6YwWvVysMeHw",
  authDomain: "messenger-clone-c771c.firebaseapp.com",
  projectId: "messenger-clone-c771c",
  storageBucket: "messenger-clone-c771c.appspot.com",
  messagingSenderId: "954327595598",
  appId: "1:954327595598:web:85221a8861f0b4b41a211f",
  measurementId: "G-7049Q9GTNX"
});

const db = firebaseApp.firestore();
export default db;