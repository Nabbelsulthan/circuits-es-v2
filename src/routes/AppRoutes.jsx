import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ControlPanels from "../components/sections/Solutions/ControlPanels/ControlPanels";
import PLCAutomation from "../components/sections/Solutions/PLCAutomation/PLCAutomation";
import Quote from "../components/sections/Quote/Quote";
import ThankYou from "../components/sections/ThankYou/ThankYou";
import Products from "../components/sections/Products/Products";
import Services from "../components/sections/Services/Services";
import Projects from "../components/sections/Projects/Projects";
import ProjectGallery from "../components/sections/Projects/ProjectGallery";
import CustomerPortal from "../components/portal/CustomerPortal";
import Contact from "../components/sections/Contact/Contact";
import CESConnect from "../components/sections/CESConnect/CESConnect";
import CustomerProjects from "../components/sections/CESConnect/CustomerProjects";
import DispatchStatus from "../components/sections/CESConnect/DispatchStatus";
import ProjectDocuments from "../components/sections/CESConnect/ProjectDocuments";
// import MCCPanel from "../components/sections/Products/MCCPanel/MCCPanel";




const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />

                <Route
                    path="/solutions/lt-panels"
                    element={<ControlPanels />}
                />

                <Route
                    path="/solutions/plc"
                    element={<PLCAutomation />}
                />

                <Route
                    path="/quote"
                    element={<Quote />}
                />


                <Route
                    path="/thank-you"
                    element={<ThankYou />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />


                {/* <Route
                    path="/products/mcc-panels"
                    element={<MCCPanel />}
                /> */}

                <Route
                    path="/services"
                    element={<Services />}
                />


                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/projects/:projectId/gallery"
                    element={<ProjectGallery />}
                />

                <Route
                    path="/portal"
                    element={<CustomerPortal />} />

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                <Route

                    path="/ces-connect"
                    element={<CESConnect />}

                />


                <Route

                    path="/customer-projects"
                    element={<CustomerProjects />}
                />



                <Route
                    path="/dispatch-status"
                    element={<DispatchStatus />}
                />


                <Route
                    path="/project/:id"
                    element={<ProjectDocuments />}
                />



            </Route>
        </Routes>
    );
};

export default AppRoutes;

