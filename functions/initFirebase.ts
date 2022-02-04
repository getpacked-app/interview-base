import { getApps, initializeApp } from "firebase/app"
import { initializeFirestore } from "firebase/firestore"

// Global, so firebase gets initialized serverside and clientside
if (!getApps().length) {
  initializeApp({
    apiKey: "AIzaSyCKxXDUtlyUP1BFzjpirrTsR78RhR84804",
    authDomain: "getpacked-interview.firebaseapp.com",
    projectId: "getpacked-interview",
    storageBucket: "getpacked-interview.appspot.com",
    messagingSenderId: "215864625849",
    appId: "1:215864625849:web:a5d06fab839d50cf4b6968",
  })

  const firestoreSettings = { ignoreUndefinedProperties: true }
  initializeFirestore(getApps()[0], firestoreSettings)
}
