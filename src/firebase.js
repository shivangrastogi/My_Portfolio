// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAXTYqReQShnNnR-SSF7YWTMmMkN8Tw3ls",
  authDomain: "portfolio-testimo.firebaseapp.com",
  projectId: "portfolio-testimo",
  storageBucket: "portfolio-testimo.firebasestorage.app",
  messagingSenderId: "484436654659",
  appId: "1:484436654659:web:563283cc8afcfc66f0b2f6",
  measurementId: "G-L0PNC04PF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

export { db, storage };
