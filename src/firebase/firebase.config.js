// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI3VH3ATVYJottuJeP35PN0JS1w452psE",
  authDomain: "the-news-dragon-client-7336b.firebaseapp.com",
  projectId: "the-news-dragon-client-7336b",
  storageBucket: "the-news-dragon-client-7336b.appspot.com",
  messagingSenderId: "871049641864",
  appId: "1:871049641864:web:a1f0f7eb106ae65a47443d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;