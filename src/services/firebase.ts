import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx-x_ZpWYm_xxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxx2-2xxxxxxxxx.firebaseapp.com",
  projectId: "pxxxxxxxxxxx-2d208",
  appId: "1:xxxxxxxxxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxx16",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);