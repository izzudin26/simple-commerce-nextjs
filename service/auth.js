import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {auth} from "./firebase"

export const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth, provider)
    return user.user.uid
}