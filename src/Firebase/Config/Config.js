// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHvZJP_O9SKuuBfIUV2q2iEPkgWoChzf4",
  authDomain: "fast-food-a0f32.firebaseapp.com",
  projectId: "fast-food-a0f32",
  storageBucket: "fast-food-a0f32.appspot.com",
  messagingSenderId: "533584144295",
  appId: "1:533584144295:web:f7052d9b90dbb7724ab882",
  measurementId: "G-041WBKT9K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const db = getFirestore(app);

export {auth,db};
