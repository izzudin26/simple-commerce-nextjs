import SellerLayout from "../../../components/seller/layout";
import { getProduct, uploadImage, updateProduct } from "../../../service/product"
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../service/firebase"
import {useRouter} from "next/router"

const ProductId = () => {
  const router = useRouter()
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [imagePath, setImagePath] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [uid, setuid] = useState("")

  const changeImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0]
    console.log(file)
    const url = await uploadImage(file)
    setImagePath([...imagePath, url])
  }

  const fetchData = async () => {
    const {id} = router.query
    const snapshot = await getProduct(id)
    const {name, price, imagePath, description} = snapshot.data()
    setProductName(name)
    setPrice(price)
    setImagePath(imagePath)
    setDescription(description)
  }

  const changeSelectedImage = index => {
    setSelectedImage(index)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user){
        // router.replace("/")
        // window.location.reload()
      window.location.href = "/"
      }
      setuid(user.uid)
    })
    fetchData()
  }, [])

  const submit = async () => {
    const {id} = router.query
    const data = {
      name: productName,
      description,
      price,
      imagePath,
    }
    await updateProduct(id, data)
    alert("Berhasil update")
  }

  return (
    <>
      <SellerLayout>
        <main>
          <div className="p-5 flex flex-col mt-10 lg:flex-row w-full space-x-0 lg:space-x-3 mx-auto my-auto items-center lg:items-start justify-center">
            <div className="flex flex-col space-y-2">
              <img src={selectedImage != null ? imagePath[selectedImage] : '/assets/placeholder_img.png'} className="w-96 h-96 rounded-lg object-cover object-center"></img>
              <div className="flex flex-row space-x-2 overflow-x-auto items-center w-96 py-2 px-1">
                {imagePath.length > 0 && imagePath.map((image, i) => (
                  <button onClick={() => changeSelectedImage(i)} key={i}>
                    <img src={image} className="flex-none w-16 hover:ring-blue-500 hover:ring-2 duration-300 rounded-lg h-16"></img>
                  </button>
                ))}
                <label for="upload" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 my-auto text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
                  </svg>
                  <input onChange={changeImage} type={'file'} accept="image/*" className="hidden" id="upload" name="upload"></input>
                </label>

              </div>
            </div>
            <div className="flex flex-col w-96 space-y-3 justify-between">
              <input type={'text'} value={productName} className="p-1 text-xl ring-2 ring-gray-300 w-full rounded focus:outline-none focus:ring-blue-600 duration-500" placeholder="Nama Produk" onChange={(e) => setProductName(e.target.value)} />
              <textarea placeholder="Deskripsi Produk" value={description} rows={10} className="rounded ring-2 ring-gray-300 focus:ring-blue-500 duration-500 focus:outline-none p-1" onChange={(e) => setDescription(e.target.value)}></textarea>
              <div>
                <input type={'number'} className="p-1 text-xl ring-2 ring-gray-300 w-full rounded focus:outline-none focus:ring-blue-600 duration-500" placeholder="Harga" onChange={(e) => setPrice(e.target.value)} value={price} />
                <button onClick={submit} className="w-full rounded-lg mt-3 bg-blue-600 text-white py-3">Simpan</button>
              </div>
            </div>
          </div>
        </main>
      </SellerLayout>
    </>
  );
};

export default ProductId;
