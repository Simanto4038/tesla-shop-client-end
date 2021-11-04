import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfigaretion";


// Initialize Firebase

const initializeAuthentation = ()=>
{
    initializeApp(firebaseConfig);
}

export default initializeAuthentation;