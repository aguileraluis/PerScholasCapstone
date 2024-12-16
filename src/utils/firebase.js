import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "perscholas-capstone.firebaseapp.com",
  projectId: "perscholas-capstone",
  storageBucket: "perscholas-capstone.firebasestorage.app",
  messagingSenderId: "846116568852",
  appId: "1:846116568852:web:4d9a8d7933b592d3de0c01",
  measurementId: "G-E8BSY056C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);