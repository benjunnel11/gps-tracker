// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClls53k5l5GtrAth9mOTR00yMoxiu3-84",
  authDomain: "embedded-gps-locator.firebaseapp.com",
  databaseURL: "https://embedded-gps-locator-default-rtdb.firebaseio.com",
  projectId: "embedded-gps-locator",
  storageBucket: "embedded-gps-locator.appspot.com",
  messagingSenderId: "38444798406",
  appId: "1:38444798406:web:48958316a462eb279462c7",
  measurementId: "G-9EBJ7J71CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database instance
const database = getDatabase(app);

export { database };
