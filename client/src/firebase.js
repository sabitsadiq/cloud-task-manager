// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-691fd.firebaseapp.com",
  projectId: "taskmanager-691fd",
  storageBucket: "taskmanager-691fd.appspot.com",
  messagingSenderId: "144032475676",
  appId: "1:144032475676:web:80949a613bb2070e4b0dd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
