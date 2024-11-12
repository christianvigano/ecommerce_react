// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importamos servicio de base de datos
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY /*"AIzaSyB5uUKndvt4p2DxaESd-puZ4xu7gCLJOZU"*/,
  authDomain: import.meta.env.VITE_AUTH /*"backverdevida.firebaseapp.com"*/,
  projectId: import.meta.env.VITE_PROJECTID /*"backverdevida"*/,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET /*"backverdevida.firebasestorage.app"*/,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID /*"248933101972"*/,
  appId: import.meta.env.VITE_APPID /*"1:248933101972:web:82a2eda1e7199f3f889f81"*/,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
