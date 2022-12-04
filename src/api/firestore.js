import { collection, doc, getDoc, setDoc } from "firebase/firestore"; 

import { auth, db } from "./firebase";

export default DataStore = {
    createNewUserDoc: () => {
        // create user doc
        const docRef = DataStore.getUserDataDocRef();
        setDoc(docRef, {
            uid: auth.currentUser.uid
        });
    },

    getUserDataDocRef: () => {
        const collectionRef = collection(db, "userData");
        const docRef = doc(collectionRef, auth.currentUser.uid);
        return docRef;
    },

    Cards: {
        getCardCollectionRef: () => {
            let cardCollectionPath = "userData/" + auth.currentUser.uid + "/cards";
            const collectionRef = collection(db, cardCollectionPath);
            return collectionRef;
        },
        
        getCardDocRef: (cardId) => {
            const collectionRef = DataStore.Cards.getCardCollectionRef();
            const docRef = doc(collectionRef, cardId);
            return docRef;
        },

        getCardDoc: (cardId) => {
            const docRef = DataStore.Cards.getCardDocRef(cardId);
            return getDoc(docRef);
        },
        
        setCardDoc: ({ card, numCollected, numWanted }) => {
            const docRef = DataStore.Cards.getCardDocRef(card.id);
            setDoc(docRef, {
                card: card, 
                numCollected: numCollected, 
                numWanted: numWanted
            });
        }
    }
}




