import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth'
import { getStorage }  from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1qBPi0SsHbiisB_mfOQGPcUtDc6QlF_4",
    authDomain: "vcpmc-4caef.firebaseapp.com",
    databaseURL: "https://vcpmc-4caef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vcpmc-4caef",
    storageBucket: "vcpmc-4caef.appspot.com",
    messagingSenderId: "473829882072",
    appId: "1:473829882072:web:a1fdf926026809fed03fad",
    measurementId: "G-W3FVS4RQ4Y"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage
export default app