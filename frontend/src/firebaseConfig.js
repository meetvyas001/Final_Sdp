// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyR6apj5MlLS0SXkAkuxuYcd549XFZftQ",
  authDomain: "pitstopwebapp.firebaseapp.com",
  projectId: "pitstopwebapp",
  storageBucket: "pitstopwebapp.firebasestorage.app",
  messagingSenderId: "792849652322",
  appId: "1:792849652322:web:f621e8630d4dff9f288f3b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
