import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxHBdmfNDBadBFQOxyRTFMgAmOnHKYrYM",
    authDomain: "react-facebook-2f692.firebaseapp.com",
    projectId: "react-facebook-2f692",
    storageBucket: "react-facebook-2f692.appspot.com",
    messagingSenderId: "559114165812",
    appId: "1:559114165812:web:25b9627573672657297461"
  };

  // Use this to initialize the firebase app
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth, & provider.
    const db = firebaseapp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.FacebookAuthProvider();
    const storage = firebase.storage();

  export { db, auth, provider, storage }