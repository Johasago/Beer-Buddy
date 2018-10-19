import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOzBGp9DIaK4sCxGPGGpauB5r8gsY6mbE",
  authDomain: "beer-buddy-app.firebaseapp.com",
  databaseURL: "https://beer-buddy-app.firebaseio.com",
  projectId: "beer-buddy-app",
  storageBucket: "beer-buddy-app.appspot.com",
  messagingSenderId: "101577298438"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
