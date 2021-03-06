// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrHkjfoZ_GQFlloauemgH98F4LKPaFLfY",
  authDomain: "ladooshop-991be.firebaseapp.com",
  projectId: "ladooshop-991be",
  storageBucket: "ladooshop-991be.appspot.com",
  messagingSenderId: "790346226558",
  appId: "1:790346226558:web:b9d3ded60395a2c9de312f",
  measurementId: "G-YRTVPCG47X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();