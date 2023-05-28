import { doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"

export interface updateDocumentProps {
    documentName: string,
    id: any,
    data: any
}

export const updateDocumentConfig = async ({documentName, id, data}: updateDocumentProps) => {
    const docRef = doc(db, documentName, `${id}`)
    try {
        await updateDoc(docRef, data);
        return true
    } catch(err) {
        console.log(err);
        return false
    }
}

