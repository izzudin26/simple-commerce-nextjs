import Head from "next/head";
import Layout from "../../components/layout";
import { useState } from "react";
import { getProduct } from "../../service/product"
import { getStore } from "../../service/store"

const ProductId = ({ name, images, description, whatsapp, storename }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  const redirectWhatsapp = () => {
    const str = whatsapp.toString()
    let url
    if(str[0] == "0"){
      url = `62${str.slice(1)}`
    }else if(str[0] == "8"){
      url = `62${str}`
    }else{
      url = str
    }
    window.open(`http://wa.me/${url}`)
  }

  return (
    <>
      <Head>
        <title>{name} | {storename}</title>
      </Head>
      <Layout>
        <main>
          <div className="p-5 flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 mx-auto items-center lg:items-start justify-center">
            <div className="flex flex-col space-y-2">
              <img src={images[selectedImage]} className="w-96 h-96 rounded-lg object-cover object-center"></img>
              <div className="flex flex-row space-x-2 overflow-x-auto items-center w-96 py-2 px-1">
                {images.map((image, i) => (
                  <button onClick={() => setSelectedImage(i)} key={i}>
                    <img src={image ?? "/assets/placeholder_img.png"} className="flex-none w-16 hover:ring-blue-500 hover:ring-2 duration-300 rounded-lg h-16" ></img>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-96 space-y-3 justify-between">
              <div className="flex flex-col space-y-3">
                <p className="font-semibold text-xl">{name}</p>
                <p className="text-base">{description}</p>
              </div>
              <div>
                <button onClick={redirectWhatsapp} className="w-full rounded-lg bg-green-600 text-white py-3">Beli</button>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const snapshotProduct = await getProduct(params.id)
  const snapshotStore = await getStore(snapshotProduct.data().userid)
  const data = {
    name: snapshotProduct.data().name,
    images: snapshotProduct.data().imagePath,
    description: snapshotProduct.data().description,
    whatsapp: snapshotStore.data().number,
    storename: snapshotStore.data().storename
  }
  return {
    props: data
  }
}

export default ProductId;
