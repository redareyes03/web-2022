import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCUPBmBOiDq0HjbK-EFVQxHJS9G5Z-DZyU",
    authDomain: "myapp-2022-md.firebaseapp.com",
    projectId: "myapp-2022-md",
    storageBucket: "myapp-2022-md.appspot.com",
    messagingSenderId: "901180842010",
    appId: "1:901180842010:web:5e4d838d03fb46926671a3"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);