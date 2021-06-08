import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgcEqsu1qo4pKQHNZDYuX6AD-AeUQbOLA",
  authDomain: "clone-e6dc4.firebaseapp.com",
  projectId: "clone-e6dc4",
  storageBucket: "clone-e6dc4.appspot.com",
  messagingSenderId: "774741216847",
  appId: "1:774741216847:web:6e727a1fda64b24356a43a",
  measurementId: "G-792NTPZQMR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize a database
export const db = firebaseApp.firestore();

export const auth = firebase.auth();
