import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyPebDOQkb2B99KvYeMUbatakt6IYlTLo",
  authDomain: "test2-c86ad.firebaseapp.com",
  projectId: "test2-c86ad",
  storageBucket: "test2-c86ad.appspot.com",
  messagingSenderId: "702989355188",
  appId: "1:702989355188:web:d174efdf8fab146f626fe1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
