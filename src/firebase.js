import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAGRlH4OZ_MhE7gifiOBAzwRbEXiBZzmgQ",
    authDomain: "unichat-61db1.firebaseapp.com",
    projectId: "unichat-61db1",
    storageBucket: "unichat-61db1.appspot.com",
    messagingSenderId: "321449704047",
    appId: "1:321449704047:web:67725ed19067f7bf52eb9a",
  })
  .auth();
