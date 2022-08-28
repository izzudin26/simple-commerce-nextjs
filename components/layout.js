import Navbar from "./navbar";
import Whatsapp from "./whatsapp";

const Layout =  ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* <Whatsapp /> */}
        </>
    )
};

export default Layout