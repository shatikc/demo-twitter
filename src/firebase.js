// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsvIOGbMaNoKpFAzYhriCqwenVc_jShCU",
  authDomain: "fir-twitter-13e84.firebaseapp.com",
  projectId: "fir-twitter-13e84",
  storageBucket: "fir-twitter-13e84.appspot.com",
  messagingSenderId: "713226427857",
  appId: "1:713226427857:web:a9103aac7e7307799c54f0",
  measurementId: "G-JMSCP53ZC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);