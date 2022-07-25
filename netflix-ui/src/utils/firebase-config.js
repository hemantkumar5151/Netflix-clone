import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANThQChNm4ijvA2hsk2bXOpgXGbaydmD0",
  authDomain: "netflix-clone-b5248.firebaseapp.com",
  projectId: "netflix-clone-b5248",
  storageBucket: "netflix-clone-b5248.appspot.com",
  messagingSenderId: "1008615029821",
  appId: "1:1008615029821:web:9dc4dff8daecb848e6be54",
  measurementId: "G-SJC0QB10KW",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
