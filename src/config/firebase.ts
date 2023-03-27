// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYw55JMPqAd9iE1QP5LlPWTd2UVMq7f_A",
  authDomain: "todolist1-16851.firebaseapp.com",
  projectId: "todolist1-16851",
  storageBucket: "todolist1-16851.appspot.com",
  messagingSenderId: "930632308657",
  appId: "1:930632308657:web:01a0434142fe0a93ec4f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)