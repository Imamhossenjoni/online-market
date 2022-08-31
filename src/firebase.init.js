// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJdmg88MiMWjMUX96HE9km6MXqCoJLQU",
  authDomain: "online-market-138b0.firebaseapp.com",
  projectId: "online-market-138b0",
  storageBucket: "online-market-138b0.appspot.com",
  messagingSenderId: "185924461209",
  appId: "1:185924461209:web:b03b5bb6e55063aea6ce08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;