// frontend/firebaseConfig.ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD1GZvRTXOQzy47yE8eE2rR8T17AvWUlE",
  authDomain: "careconnect.firebaseapp.com",
  projectId: "careconnect-860ba",
  storageBucket: "careconnect-860ba.firebasestorage.app",
  messagingSenderId: "1074031557756",
  appId: "1:1074031557756:android:3f87d59eb0856ad02eddf9",
};

const app = initializeApp(firebaseConfig);

export default app;
