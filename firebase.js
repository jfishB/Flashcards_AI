// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKzizTdcs5V0mHLuQhfPuuWvcUZ14J8NM",
  authDomain: "flashcardsaas-ddc6d.firebaseapp.com",
  projectId: "flashcardsaas-ddc6d",
  storageBucket: "flashcardsaas-ddc6d.appspot.com",
  messagingSenderId: "895059270332",
  appId: "1:895059270332:web:46183445cdf427d0444eb9",
  measurementId: "G-NE3E38NPRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== "undefined") {
  isSupported().then((yes) => {
    if(yes) {
      const analytics = getAnalytics(app)
    }
  })
}
const db = getFirestore(app);

export {db};