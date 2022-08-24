import Link from "next/link"
import SellerLayout from "../../components/seller/layout"
import ProductSeller from "../../components/seller/productSeller";
import { useState } from "react";

export default () => {
    const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
                    <ProductSeller key={i} id={i} name="Lorem ipsum dollor amet" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" price={12000} />
                ))}
                </div>
            </div>
        </SellerLayout>
    )
}