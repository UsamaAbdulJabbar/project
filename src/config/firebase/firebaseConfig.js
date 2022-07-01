// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvIR2r1-w8mrgimuTZ849IZ_ie8-xK8KU",
  authDomain: "fir-app-c0eba.firebaseapp.com",
  databaseURL: "https://fir-app-c0eba-default-rtdb.firebaseio.com",
  projectId: "fir-app-c0eba",
  storageBucket: "fir-app-c0eba.appspot.com",
  messagingSenderId: "86371327107",
  appId: "1:86371327107:web:2e6972e063a7ccb5230fb6",
  measurementId: "G-VQ4BDQ8ZK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;