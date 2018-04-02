import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC2poJ9CcMQQ5VyFFsiDvzG_8suWaq-5tE",
    authDomain: "novoauthexpenses.firebaseapp.com",
    databaseURL: "https://novoauthexpenses.firebaseio.com",
    projectId: "novoauthexpenses",
    storageBucket: "novoauthexpenses.appspot.com",
    messagingSenderId: "473843345133"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();


