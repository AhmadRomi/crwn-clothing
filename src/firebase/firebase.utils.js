import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAuDo4iXbgfOwJrd957aLfD2nn1tNIKFuI",
    authDomain: "crwn-clothing-a4203.firebaseapp.com",
    databaseURL: "https://crwn-clothing-a4203.firebaseio.com",
    projectId: "crwn-clothing-a4203",
    storageBucket: "crwn-clothing-a4203.appspot.com",
    messagingSenderId: "242298616512",
    appId: "1:242298616512:web:9b89ba75f0a5f8dd088b25",
    measurementId: "G-L88F7RG82L"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;