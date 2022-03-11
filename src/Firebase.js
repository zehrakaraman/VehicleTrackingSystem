import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPvru74iqJYYFDHUOKUxpRu0Dh8kU6gRU",
  authDomain: "optimal-benefit-343216.firebaseapp.com",
  projectId: "optimal-benefit-343216",
  storageBucket: "optimal-benefit-343216.appspot.com",
  messagingSenderId: "70965538611",
  appId: "1:70965538611:web:1431d8c854abd925e69846"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
