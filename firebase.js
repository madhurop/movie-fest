// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaz4GqeZfQ7ppJiFxCxbe1ti9Wwlxgk2k",
  authDomain: "moviefest-f46ae.firebaseapp.com",
  projectId: "moviefest-f46ae",
  storageBucket: "moviefest-f46ae.appspot.com",
  messagingSenderId: "245128555157",
  appId: "1:245128555157:web:d91c11dfaff0ea8253499c",
  measurementId: "G-9K1Q74M7PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();