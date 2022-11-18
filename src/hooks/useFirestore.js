import { useReducer, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };

    case "ADDED_DOCUMENT":
      return {
        ...state,
        isPending: false,
        document: action.payload,
        success: true,
      };

    case "DELETED_DOCUMENT":
      return { ...state, isPending: false, success: true, error: null };

    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //   collection ref
  const ref = collection(db, collectionName);

  //   only dispatching when !isCancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //   add a document
  const addDocument = async (d) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...d, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // deleting a document
  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      dispatch({ type: "DELETED_DOCUMENT" });
    } catch (error) {
      console.log("Error, see the useFirestore deleteDocument function");
      dispatch({ type: "ERROR", payload: "Delete Failed" });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
