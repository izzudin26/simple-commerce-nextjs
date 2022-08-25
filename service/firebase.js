import * as Firebase from 'Firebase/app';
import {getAuth} from 'Firebase/auth';
import {getFirestore} from "firebase/firestore"

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}
// if a Firebase instance doesn't exist, create one
if (!Firebase.getAppslength) {
  Firebase.initializeApp(FirebaseCredentials)
}
export const auth = getAuth()
export const db = getFirestore()
export default Firebase;