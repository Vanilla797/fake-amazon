import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBCbtu9V88e-zbrtBCSKOewlOs8LiEBrbc",
    authDomain: "clone-4a137.firebaseapp.com",
    projectId: "clone-4a137",
    storageBucket: "clone-4a137.appspot.com",
    messagingSenderId: "183351878666",
    appId: "1:183351878666:web:faec7f0f60f03775942bf3",
    measurementId: "G-S7TLLVV023"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  export { db, auth, provider }