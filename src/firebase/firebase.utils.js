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
// provider.setCustomParameters({
//   'login_hint': 'user@example.com'
// });

// export const signInWithGoogle = () => {auth.signInWithPopup(provider);}

export const signInWithGoogle = () => firebase.auth().signInWithRedirect(provider);

// initialize database
  //preaia userul autetificat cu google si il trece in database
  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // daca nu exista vom crea acel utilizator in baza de date
    //verifica daca acel user exita
    if (!snapShot.exists){
      const { displyName, email } = userAuth;
      const createdAt = new Date();

      // creaza acel user daca nu exista
      try {
        await userRef.set({
          displyName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log('error create user ', error.message);
      }

    }
    
    return userRef;
  }

 


  // export const createUserProfileDocument = async (user, additionalData) => {
  //   if (!user) return;
  //   const userRef = firestore.doc(`users/${user.uid}`);
  //   const snapshot = await userRef.get();
  //   if (!snapshot.exists) {
  //     const { email, displayName, photoURL } = user;
  //     try {
  //       await userRef.set({
  //         displayName,
  //         email,
  //         photoURL,
  //         ...additionalData
  //       });
  //     } catch (error) {
  //       console.error("Error creating user document", error);
  //     }
  //   }
  //   return getUserDocument(user.uid);
  // };
  // const getUserDocument = async uid => {
  //   if (!uid) return null;
  //   try {
  //     const userDocument = await firestore.doc(`users/${uid}`).get();
  //     return {
  //       uid,
  //       ...userDocument.data()
  //     };
  //   } catch (error) {
  //     console.error("Error fetching user", error);
  //   }
  // };


export default firebase;