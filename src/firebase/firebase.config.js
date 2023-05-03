// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBVkVa8PcuXoBnnLxRCu7PE15W4YjhAQ1k",
  authDomain: "recipe-client.firebaseapp.com",
  projectId: "recipe-client",
  storageBucket: "recipe-client.appspot.com",
  messagingSenderId: "791580926749",
  appId: "1:791580926749:web:1d467acd04f3889583b7f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
