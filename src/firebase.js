import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANVonI8A5eUsu_bk7mPAgIBH0xoNAwRX4",
  authDomain: "netflix-clone-ca517.firebaseapp.com",
  projectId: "netflix-clone-ca517",
  storageBucket: "netflix-clone-ca517.appspot.com",
  messagingSenderId: "406567169979",
  appId: "1:406567169979:web:4d022fd875314ce55ade9e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
