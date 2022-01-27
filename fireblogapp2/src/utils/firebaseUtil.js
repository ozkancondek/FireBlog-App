import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseUtil = firebase.initializeApp({
  apiKey: "AIzaSyAJSwA1FHp_GXwaX1q31yDFEONQbxpdBUY",
  authDomain: "fireblogapp2.firebaseapp.com",
  projectId: "fireblogapp2",
  storageBucket: "fireblogapp2.appspot.com",
  messagingSenderId: "619484551647",
  appId: "1:619484551647:web:bfa06454eba9a868e28c6a",
});

export default firebaseUtil;

//by the help of firebase we can use auth with -sign,create,login,unsubscribe-
export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
