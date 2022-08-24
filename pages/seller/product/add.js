import SellerLayout from "../../../components/seller/layout";
import { useState } from "react";

const ProductId = () => {
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")

  const submit = () => {
    console.log(productName);
    console.log(description);
  }

  const [imgState] = useState([]);
  return (
    <>
      <SellerLayout>
        <main>
          <div className="p-5 flex flex-col mt-10 lg:flex-row w-full space-x-0 lg:space-x-3 mx-auto my-auto items-center lg:items-start justify-center">
            <div className="flex flex-col space-y-2">
              <img src="/assets/placeholder_img.png" className="w-96 h-96 rounded-lg object-cover object-center"></img>
              <div className="flex flex-row space-x-2 overflow-x-auto items-center w-96 py-2 px-1">
                {imgState.map((image, i) => (
                  <img src="/assets/coffe.jpg" className="flex-none w-16 hover:ring-blue-500 hover:ring-2 duration-300 rounded-lg h-16" key={i}></img>
                ))}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 my-auto text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
              </svg>
              </div>
            </div>
            <div className="flex flex-col w-96 space-y-3 justify-between">
                <input type={'text'} className="p-1 text-xl ring-2 ring-gray-300 w-full rounded focus:outline-none focus:ring-blue-600 duration-500" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)}/>
                <textarea rows={10} className="rounded ring-2 ring-gray-300 focus:ring-blue-500 duration-500 focus:outline-none p-1" onChange={(e) => setDescription(e.target.value)}></textarea>
                <div>
                <button onClick={submit} className="w-full rounded-lg bg-blue-600 text-white py-3">Simpan</button>
              </div>
            </div>
          </div>
        </main>
      </SellerLayout>
    </>
  );
};

export default ProductId;
