// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9PwOw_QC2Sj72AhcPvazXnu36JKvfC1Y",
    authDomain: "first-drop-shipping.firebaseapp.com",
    projectId: "first-drop-shipping",
    storageBucket: "first-drop-shipping.appspot.com",
    messagingSenderId: "962792557759",
    appId: "1:962792557759:web:029d8484fa5cd3d51eca0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;