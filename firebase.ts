import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAfFeXscVt3CAZmabKDjwFUwTlGvQqLB9E",
    authDomain: "judah-pdf-translator.firebaseapp.com",
    projectId: "judah-pdf-translator",
    storageBucket: "judah-pdf-translator.firebasestorage.app",
    messagingSenderId: "508276006902",
    appId: "1:508276006902:web:1902433218071d49a2f1d7",
    measurementId: "G-3Y25CCJL3W"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };