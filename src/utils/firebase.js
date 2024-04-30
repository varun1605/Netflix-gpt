// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoeIehXgl7PL1O7t4O2y-R3du-zkKAsWA",
  authDomain: "netflixgpt-b4680.firebaseapp.com",
  projectId: "netflixgpt-b4680",
  storageBucket: "netflixgpt-b4680.appspot.com",
  messagingSenderId: "106244343872",
  appId: "1:106244343872:web:b00b2bb029cf864a3df7a5",
  measurementId: "G-0104WCLKMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);