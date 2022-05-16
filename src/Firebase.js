import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAG_ytB_fOwE9clsL-RoKIABQ_qlWK3of0",
    authDomain: "skn-blogs.firebaseapp.com",
    projectId: "skn-blogs",
    storageBucket: "skn-blogs.appspot.com",
    messagingSenderId: "22588867368",
    appId: "1:22588867368:web:0b693e4b01f588fa29061d"

};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

onAuthStateChanged(auth, user => {

    console.log(`User status changed: `, user);

});

export {db, auth};