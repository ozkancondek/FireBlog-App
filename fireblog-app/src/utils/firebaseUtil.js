import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseUtil = firebase.initializeApp({
  apiKey: "AIzaSyCPMzCJkftfFP48Qm2W57uzGa8zC2NWc-0",
  authDomain: "fireblog-app-a30b1.firebaseapp.com",
  databaseURL: "https://fireblog-app-a30b1-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-a30b1",
  storageBucket: "fireblog-app-a30b1.appspot.com",
  messagingSenderId: "499729029862",
  appId: "1:499729029862:web:d5bc369d6c2d5dd9b77927",
});
export default firebaseUtil;

export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
