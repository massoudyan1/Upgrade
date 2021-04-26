import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

console.log('Firebase UP')

const firebaseConfig = {
    apiKey: "AIzaSyA5Zoqz5Zim18mBm9L9lpwrM1qMGnPQNKE",
    authDomain: "upgrade-47108.firebaseapp.com",
    projectId: "upgrade-47108",
    storageBucket: "upgrade-47108.appspot.com",
    messagingSenderId: "1013623221779",
    appId: "1:1013623221779:web:455bb63b9bf0648de0d9e6"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
