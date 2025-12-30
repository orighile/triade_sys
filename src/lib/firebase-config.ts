import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

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
let database: Database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
  app = {} as FirebaseApp;
  database = {} as Database;
}

export { database };
export default app;
