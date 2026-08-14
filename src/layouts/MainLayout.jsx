import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer/Footer";
import FloatingWhatsApp from "../components/layout/FloatingWhatsApp/FloatingWhatsApp";
import ScrollToTop from "../components/layout/ScrollToTop/ScrollToTop";
import CESConnectFloat from "../components/layout/CESConnectFloat/CESConnectFloat";




const MainLayout = () => {
    return (
        <>
            <Navbar />
            
            <ScrollToTop />


            <main>
                <Outlet />
            </main>

            <FloatingWhatsApp />

            <CESConnectFloat />

            <Footer />
        </>
    );
};

export default MainLayout;
