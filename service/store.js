import {db} from "./firebase"
import {getDoc, setDoc, doc} from "firebase/firestore"

export const createOrUpdate = async ({fullname, gender, address, email, number, storename, imagePath, userid} = {}) => {
    const storeData = {
        fullname,
        gender,
        address,
        email,
        number,
        storename,
        imagePath,
        userid
    }
    await setDoc(doc(db, "store", userid), storeData)
}

export const getStore = async (userid) => (await getDoc(doc(db, "store", userid)))
