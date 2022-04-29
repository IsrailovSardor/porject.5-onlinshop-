import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCmtaN7-4a0ye3rDSmhRdz9x2DQuxFDfI0",
  authDomain: "shopauth-a86a7.firebaseapp.com",
  projectId: "shopauth-a86a7",
  storageBucket: "shopauth-a86a7.appspot.com",
  messagingSenderId: "996975644163",
  appId: "1:996975644163:web:9b49f9b1dceebb2717c836",
  measurementId: "G-NDH7YFSQ64"
};

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)

export const auth = getAuth()
export const firestore = getFirestore(firebaseConfig)
console.log(firestore);