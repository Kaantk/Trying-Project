import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV0Yua8oc_lT-M4w36xOorMIud1vm0YIQ",
  authDomain: "trying-project-b0098.firebaseapp.com",
  projectId: "trying-project-b0098",
  storageBucket: "trying-project-b0098.appspot.com",
  messagingSenderId: "1035839962024",
  appId: "1:1035839962024:web:3e7f07339fa1d4a1bffb9d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);