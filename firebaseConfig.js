// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importamos servicio de base de datos
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5uUKndvt4p2DxaESd-puZ4xu7gCLJOZU",
  authDomain: "backverdevida.firebaseapp.com",
  projectId: "backverdevida",
  storageBucket: "backverdevida.firebasestorage.app",
  messagingSenderId: "248933101972",
  appId: "1:248933101972:web:82a2eda1e7199f3f889f81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
