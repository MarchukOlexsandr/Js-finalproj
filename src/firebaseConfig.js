// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyAYe6SZaJU7JsXslkXiPdS2pBFAefOv_wc",
  authDomain: "react-firebase-auth-8b664.firebaseapp.com",
  projectId: "react-firebase-auth-8b664",
  storageBucket: "react-firebase-auth-8b664.appspot.com",
  messagingSenderId: "830215603866",
  appId: "1:830215603866:web:a346db5ca6f3890f1ac123",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
