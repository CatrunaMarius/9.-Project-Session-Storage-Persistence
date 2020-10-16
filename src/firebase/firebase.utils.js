import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcsf6Vi76rmsNdDTxdaCE62H60rcK85uw",
  authDomain: "crwn-db-17f11.firebaseapp.com",
  databaseURL: "https://crwn-db-17f11.firebaseio.com",
  projectId: "crwn-db-17f11",
  storageBucket: "crwn-db-17f11.appspot.com",
  messagingSenderId: "700159832264",
  appId: "1:700159832264:web:c2e5173caeefb87fd7f5fd",
  measurementId: "G-9MG0295FZB"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//  setare autetificare utiliti cu Google
const provider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomParameters({ prompt: 'select_accont' });
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGoogle = () => firebase.auth().signInWithRedirect(provider);
// firebase.auth().signInWithPopup(provider)
// .then(function(result) {
//   // This gives you a Google Access Token.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//  });


export default firebase;