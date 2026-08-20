import {
    useEffect,
    useState
} from "react";

import logo
    from "../../../assets/logos/CircuitES-logo.png";

import "./OnamSplash.css";


const OnamSplash = ({ onComplete }) => {

    const [visible, setVisible] = useState(true);

    const [closing, setClosing] = useState(false);


    useEffect(() => {

        /* =====================================================
           ONAM DATE CHECK
        ===================================================== */

        const today = new Date();

        /*
         * TEMPORARY DEVELOPMENT PREVIEW
         *
         * Keep true while testing.
         *
         * Change back to the production date check later.
         */

        // const isOnam = true;


        /*
         * PRODUCTION:
        */
        const isOnam =
            today.getMonth() === 7 &&
            today.getDate() === 26;



        /* =====================================================
           NOT ONAM
        ===================================================== */

        if (!isOnam) {

            setVisible(false);

            onComplete?.();

            return;

        }


        /* =====================================================
           SESSION STORAGE CHECK
        ===================================================== */

        const hasSeenOnam =
            sessionStorage.getItem(
                "ces_onam_splash_seen"
            );


        if (hasSeenOnam === "true") {

            setVisible(false);

            onComplete?.();

            return;

        }


        /* =====================================================
           SPLASH TIMERS
        ===================================================== */

        const closeTimer = setTimeout(() => {

            setClosing(true);

        }, 5400);


        const completeTimer = setTimeout(() => {

            /*
             * Mark as seen only after the splash
             * has successfully completed.
             */

            sessionStorage.setItem(
                "ces_onam_splash_seen",
                "true"
            );


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

    }, []);


    /* =========================================================
       HIDE SPLASH
    ========================================================= */

    if (!visible) {

        return null;

    }


    return (

        <div
            className={`onam-splash ${closing
                    ? "is-closing"
                    : ""
                }`}
        >

            {/* =================================================
                ONAM GLOW
            ================================================= */}

            <div className="onam-glow"></div>


            {/* =================================================
                FLOWER PARTICLES
            ================================================= */}

            <div className="onam-particles">

                <span>✦</span>

                <span>✿</span>

                <span>•</span>

                <span>✦</span>

                <span>•</span>

                <span>✿</span>

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="onam-content">


                {/* =================================================
                    PUKKALAM
                ================================================= */}

                <div className="onam-pookalam">

                    <div className="pookalam-ring ring-one"></div>

                    <div className="pookalam-ring ring-two"></div>

                    <div className="pookalam-ring ring-three"></div>

                    <div className="pookalam-center">

                        <span>
                            ✦
                        </span>

                    </div>

                </div>


                {/* =================================================
                    CES LOGO
                ================================================= */}

                <div className="onam-logo-wrap">

                    <img
                        src={logo}
                        alt="Circuits Energy System"
                        className="onam-logo"
                    />

                </div>


                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div className="onam-divider">

                    <span></span>

                    <strong>
                        ✦
                    </strong>

                    <span></span>

                </div>


                {/* =================================================
                    KICKER
                ================================================= */}

                <p className="onam-kicker">

                    PROUDLY SOUTH INDIAN • PROUDLY BUILDING

                </p>


                {/* =================================================
                    MAIN TITLE
                ================================================= */}

                <h1 className="onam-title">

                    Happy

                    <strong>
                        Onam
                    </strong>

                </h1>


                {/* =================================================
                    DATE
                ================================================= */}

                <p className="onam-date">

                    26 AUGUST 2026

                </p>


                {/* =================================================
                    ONAM QUOTE
                ================================================= */}

                <p className="onam-quote">

                    May this Onam bring prosperity,
                    happiness and new beginnings
                    to you and your family.

                </p>


                {/* =================================================
                    CES MESSAGE
                ================================================= */}

                <p className="onam-message">

                    Building a brighter industrial future, together.

                </p>


                {/* =================================================
                    MINI DECORATION
                ================================================= */}

                <div className="onam-decoration">

                    <span></span>

                    <span></span>

                    <span></span>

                    <span></span>

                    <span></span>

                </div>

            </div>


            {/* =================================================
                BOTTOM BRAND
            ================================================= */}

            <div className="onam-bottom">

                <span>
                    CIRCUITS ENERGY SYSTEM
                </span>

                <span className="onam-dot">
                    •
                </span>

                <span>
                    KERALA • INDIA
                </span>

            </div>

        </div>

    );

};


export default OnamSplash;