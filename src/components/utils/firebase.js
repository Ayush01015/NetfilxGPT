// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb4DqWR4W0kVxjOkeZcI1UNi3e1gXmvqc",
  authDomain: "netflixgpt-18766.firebaseapp.com",
  projectId: "netflixgpt-18766",
  storageBucket: "netflixgpt-18766.appspot.com",
  messagingSenderId: "675423990619",
  appId: "1:675423990619:web:545a5b1272b660a9d5207e",
  measurementId: "G-K07JH2HXCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();