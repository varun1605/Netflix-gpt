
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
export const auth=getAuth(app)
export default app; 