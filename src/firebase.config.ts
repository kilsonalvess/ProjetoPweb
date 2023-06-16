// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCvb1iwGhSwYqc6SJ5kLYsT_zpSnJ2rhPA",
  authDomain: "simple-unit-converter-480d6.firebaseapp.com",
  projectId: "simple-unit-converter-480d6",
  storageBucket: "simple-unit-converter-480d6.appspot.com",
  messagingSenderId: "1037403203198",
  appId: "1:1037403203198:web:160fa6bb3e0e40b1dd1a2f",
  measurementId: "G-W5V227JN8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
