import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collectionName, collectionQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, collectionName);

    if (collectionQuery) {
      ref = query(ref, orderBy("createdAt", "desc"), where(...collectionQuery));
    }

    const unsub = onSnapshot(
      ref,
      (refSnapshot) => {
        let results = [];
        refSnapshot.forEach((doc) =>
          results.push({ id: doc.id, ...doc.data() })
        );
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data, see useCollection");
      }
    );

    return () => unsub();
  }, [collectionName]);

  return { documents, error };
};
