import Layout from "../components/layout";
import Head from "next/head";
import { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  return (
    <Layout>
      <Head>
        <title>Keranjang</title>
      </Head>
      <main>
        <>
          <div className="py-5 space-y-5 w-full px-5 justify-center flex flex-col md:w-4/5 lg:w-1/2 mx-auto">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to to-blue-500 text-2xl font-semibold">Keranjang</div>
            {items.map((item, i) => (
              <div key={i} className="flex flex-row space-x-2 p-3 ring-gray-300 duration-500 hover:ring-blue-500 ring-1 hover:ring-2 rounded-lg my-2">
                <img src="/assets/coffe.jpg" className="w-24 h-24 rounded-lg object-cover object-center"></img>
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                  <p className="text-sm font-semibold">Rp. 12.000</p>
                  <div className="justify-center space-x-2 items-center">
                    <button className="my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <input type="number" min={1} value={1} className="w-16 text-center text-sm focus:outline-none" />
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-row">
                <button className="bg-gradient-to-t w-full text-center from-green-500 to-blue-500 rounded-lg text-transparent bg-clip-text text-xl font-semibold">Checkout</button>
            </div>
          </div>
        </>
      </main>
    </Layout>
  );
};

export default Cart;
