// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSbMDl4SNXvYZwQi8NgN6n0Fd7ijWt8Ds",
  authDomain: "react-auth1-fc82b.firebaseapp.com",
  projectId: "react-auth1-fc82b",
  storageBucket: "react-auth1-fc82b.appspot.com",
  messagingSenderId: "679504675660",
  appId: "1:679504675660:web:be9602df4bd7b66f3dc5e9",
  measurementId: "G-SNQFKF901Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

