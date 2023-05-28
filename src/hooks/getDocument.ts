import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface getDocumentProps {
    id: any,
    name: any
}

export async function getDocumentFireBase({id, name}: getDocumentProps) {
    const docRef = doc(db, name, id);
    try {
        const data = await getDoc(docRef)
        return data.data();
    } catch(err) {
        return false
    }
}