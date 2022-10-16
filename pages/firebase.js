// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore}  from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_7WvHjTqWWsjnFQo15eXTvlDEtXeANks",
  authDomain: "medium-32ac5.firebaseapp.com",
  projectId: "medium-32ac5",
  storageBucket: "medium-32ac5.appspot.com",
  messagingSenderId: "367362996847",
  appId: "1:367362996847:web:14bbb886b065577180ab9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
const db=getFirestore(app)
export {auth,provider,db}