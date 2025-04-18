import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = () => {
    return(<>
            <Navbar />
            <Outlet /> 
            <Footer />
        </>
    )
} 

export default Layout;