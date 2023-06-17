// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyASs4jN0to51v53MYY3JYzcH-HIqOvRug4",
  authDomain: "wood-fans-authentication.firebaseapp.com",
  projectId: "wood-fans-authentication",
  storageBucket: "wood-fans-authentication.appspot.com",
  messagingSenderId: "900869360269",
  appId: "1:900869360269:web:1a7fbe2182f0f67b24f0c4",
  measurementId: "G-320YLR986Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};