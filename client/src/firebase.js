// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1dfa1.firebaseapp.com",
  projectId: "mern-estate-1dfa1",
  storageBucket: "mern-estate-1dfa1.appspot.com",
  messagingSenderId: "932789067673",
  appId: "1:932789067673:web:65d0146a7b96c19f61fd08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);