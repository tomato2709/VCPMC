import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./firebase"

export function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
    return signOut(auth)
}