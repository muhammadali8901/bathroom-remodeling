import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6j-X3Iwd9v7sAw924cTYzSudWGmuq6To",
  authDomain: "remodeling-website-6fb31.firebaseapp.com",
  projectId: "remodeling-website-6fb31",
  storageBucket: "remodeling-website-6fb31.firebasestorage.app",
  messagingSenderId: "62727025961",
  appId: "1:62727025961:web:ce3c5c41c88d3c327f7338"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
