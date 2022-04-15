// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9lj_skJd3HucUL_8ESswoJ6f056YGjtA",
    authDomain: "simple-firebase-auth-b505c.firebaseapp.com",
    projectId: "simple-firebase-auth-b505c",
    storageBucket: "simple-firebase-auth-b505c.appspot.com",
    messagingSenderId: "949482088258",
    appId: "1:949482088258:web:f482886cd6f27e585dcadb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;