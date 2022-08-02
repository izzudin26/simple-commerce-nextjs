const Product = ({name, price, id}) => {

    const parsePrice = price.toLocaleString()
    const nameProduct = name.substr(0, 40)

    return (
        <div className="flex flex-col rounded-lg ring-1 h-64 w-full mx-auto duration-500 ring-gray-300 hover:ring-blue-600 hover:ring-2">
            <img className="w-full rounded-t-lg h-56 object-center object-cover" src="/assets/coffe.jpg"></img>
            <div className="p-3 flex flex-col space-y-2">
                <p className="text-xs">{nameProduct}...</p>
                <p className="text-sm font-semibold">Rp. {parsePrice}</p>

            </div>
        </div>
    )
}

export default Product