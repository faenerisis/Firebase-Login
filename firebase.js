/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_P9sOM4Sxi1Z4ds0QzFAornu2tj4gieE',
  authDomain: 'internf-auth.firebaseapp.com',
  projectId: 'internf-auth',
  storageBucket: 'internf-auth.appspot.com',
  messagingSenderId: '308106702462',
  appId: '1:308106702462:web:2f37269a01fa379ab1722f',
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
