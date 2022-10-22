// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwBi8tYAl7M2FJPwkZyCCEcplaOCIbTYQ",
    authDomain: "travel-site-kccr.firebaseapp.com",
    projectId: "travel-site-kccr",
    storageBucket: "travel-site-kccr.appspot.com",
    messagingSenderId: "1088471419497",
    appId: "1:1088471419497:web:fcf246899302c22ca030f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app