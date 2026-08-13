import AppRoutes from "./routes/AppRoutes";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./components/styles/theme.css";
import "./components/styles/layout.css";
import "./components/styles/typography.css";
import "./components/styles/buttons.css";
import "./components/styles/cards.css";
import "./components/styles/animations.css";
import "./components/styles/utilities.css";

function App() {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
            offset: 120,
        });

    
    }, []);

    return (
        <>

            <AppRoutes />
        </>
    );
}

export default App;