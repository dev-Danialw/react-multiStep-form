import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxXlihgepDpVSX1WycyuoOuPemVstWY8s",
  authDomain: "reactreadinglistapp.firebaseapp.com",
  projectId: "reactreadinglistapp",
  storageBucket: "reactreadinglistapp.appspot.com",
  messagingSenderId: "425063495391",
  appId: "1:425063495391:web:74a5f778d97fa8a98e9b6a",
};

// firebase
initializeApp(firebaseConfig);

// firestore
const db = getFirestore();

// auth
const auth = getAuth();

const fbstorage = getStorage();

// timestamo
const timestamp = Timestamp;

export { db, auth, fbstorage, timestamp };
