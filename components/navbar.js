import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const switchNav = () => {
    setToggleNav(!toggleNav);
    console.log(toggleNav);
  };
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
          <Link href="/cart">
            <span className="text-gray-500 font-semibold  text-sm cursor-pointer w-full">Tentang Kami</span>
          </Link>
          <Link href="/registration">
            <span className="text-gray-500 font-semibold text-sm w-full">Daftar</span>
          </Link>
          <Link href="/login">
            <span className="text-white bg-blue-600 px-5 py-2 rounded-lg text-sm w-24 text-center cursor-pointer">Masuk</span>
          </Link>
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
            <Link href="/cart">
              <span className="text-gray-500 font-semibold cursor-pointer">Tentang Kami</span>
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <Link href="/registration">
              <button className="text-gray-500 font-semibold">Daftar</button>
            </Link>
            <Link href="/login">
              <button className="text-white bg-blue-600 px-5 py-2 rounded-lg">Masuk</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
