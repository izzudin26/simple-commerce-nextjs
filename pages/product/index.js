import Head from "next/head";
import Layout from "../../components/layout";
import { useState } from "react";
import Product from "../../components/product/product";
import Link from "next/link";
import { getProducts } from "../../service/product"
import { getStore } from "../../service/store"

const Products = ({ products }) => {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(products)
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
              {products.map((item, i) => (
                <Product key={i} storename={item.store.storename} thumbnail={item.image[0]} storeimage={item.store.image} id={item.id} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const snapshotProducts = await getProducts()
  const snapshotProductsWithOwner = Promise.all(snapshotProducts.docs.map(async (product) => {
    const store = await getStore(product.data().userid)
    const { storename, imagePath } = store.data()
    return {
      id: product.id,
      description: product.data().description,
      name: product.data().name,
      price: product.data().price,
      image: product.data().imagePath,
      store: {
        storename, image: imagePath
      }
    }
  }))
  return {
    props: {
      products: await snapshotProductsWithOwner
    },
  }
}

export default Products;
