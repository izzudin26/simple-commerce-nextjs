import Head from "next/head";
import Layout from "../../components/layout";
import { useState } from "react";
import Product from "../../components/product/product";
import Link from "next/link";

const Products = () => {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <Head>
        <title>Produk Menarik</title>
      </Head>
      <Layout>
        <main>
          <div className="flex flex-col p-5 w-full md:w-4/5 mx-auto">
            <div className="bg-clip-text text-transparent font-semibold text-xl bg-gradient-to-t from-blue-600 to-black">Produk Terbaru</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-5 mt-5">
              {items.map((item, i) => (
                <Product key={i} name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" price={12000} />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Products;
