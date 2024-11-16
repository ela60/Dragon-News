// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxJxN1NC43bWnxjlRded6uLuqklOELepk",
  authDomain: "dragon-news-c6fcd.firebaseapp.com",
  projectId: "dragon-news-c6fcd",
  storageBucket: "dragon-news-c6fcd.firebasestorage.app",
  messagingSenderId: "883266271241",
  appId: "1:883266271241:web:30bb93022f38b86c47a0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;