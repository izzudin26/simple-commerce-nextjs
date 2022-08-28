import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const FirebaseCredentials = {
  apiKey: "AIzaSyChr4SBQoXJ0E25UGB-F7GgG9Jx06qYiKc",
  authDomain: "kkn-commerce.firebaseapp.com",
  projectId: "kkn-commerce",
  storageBucket: "kkn-commerce.appspot.com",
  messagingSenderId: "976216229653",
  appId: "1:976216229653:web:ac1f7ac4b1fc9ee0e34b1c",
  measurementId: "G-B50ZRKWBLS"
}
// if a Firebase instance doesn't exist, create one
if (!getApps().length) {
  initializeApp(FirebaseCredentials)
}
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()