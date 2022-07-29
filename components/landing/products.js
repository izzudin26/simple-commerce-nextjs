import Link from "next/link";
import { useState } from "react";

const Product = () => {
  const [dummy] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <div className="flex flex-col container mx-auto justify-center items-center p-5 space-y-3">
        <div className="flex flex-row justify-between items-end w-full">
          <div className="text-xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 text-left">Produk Terbaru</div>
          <Link href="/products">
            <div className="text-sm cursor-pointer lg:text-base font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 text-left">Tampilkan lebih banyak</div>
          </Link>
        </div>
        <div className="flex flex-row w-full overflow-x-scroll space-x-5 p-2 lg:justify-around">
          {dummy.map((_) => (
            <div className="flex-none w-52 h-72 rounded-lg shadow duration-500 hover:shadow-lg">
              <img src="/assets/coffe.jpg" className="rounded-t-lg object-center object-cover w-full h-44"></img>
              <div className="p-2 flex flex-col space-y-2 justify-between">
                <p className="font-medium text-clip text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="font-semibold">Rp. 100.000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
