// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACZIWLlt4tjHTj2et8MjzIsYoFuxrTdeI",
  authDomain: "coffee-store-d7084.firebaseapp.com",
  projectId: "coffee-store-d7084",
  storageBucket: "coffee-store-d7084.firebasestorage.app",
  messagingSenderId: "428337849736",
  appId: "1:428337849736:web:8e3dde9b65d7f8d0bb463d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);