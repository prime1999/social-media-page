// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDjONt-_sfhr4AyONHXC6bz8mCo5siOTg",
  authDomain: "social-media-project-b8e86.firebaseapp.com",
  projectId: "social-media-project-b8e86",
  storageBucket: "social-media-project-b8e86.appspot.com",
  messagingSenderId: "874361304110",
  appId: "1:874361304110:web:bf2ae0c0035dd839125bbf",
  measurementId: "G-9JPT50RTPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
