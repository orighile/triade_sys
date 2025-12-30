import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

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

// Initialize Firebase with error handling
let app: FirebaseApp;
let db: Firestore;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
  // Create a minimal mock to prevent app crashes
  app = {} as FirebaseApp;
  db = {} as Firestore;
}

export { db };
export default app;
