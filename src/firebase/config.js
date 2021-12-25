import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoh0wir_clkRY8T6msdAiQKHuIOnhDsaI",
  authDomain: "thedojosite-dc8cd.firebaseapp.com",
  projectId: "thedojosite-dc8cd",
  storageBucket: "thedojosite-dc8cd.appspot.com",
  messagingSenderId: "991532969572",
  appId: "1:991532969572:web:1f0c002e975276844a3971",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
