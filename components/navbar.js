import Link from "next/link";
import { useState, useEffect } from "react";
import {loginGoogle} from "../service/auth"
import {useRouter} from "next/router"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../service/firebase"


const Navbar = () => {
  const router = useRouter()
  const [toggleNav, setToggleNav] = useState(false);
  const [user, setUser] = useState(null)
  const switchNav = () => {
    setToggleNav(!toggleNav);
    console.log(toggleNav);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])


  const doLogin = async () => {
    if(user){
      // router.push("/seller")
      window.location.href = "/seller"
    }
    const uid = await loginGoogle()
    localStorage.setItem("id", uid)
    // router.push("/registration")
    window.location.href = "/seller"
  }
  return (
    <>
      <div className="flex flex-col lg:hidden px-5 pt-3 w-full shadow">
        <div className="w-full flex-row space-x-5 items-center flex justify-between">
          <img src="/vercel.svg" className="h-6" />
          <button onClick={switchNav} className="p-1 py-2 rounded-md hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`${toggleNav == true ? "h-52" : "h-0"} w-full overflow-hidden flex flex-col space-y-2 transform transition-height duration-700 pt-3`}>
          <Link href="/">
            <span className="text-blue-600 font-semibold text-sm  cursor-pointer w-full">Beranda</span>
          </Link>
          <Link href="/products">
            <span className="text-gray-500 font-semibold text-sm  cursor-pointer w-full">Produk</span>
          </Link>
          
          <button onClick={doLogin} className="text-white bg-blue-600 px-5 py-2 rounded-lg">{user ? 'Buka Toko' : 'Mulai Berjualan'}</button>
        </div>
      </div>
      <div className="p-5 w-full flex-row space-x-5 items-center hidden lg:flex">
        <img src="/vercel.svg" className="h-8" />
        <div className="w-0.5 h-8 bg-gray-400"></div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row space-x-6">
            <Link href="/">
              <span className="text-blue-600 font-semibold cursor-pointer">Beranda</span>
            </Link>
            <Link href="/product">
              <span className="text-gray-500 font-semibold cursor-pointer">Produk</span>
            </Link>
           
          </div>
          <div className="flex flex-row items-center space-x-6">
              <button onClick={doLogin} className="text-white bg-blue-600 px-5 py-2 rounded-lg">{user ? 'Buka Toko' : 'Mulai Berjualan'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
