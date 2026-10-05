import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8B2fY6-s0yHBR3zl-3y8pauxrsuLS4uA",
    authDomain: "storage-deletethis-8bdab.firebaseapp.com",
    projectId: "storage-deletethis-8bdab",
    storageBucket: "storage-deletethis-8bdab.appspot.com",
    messagingSenderId: "690047806954",
    appId: "1:690047806954:web:3260ed33ae08c03c671693"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)

export {
    auth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    database,
    ref, set
};