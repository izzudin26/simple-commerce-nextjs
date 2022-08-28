import Link from "next/link";
import { useState } from "react";


const Product = ({ products }) => {
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
        <div className="flex flex-row w-full overflow-x-scroll space-x-5 p-2 lg:justify-around no-scrollbar">
          {products.map((product, i) => (
            <Link href={`/product/${product.id}`} key={i}>
              <div className="flex-none w-52 h-80 rounded-lg shadow duration-500 hover:shadow-lg">
                <img src={product.image[0]} className="rounded-t-lg object-center object-cover w-full h-44"></img>
                <div className="p-2 flex flex-col space-y-2 justify-between">
                  <p className="font-medium text-clip text-base">{product.name}</p>
                  <div className="flex flex-row space-x-2 items-center">
                    <img src={product.store.image ?? "/assets/placeholder.png"} className="w-8 h-8 rounded-full object-center object-cover"></img>
                    <p className="text-sm">{product.store.storename}</p>
                  </div>
                  <p className="font-semibold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
