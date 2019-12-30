import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCtqQ13xDO42E-8zUmu6CUFHuTGBSFnE9k",
  authDomain: "crwn-db-12b9a.firebaseapp.com",
  databaseURL: "https://crwn-db-12b9a.firebaseio.com",
  projectId: "crwn-db-12b9a",
  storageBucket: "crwn-db-12b9a.appspot.com",
  messagingSenderId: "725983122022",
  appId: "1:725983122022:web:7adb5b22d63f966aa193a7",
  measurementId: "G-LEL13EC8KT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
