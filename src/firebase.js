import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaCNY8UFnDYJqIDhl271Vt_HxqH8csFRM",
  authDomain: "fb-clone-cb429.firebaseapp.com",
  projectId: "fb-clone-cb429",
  storageBucket: "fb-clone-cb429.appspot.com",
  messagingSenderId: "594495648924",
  appId: "1:594495648924:web:6a3a4ab81c54c63af92959",
  measurementId: "G-16D797FGFM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
