import SellerNavbar from "./navbar"

const SellerLayout = ({children}) => {
    return (
        <>
            <SellerNavbar/>
            <main>{children}</main>
        </>
    )
}

export default SellerLayout