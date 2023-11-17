// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGING_SEND_ID,
  appId: process.env.REACT_APP_API_APP_ID,
  measurementId: process.env.REACT_APP_API_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
