import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const firestore = firebase.firestore()
export const firestore = getFirestore(app);
// const firebaseStorage = getStorage();
firestore.useEmulator("localhost", 8080);
auth.useEmulator("http://localhost:9099");

export default app;

// export { app, firebaseStorage, firebaseDb, firebaseAuth };
