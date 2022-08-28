import Link from "next/link";

const Product = ({ name, price, id, storename, storeimage, thumbnail }) => {
  const parsePrice = price.toLocaleString();
  const nameProduct = name.substr(0, 40);

  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col rounded-lg ring-1 h-72 w-full mx-auto duration-500 ring-gray-300 hover:ring-blue-600 hover:ring-2">
        <img className=" rounded-t-lg h-56 object-center object-cover" src={thumbnail ?? "/assets/coffe.jpg"}></img>
        <div className="p-3 flex flex-col space-y-2">
          <p className="break-words">{nameProduct}{nameProduct.length == 40 && '...'}</p>
          <div className="flex flex-row space-x-2 items-center">
            <img src={storeimage ?? "/assets/placeholder.png"} className="w-8 h-8 rounded-full object-center object-cover"></img>
            <p className="text-sm">{storename}</p>
          </div>
          <p className="text-sm font-semibold">Rp. {parsePrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
