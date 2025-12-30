import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG6XWEjq9uTHgcxEClE_yiOssdl6viTBQ",
  authDomain: "triadesys-5eb96.firebaseapp.com",
  databaseURL: "https://triadesys-5eb96-default-rtdb.firebaseio.com",
  projectId: "triadesys-5eb96",
  storageBucket: "triadesys-5eb96.firebasestorage.app",
  messagingSenderId: "274974195910",
  appId: "1:274974195910:web:4ff724d1b9bc9e818257c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
