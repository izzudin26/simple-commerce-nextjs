import { db, storage } from "./firebase"
import { setDoc, getDoc, addDoc, collection, getDocs, deleteDoc, query, where } from "firebase/firestore"
import {ref, getDownloadURL, uploadBytes} from "firebase/storage"

export const getProducts = async () => await getDocs(collection(db, "products"))

export const getProductsByUser = async (id) => {
    const q = query(collection(db, "products"), where("userid", "==", id))
    return getDocs(q)
}

export const getProduct = async (id) => await getDoc(doc(db, "products", id))

export const insertProduct = async ({name, imagePath, description, price, userid} = {}) => {
    const data = {name, imagePath, description, price, userid}
    await addDoc(collection(db, "products"), data)
}

export const deleteProduct = async (id) => await deleteDoc(doc(db, "products", id))

export const uploadImage = async (file) => {
    const timestamp = Date.now()
    const storageRef = ref(storage, `${timestamp}${file.name}`)
    await uploadBytes(storageRef, file)
    return getDownloadURL(storageRef)
}