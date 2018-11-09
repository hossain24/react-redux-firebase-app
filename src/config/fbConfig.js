import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDFz11cF3k-1l9fRH1HIJpA2uwODxh-yWE",
  authDomain: "hill-track-11d1d.firebaseapp.com",
  databaseURL: "https://hill-track-11d1d.firebaseio.com",
  projectId: "hill-track-11d1d",
  storageBucket: "hill-track-11d1d.appspot.com",
  messagingSenderId: "1048459968019"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
