// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOFoQFKr1QDd8k6FeN40W-YkVdah8E90w",
  authDomain: "lunch-b3faf.firebaseapp.com",
  projectId: "lunch-b3faf",
  storageBucket: "lunch-b3faf.firebasestorage.app",
  messagingSenderId: "70526731525",
  appId: "1:70526731525:web:cb5d7e0d47d265e12ba36c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
