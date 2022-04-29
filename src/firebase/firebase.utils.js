import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAHdjNLAkN2T_1UYV7c4xhi_KbWt-SUNcw',
  authDomain: 'the-wired-ab1bc.firebaseapp.com',
  projectId: 'the-wired-ab1bc',
  storageBucket: 'the-wired-ab1bc.appspot.com',
  messagingSenderId: '503643825051',
  appId: '1:503643825051:web:4e3edcbd993dcf8b1f773e',
  measurementId: 'G-4HSN0RRL49',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
