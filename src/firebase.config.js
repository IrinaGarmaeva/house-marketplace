// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGD6HMEj7yLxhQW5PWUNF8AKjs-GhlCyo",
  authDomain: "house-marketplace-app-10480.firebaseapp.com",
  projectId: "house-marketplace-app-10480",
  storageBucket: "house-marketplace-app-10480.appspot.com",
  messagingSenderId: "641319394610",
  appId: "1:641319394610:web:1eec2b459c52b3c27fcb2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
