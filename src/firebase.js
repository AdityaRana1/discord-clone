import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQwwJFuABnqcrlmkA2WprB4BXZW9x7y9I",
  authDomain: "discord-clone-570fc.firebaseapp.com",
  projectId: "discord-clone-570fc",
  storageBucket: "discord-clone-570fc.appspot.com",
  messagingSenderId: "59062401588",
  appId: "1:59062401588:web:d73b4d0b58153e236ae861",
  measurementId: "G-JBWWRH8EZE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
