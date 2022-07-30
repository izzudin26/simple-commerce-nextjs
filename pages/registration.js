import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
const Registration = () => {
  const [fullname, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Layout>
      <>
        <Head>
          <title>Registration</title>
        </Head>
        <main className="flex flex-col w-full min-h-screen items-center justify-center">
            <div className="flex flex-col space-y-3 p-5 rounded-lg w-full md:w-2/4 lg:w-2/6">
                <h1 className="font-semibold text-2xl">Registration</h1>
                <div className="flex flex-col">
                    <label>Nama Lengkap *</label>
                    <input type="text" onChange={(e) => setFullName(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Nama Lengkap"></input>
                </div>
                <div className="flex flex-col">
                    <label>Jenis Kelamin *</label>
                    <select onChange={(e) => setGender(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none">
                      <option value="male">Laki-laki</option>
                      <option value="female">Permpuan</option>
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
                <div className="flex flex-col">
                    <label>Email *</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Email"></input>
                </div>
                <div className="flex flex-col">
                    <label>Password *</label>
                    <input type="password" onChange={(e) => setPassowrd(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Password"></input>
                </div>
                <div className="flex flex-col">
                    <label>Konfirmasi Password *</label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Konfirmasi Password"></input>
                </div>
                <button className="text-white bg-blue-600 rounded w-full py-2">DAFTAR</button>
            </div>
        </main>
      </>
    </Layout>
  );
};

export default Registration;
