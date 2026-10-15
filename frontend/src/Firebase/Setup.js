import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBPKsmSCtatTPmG1GTOgE_G5adn1PbcDZg",
  authDomain: "sb-masala.firebaseapp.com",
  projectId: "sb-masala",
  storageBucket: "sb-masala.firebasestorage.app",
  messagingSenderId: "981752518965",
  appId: "1:981752518965:web:33658e2dfcaaa42fe7147c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);