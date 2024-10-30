// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOXeHJsH9pRUkFd-ndUasoyfEymsqAjTM",
  authDomain: "react-course-af6b4.firebaseapp.com",
  projectId: "react-course-af6b4",
  storageBucket: "react-course-af6b4.appspot.com",
  messagingSenderId: "702849001553",
  appId: "1:702849001553:web:948ad08121a409d34df070",
  measurementId: "G-6R11JR8HNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app);
export const provider= new GoogleAuthProvider();
export const  db= getFirestore(app);