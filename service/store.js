import {db} from "./firebase"
import {getDoc, setDoc, doc, query, getDocs, where, collection} from "firebase/firestore"

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

export const getStore = async (userid) => await (await getDocs(query(collection(db, "store"), where("userid", "==", userid)))).docs[0]
