// import { useEffect, useState } from "react";

// import logo from "../../../assets/logos/CircuitES-logo.png";

// import "./IndependenceSplash.css";


// const IndependenceSplash = ({ onComplete }) => {

//     const [visible, setVisible] = useState(true);

//     const [closing, setClosing] = useState(false);


//     useEffect(() => {

//         /* =====================================================
//            AUGUST 15 CHECK
//         ===================================================== */

//         const today = new Date();

//         const isIndependenceDay =
//             today.getMonth() === 7 &&
//             today.getDate() === 15;


//         /*
//          * If it isn't August 15,
//          * immediately remove the splash.
//          */

//         if (!isIndependenceDay) {

//             setVisible(false);

//             onComplete?.();

//             return;

//         }


//         /* =====================================================
//            SPLASH DURATION
//         ===================================================== */

//         const closeTimer = setTimeout(() => {

//             setClosing(true);

//         }, 5400);


//         const completeTimer = setTimeout(() => {

//             setVisible(false);

//             onComplete?.();

//         }, 6000);


//         /* =====================================================
//            CLEANUP
//         ===================================================== */

//         return () => {

//             clearTimeout(closeTimer);

//             clearTimeout(completeTimer);

//         };

//     }, [onComplete]);


//     /* =========================================================
//        HIDE
//     ========================================================= */

//     if (!visible) {

//         return null;

//     }


//     return (

//         <div
//             className={`independence-splash ${
//                 closing ? "is-closing" : ""
//             }`}
//         >

//             {/* =================================================
//                 TRICOLOUR LIGHT
//             ================================================= */}

//             <div className="splash-tricolour">

//                 <span className="splash-saffron"></span>

//                 <span className="splash-white"></span>

//                 <span className="splash-green"></span>

//             </div>


//             {/* =================================================
//                 PARTICLES
//             ================================================= */}

//             <div className="splash-particles">

//                 <span>✦</span>

//                 <span>✦</span>

//                 <span>•</span>

//                 <span>✦</span>

//                 <span>•</span>

//                 <span>✦</span>

//             </div>


//             {/* =================================================
//                 MAIN CONTENT
//             ================================================= */}

//             <div className="splash-content">


//                 {/* =================================================
//                     ASHOKA CHAKRA
//                 ================================================= */}

//                 <div className="splash-chakra">

//                     <div className="chakra-ring">

//                         <div className="chakra-center"></div>

//                     </div>

//                 </div>


//                 {/* =================================================
//                     CIRCUITSES LOGO
//                 ================================================= */}

//                 <div className="splash-logo-wrap">

//                     <img
//                         src={logo}
//                         alt="Circuits Energy System"
//                         className="splash-logo"
//                     />

//                 </div>


//                 {/* =================================================
//                     79 YEARS
//                 ================================================= */}

//                 <div className="splash-divider">

//                     <span></span>

//                     <strong>
//                         79
//                     </strong>

//                     <span></span>

//                 </div>


//                 {/* =================================================
//                     KICKER
//                 ================================================= */}

//                 <p className="splash-kicker">
//                     CELEBRATING
//                 </p>


//                 {/* =================================================
//                     TITLE
//                 ================================================= */}

//                 <h1 className="splash-title">

//                     Independence

//                     <strong>
//                         Day
//                     </strong>

//                 </h1>


//                 {/* =================================================
//                     DATE
//                 ================================================= */}

//                 <p className="splash-date">
//                     15 AUGUST 2026
//                 </p>


//                 {/* =================================================
//                     MESSAGE
//                 ================================================= */}

//                 <p className="splash-message">
//                     Building India's industrial future.
//                 </p>


//                 {/* =================================================
//                     FLAG
//                 ================================================= */}

//                 <div className="splash-flag">

//                     <span></span>

//                     <span></span>

//                     <span></span>

//                 </div>

//             </div>


//             {/* =================================================
//                 BOTTOM BRAND
//             ================================================= */}

//             <div className="splash-bottom">

//                 <span>
//                     CIRCUITS ENERGY SYSTEM
//                 </span>

