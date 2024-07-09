// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate77aa.firebaseapp.com",
  projectId: "realestate77aa",
  storageBucket: "realestate77aa.appspot.com",
  messagingSenderId: "431138382710",
  appId: "1:431138382710:web:9d47e89d8e9f540d219057",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
