import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const useSnapshot = (docName: string) => {
  const [ snapshot, setSnapshot ] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    const colRef = collection(db, docName)
    const unsub = onSnapshot(colRef, (snapshot: any) => {
        const items: any[] = []
        snapshot.docs.forEach((doc: any) => {
          items.push({...doc.data(), id: doc.id})
        })
        setSnapshot(items)
        setLoading(false)
    })
 
    return () => {
      unsub()
    };
}, [])

  return {
    snapshot,
    loading
  };
};