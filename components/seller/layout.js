import SellerNavbar from "./navbar"

const SellerLayout = ({children}) => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <SellerNavbar/>
            <main className="w-full">{children}</main>
        </div>
    )
}

export default SellerLayout