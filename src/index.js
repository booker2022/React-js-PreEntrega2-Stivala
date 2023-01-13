import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvjfsCnMcTXAki81tBc3tQqX-1oCqyoak",
  authDomain: "proyecto-coder-gsc.firebaseapp.com",
  projectId: "proyecto-coder-gsc",
  storageBucket: "proyecto-coder-gsc.appspot.com",
  messagingSenderId: "203014315995",
  appId: "1:203014315995:web:a9a11332c5a821cc3811fe",
  measurementId: "G-4JY6B30G7M"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
