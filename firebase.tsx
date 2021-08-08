import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAXxzFhJVDS1s9W1Ut40qAmRQXa_U29p1Q",
  authDomain: "birthdayapp-c2f6e.firebaseapp.com",
  projectId: "birthdayapp-c2f6e",
  storageBucket: "birthdayapp-c2f6e.appspot.com",
  messagingSenderId: "280017316093",
  appId: "1:280017316093:web:8546bbb908e49bb047b694",
  measurementId: "G-CF7ZKTQX8J",
};

// if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
// }

export default firebase;
