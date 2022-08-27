import Link from "next/link"

const ProductSeller = ({ name, id, description, price , thumbnail}) => {
    return (
        <div className="flex flex-row rounded-lg ring-1 ring-gray-400 duration-500 hover:ring-2 hover:ring-blue-500 hover:shadow-md items-center space-x-2">
            <img src={thumbnail ?? "/assets/coffe.jpg"} className="w-24 h-24 object-cover rounded-l-lg"></img>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-lg font-medium">{name}</h1>
                    <p className="w-full">Rp.{price}</p>
                    <div className="w-full flex flex-row lg:hidden">
                        <button className="w-full text-green-500">Edit</button>
                        <button className="w-full text-red-500">Delete</button>
                    </div>
                </div>
                <div className=" lg:flex flex-row hidden space-x-5 p-3">
                    <Link href={`/seller/product/${id}`}>
                        <button className="w-full text-green-500">Edit</button>
                    </Link>
                    <button className="w-full text-red-500">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ProductSeller