// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgIb5EseUAB5yVPcUhX1NM0IQ_joL_fdM",
  authDomain: "bad-banking.firebaseapp.com",
  projectId: "bad-banking",
  storageBucket: "bad-banking.appspot.com",
  messagingSenderId: "395646555469",
  appId: "1:395646555469:web:95537c1b47c9c4ab029304",
  measurementId: "G-D6W0QD1KXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);