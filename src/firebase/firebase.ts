import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth'
import { getStorage }  from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1qBPi0SsHbiisB_mfOQGPcUtDc6QlF_4",
    authDomain: "vcpmc-4caef.firebaseapp.com",
    projectId: "vcpmc-4caef",
    storageBucket: "vcpmc-4caef.appspot.com",
    messagingSenderId: "473829882072",
    appId: "1:473829882072:web:ad6d8f86043e6833d03fad",
    measurementId: "G-0H1ZZ526HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage
export default app