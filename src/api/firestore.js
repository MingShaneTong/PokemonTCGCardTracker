import { collection, doc, setDoc } from "firebase/firestore"; 

import { auth, db } from "./firebase";

export function getUserDataDocRef() {
    const collectionRef = collection(db, "userData");
    const docRef = doc(collectionRef, auth.currentUser.uid);
    return docRef;
}

export function getCardCollectionRef() {
    let cardCollectionPath = "userData/" + auth.currentUser.uid + "/cards";
    const collectionRef = collection(db, cardCollectionPath);
    return collectionRef;
}


export function getCardDocRef(cardId) {
    const collectionRef = getCardCollectionRef();
    const docRef = doc(collectionRef, cardId);
    return docRef;
}

export function createNewUserDoc() {
    // create user doc
    const docRef = getUserDataDocRef();
    setDoc(docRef, {
        uid: auth.currentUser.uid
    });
}

export function setCardForUser({ card, numCollected, numWanted }) {
    // create user doc
    const docRef = getCardDocRef(card.id);
    setDoc(docRef, {
        card: card, 
        numCollected: numCollected, 
        numWanted: numWanted
    });
}