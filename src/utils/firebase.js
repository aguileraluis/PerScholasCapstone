import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "perscholas-capstone.firebaseapp.com",
  projectId: "perscholas-capstone",
  storageBucket: "perscholas-capstone.firebasestorage.app",
  messagingSenderId: "846116568852",
  appId: "1:846116568852:web:4d9a8d7933b592d3de0c01",
  measurementId: "G-E8BSY056C4"
};

export const app = initializeApp(firebaseConfig);
