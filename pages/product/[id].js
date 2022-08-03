import Head from "next/head";
import Layout from "../../components/layout";
import { useState } from "react";

const ProductId = () => {
  const [imgState] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      <Head>
        <title>Product Name</title>
      </Head>
      <Layout>
        <main>
          <div className="p-5 flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 mx-auto items-center lg:items-start justify-center">
            <div className="flex flex-col space-y-2">
              <img src="/assets/coffe.jpg" className="w-96 h-96 rounded-lg object-cover object-center"></img>
              <div className="flex flex-row space-x-2 overflow-x-auto items-center w-96 py-2 px-1">
                {imgState.map((image, i) => (
                  <img src="/assets/coffe.jpg" className="flex-none w-16 hover:ring-blue-500 hover:ring-2 duration-300 rounded-lg h-16" key={i}></img>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-96 space-y-2 justify-between">
              <div>
                <p className="font-semibold text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
              </div>
              <div>
                <button className="w-full rounded-lg bg-blue-600 text-white py-3">+ Keranjang</button>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ProductId;
