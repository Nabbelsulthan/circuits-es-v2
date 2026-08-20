// import AppRoutes from "./routes/AppRoutes";

// import { useEffect ,useState} from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import "./components/styles/theme.css";
// import "./components/styles/layout.css";
// import "./components/styles/typography.css";
// import "./components/styles/buttons.css";
// import "./components/styles/cards.css";
// import "./components/styles/animations.css";
// import "./components/styles/utilities.css";

// import IndependenceSplash from "./components/effects/IndependenceSplash/IndependenceSplash";

// function App() {

//     useEffect(() => {
//         AOS.init({
//             duration: 900,
//             easing: "ease-out-cubic",
//             once: false,
//             offset: 120,
//         });


//     }, []);

//     return (
//         <>

//             <AppRoutes />
//         </>
//     );
// }

// export default App;



import AppRoutes from "./routes/AppRoutes";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./components/styles/theme.css";
import "./components/styles/layout.css";
import "./components/styles/typography.css";
import "./components/styles/buttons.css";
import "./components/styles/cards.css";
import "./components/styles/animations.css";
import "./components/styles/utilities.css";

// import IndependenceSplash
//     from "./components/effects/IndependenceSplash/IndependenceSplash";

import OnamSplash from "./components/effects/IndependenceSplash/OnamSplash";


function App() {

    const [showSplash, setShowSplash] = useState(true);


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

            {/* =================================================
                ONAM  SPLASH
            ================================================= */}

            {showSplash && (

                <OnamSplash
                    onComplete={() => setShowSplash(false)}
                />

            )}


            {/* =================================================
                MAIN WEBSITE
            ================================================= */}

            <div
                className={
                    showSplash
                        ? "website-under-splash"
                        : ""
                }
            >

                <AppRoutes />

            </div>

        </>
    );
}


export default App;