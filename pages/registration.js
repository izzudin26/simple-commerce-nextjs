import Head from "next/head";
import { useEffect, useState } from "react";
import {auth} from "../service/firebase"
import {onAuthStateChanged} from "firebase/auth"
import {useRouter} from "next/router"
import Layout from "../components/layout";
import {createOrUpdate, getStore} from "../service/store"

const Registration = () => {
  const router= useRouter()
  const [fullname, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [storeName, setStoreName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [userid, setUserid] = useState("")

  const doRegis = async (event) => {
    event.preventDefault()
    if(fullname == "" || gender == "" || address == "" || number == "" || storeName == ""){
      console.log({
        fullname,
        gender,
        address,
        number, 
        storeName
      })
      return alert("Mohon mengisi semua kolom")
    }
    await createOrUpdate({fullname, gender, address, email, number, storename: storeName, imagePath, userid})
    router.replace('/seller')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user){
        router.replace("/")
      }
      setEmail(user.email)
      setUserid(user.uid)
    })
  }, [])

  return (
    <Layout>
      <>
        <Head>
          <title>Registration</title>
        </Head>
        <main className="flex flex-col w-full min-h-screen items-center justify-center">
          <form onSubmit={doRegis} className="flex flex-col space-y-3 p-5 rounded-lg w-full md:w-2/4 lg:w-2/6">
            <h1 className="font-semibold text-2xl">Registration</h1>
            <div className="flex flex-col justify-center items-center relative">
              <img src="/assets/placeholder.png" className="w-60 h-60 rounded-full"></img>
              <label htmlFor="changeImage" className="absolute bottom-0 right-0 p-3 rounded-full bg-white ring-gray-300 ring-2">
                <img src="/assets/camera.svg" className="w-6 h-6"></img>
                <input type="file" accept="image/*" name="changeImage" id="changeImage" className="hidden"></input>
              </label>
            </div>
            <div className="flex flex-col">
              <label>Nama Toko *</label>
              <input type="text" onChange={(e) => setStoreName(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Nama Toko"></input>
            </div>
            <div className="flex flex-col">
              <label>Nama Lengkap *</label>
              <input type="text" onChange={(e) => setFullName(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Nama Lengkap"></input>
            </div>
            <div className="flex flex-col">
              <label>Email Pengguna *</label>
              <input readOnly type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Nama Lengkap"></input>
            </div>
            <div className="flex flex-col">
              <label>Jenis Kelamin *</label>
              <select onChange={(e) => setGender(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none">
                <option value="">Pilih Jenis Kelamin</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Alamat *</label>
              <input type="text" onChange={(e) => setAddress(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Alamat"></input>
            </div>
            <div className="flex flex-col">
              <label>Nomor HP *</label>
              <input type="text" onChange={(e) => setNumber(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Nomor HP"></input>
            </div>
            <button type="submit" className="text-white bg-blue-600 rounded w-full py-2">DAFTAR</button>
          </form>
        </main>
      </>
    </Layout>
  );
};

export default Registration;
