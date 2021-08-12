import firebase from "firebase";
import firebaseApp from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDp2Wg7Z5w3qdr04XT9dnNbRlxcL2_gEhA",
  authDomain: "clothingstore-6b82b.firebaseapp.com",
  projectId: "clothingstore-6b82b",
  storageBucket: "clothingstore-6b82b.appspot.com",
  messagingSenderId: "953725911657",
  appId: "1:953725911657:web:ce97927141564617c998f8",
  measurementId: "G-JSFY77WEJR",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const RealTimeDb = firebase.database();

export const auth = firebaseApp.auth();