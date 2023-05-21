import { doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"

export interface IUpdate {
    documentName: string,
    id: any,
    data: any
}

export const updateDocumentConfig = async ({documentName, id, data}: IUpdate) => {
    const docRef = doc(db, documentName, `${id}`)
    try {
        await updateDoc(docRef, data);
        return true
    } catch(err) {
        console.log(err);
        return false
    }
}