//                 <span className="splash-dot">
//                     •
//                 </span>

//                 <span>
//                     INDIA
//                 </span>

//             </div>

//         </div>

//     );

// };


// export default IndependenceSplash;



import { useEffect, useState } from "react";

import logo from "../../../assets/logos/CircuitES-logo.png";

import "./IndependenceSplash.css";


const IndependenceSplash = ({ onComplete }) => {

    const [visible, setVisible] = useState(true);

    const [closing, setClosing] = useState(false);


    useEffect(() => {

        /* =====================================================
           AUGUST 15 CHECK
        ===================================================== */

        const today = new Date();

        const isIndependenceDay =
            today.getMonth() === 7 &&
            today.getDate() === 15;


        /*
         * Show the splash only on August 15.
         */

        if (!isIndependenceDay) {

            setVisible(false);

            onComplete?.();

            return;

        }


        /* =====================================================
           SPLASH DURATION
        ===================================================== */

        const closeTimer = setTimeout(() => {

            setClosing(true);

        }, 5400);


        const completeTimer = setTimeout(() => {

            setVisible(false);

            onComplete?.();

        }, 6000);


        /* =====================================================
           CLEANUP
        ===================================================== */

        return () => {

            clearTimeout(closeTimer);

            clearTimeout(completeTimer);

        };

    }, [onComplete]);


    /* =========================================================
       HIDE
    ========================================================= */

    if (!visible) {

        return null;

    }


    return (

        <div
            className={`independence-splash ${closing ? "is-closing" : ""
                }`}
        >

            {/* =================================================
                TRICOLOUR LIGHT
            ================================================= */}

            <div className="splash-tricolour">

                <span className="splash-saffron"></span>

                <span className="splash-white"></span>

                <span className="splash-green"></span>

            </div>


            {/* =================================================
                PARTICLES
            ================================================= */}

            <div className="splash-particles">

                <span>✦</span>

                <span>✦</span>

                <span>•</span>

                <span>✦</span>

                <span>•</span>

                <span>✦</span>

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="splash-content">


                {/* =================================================
                    ASHOKA CHAKRA
                ================================================= */}

                <div className="splash-chakra">

                    <div className="chakra-ring">

                        <div className="chakra-center"></div>

                    </div>

                </div>


                {/* =================================================
                    CIRCUSES LOGO
                ================================================= */}

                <div className="splash-logo-wrap">

                    <img
                        src={logo}
                        alt="Circuits Energy System"
                        className="splash-logo"
                    />

                </div>


                {/* =================================================
                    79 YEARS
                ================================================= */}

                <div className="splash-divider">

                    <span></span>

                    <strong>
                        79
                    </strong>

                    <span></span>

                </div>


                {/* =================================================
                    KICKER
                ================================================= */}

                <p className="splash-kicker">

                    PROUDLY INDIAN • PROUDLY BUILDING

                </p>


                {/* =================================================
                    MAIN TITLE
                ================================================= */}

                <h1 className="splash-title">

                    Happy

                    <strong>
                        Independence Day
                    </strong>

                </h1>


                {/* =================================================
                    DATE
                ================================================= */}

                <p className="splash-date">

                    15 AUGUST 2026

                </p>


                {/* =================================================
                    PATRIOTIC QUOTE
                ================================================= */}

                <p className="splash-quote">

                    “Freedom is not merely a gift of the past,
                    but a responsibility to build a stronger
                    tomorrow.”

                </p>


                {/* =================================================
                    CES MESSAGE
                ================================================= */}

                <p className="splash-message">

                    Building India's industrial future, together.

                </p>


                {/* =================================================
                    MINI FLAG
                ================================================= */}

                <div className="splash-flag">

                    <span></span>

                    <span></span>

                    <span></span>

                </div>

            </div>


            {/* =================================================
                BOTTOM BRAND
            ================================================= */}

            <div className="splash-bottom">

                <span>
                    CIRCUITS ENERGY SYSTEM
                </span>

                <span className="splash-dot">
                    •
                </span>

                <span>
                    INDIA
                </span>

            </div>

        </div>

    );

};


export default IndependenceSplash;