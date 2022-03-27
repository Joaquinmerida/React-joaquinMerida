import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAp9pgZAsap8TmWeq_CjFPj_zOQk8lsfOo",
  authDomain: "farmashopreact.firebaseapp.com",
  projectId: "farmashopreact",
  storageBucket: "farmashopreact.appspot.com",
  messagingSenderId: "54357958480",
  appId: "1:54357958480:web:ac65d96e1a46ec7f755655"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

