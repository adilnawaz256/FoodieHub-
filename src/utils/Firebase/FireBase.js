// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBxeqF3z1lu5SRA05oCM1xAqntmUtPsetU",
  authDomain: "foodhub-6b682.firebaseapp.com",
  projectId: "foodhub-6b682",
  storageBucket: "foodhub-6b682.appspot.com",
  messagingSenderId: "884257750120",
  appId: "1:884257750120:web:505c47b3f79dbaf1224fdd",
  measurementId: "G-EQW6Z7DN0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)



