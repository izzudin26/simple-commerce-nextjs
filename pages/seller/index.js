import Link from "next/link"
import SellerLayout from "../../components/seller/layout"
import ProductSeller from "../../components/seller/productSeller";
import { getProductsByUser } from "../../service/product"
import { useEffect, useState } from "react";

export default () => {
    const [items, setItem] = useState([]);
    const fetchData = async () => {
        const uid = localStorage.getItem("uid")
        const snapshots = await getProductsByUser(uid)
        const snapshotData = snapshots.docs.map(s => {
            return {
                id: s.id,
                name: s.data().name,
                description: s.data().description,
                price: s.data().price,
                imagePath: s.data().imagePath
            }
        })
        setItem(snapshotData)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <SellerLayout>
            <div className="flex flex-col w-full h-screen p-10 overflow-scroll">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-xl font-semibold">Daftar Produk Anda</h1>
                    <Link href="/seller/product/add">
                        <div className="rounded-lg bg-blue-500 py-2 px-3 text-white cursor-pointer">+ Produk</div>
                    </Link>
                </div>
                <div className="mt-3 flex flex-col space-y-2">
                    {items.map((item, i) => (
                        <ProductSeller key={i} id={i} name={item.name} description={item.description} price={item.price} />
                    ))}
                </div>
            </div>
        </SellerLayout>
    )
}