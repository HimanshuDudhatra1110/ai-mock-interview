import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl6y-Z9KVdBeUCxpuutvNWiHs8eCP7ic8",
  authDomain: "mock-interview-ai-79c24.firebaseapp.com",
  projectId: "mock-interview-ai-79c24",
  storageBucket: "mock-interview-ai-79c24.firebasestorage.app",
  messagingSenderId: "373135247051",
  appId: "1:373135247051:web:8cbb1a67c9def8f88e7d4e",
  measurementId: "G-MBEMEYSPNF",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
