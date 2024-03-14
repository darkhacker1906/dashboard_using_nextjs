import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNsmeM2Uu_Uu3N1cOoFmCXPSfuSh_n3D4",
  authDomain: "nextdashboard-57ae2.firebaseapp.com",
  projectId: "nextdashboard-57ae2",
  storageBucket: "nextdashboard-57ae2.appspot.com",
  messagingSenderId: "749933222077",
  appId: "1:749933222077:web:5a64872efd493f72097fd4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
