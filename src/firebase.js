import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDucpSiinMp3X78sXceTZtlOLJJnC1aoPk",
  authDomain: "bt-bikinis.firebaseapp.com",
  projectId: "bt-bikinis",
  storageBucket: "bt-bikinis.appspot.com",
  messagingSenderId: "30678930802",
  appId: "1:30678930802:web:b25204986e8b4a883ab9eb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)