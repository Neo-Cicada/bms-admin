import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAydC1e68bcEqWPfXHCCPiWIAEe2ycJwxM",
  authDomain: "barangay-management-syst-330ea.firebaseapp.com",
  databaseURL: "https://barangay-management-syst-330ea-default-rtdb.firebaseio.com",
  projectId: "barangay-management-syst-330ea",
  storageBucket: "barangay-management-syst-330ea.appspot.com",
  messagingSenderId: "283264518807",
  appId: "1:283264518807:web:3fb23ee58ae891be9977d2"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
export const db =  getFirestore(app)
export default app;