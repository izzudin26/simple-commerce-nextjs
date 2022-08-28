import Link from "next/link";
import { useState } from "react";
import {logout} from "../../service/auth"
import {useRouter} from "next/router"

const SellerNavbar = () => {
  const router= useRouter()
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const switchNav = () => {
    setToggleNavbar(!toggleNavbar);
  };

  const doLogout = async () => {
    await logout()
    router.replace("/")
  }

  return (
    <>
      {/* Navbar Mobile */}
      <div className="w-full flex lg:hidden flex-row space-x-5 p-5 items-center justify-between shadow">
        <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-green-500 to-blue-500 font-semibold">Store Name</div>
        <button onClick={switchNav} className="p-1 py-2 rounded-md hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={`${toggleNavbar ? " w-64  p-5 " : "w-0 p-0"} overflow-hidden flex lg:hidden flex-col transform transition-width duration-500 fixed right-0 top-0 h-screen bg-blue-600 space-y-5 z-30 rounded-l-sm items-start`}>
        <button onClick={switchNav}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <Link href="/seller">
          <button className="flex w-full text-white text-lg">Produk</button>
        </Link>
        <Link href="/seller/profil">
          <button className="flex w-full text-white text-lg">Profil</button>
        </Link>
        <button onClick={doLogout} className="flex w-full text-white text-lg">Logout</button>

      </div>
      {/* End Navbar Mobile */}
      {/* Navbar Desktop */}
      <div className="w-64 hidden lg:flex flex-col bg-blue-600 h-screen top-0 left-0 p-5 space-y-5">
        <div className="text-3xl font-semibold mx-auto text-white">Store Name</div>
        <Link href="/seller">
          <button className="flex w-full text-white text-lg">Produk</button>
        </Link>
        <Link href="/seller/profil">
          <button className="flex w-full text-white text-lg">Profil</button>
        </Link>
        <button onClick={doLogout} className="flex w-full text-white text-lg">Logout</button>

      </div>
      {/* End Navbar Desktop */}
    </>
  );
};

export default SellerNavbar;
