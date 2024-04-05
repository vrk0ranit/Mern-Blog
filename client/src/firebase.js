// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-35aa3.firebaseapp.com",
  projectId: "mern-blog-35aa3",
  storageBucket: "mern-blog-35aa3.appspot.com",
  messagingSenderId: "436666140657",
  appId: "1:436666140657:web:986f7c1f93a15a02d7e650"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);