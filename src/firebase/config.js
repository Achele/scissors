import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  connectAuthEmulator,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdJy3TH0HLpbjGFTOdEKAu2fu0fDuZ75s",
  authDomain: "shortly-21c95.firebaseapp.com",
  projectId: "shortly-21c95",
  storageBucket: "shortly-21c95.appspot.com",
  messagingSenderId: "888348970825",
  appId: "1:888348970825:web:71bfe0e34f409acc6a1498",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// const firebaseStorage = getStorage();

// if (import.meta.env.MODE === "development") {
//   connectFirestoreEmulator(db, "localhost", 8080);
//   connectAuthEmulator(auth, "http://localhost:9099");
// }
// console.log("PROCESS", import.meta.env.MODE);

// app.firebaseDB.FieldValue.serverTimestamp

export default app;

// export { app, firebaseStorage, firebaseDb, firebaseAuth };
