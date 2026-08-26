import {
    useEffect,
    useState
} from "react";

import logo
    from "../../../assets/logos/CircuitES-logo.png";

import "./EidMiladSplash.css";


const EidMiladSplash = ({ onComplete }) => {

    const [visible, setVisible] = useState(true);

    const [closing, setClosing] = useState(false);


    useEffect(() => {

        /* =====================================================
           EID MILAD-UN-NABI DATE CHECK
        ===================================================== */

        const today = new Date();

        /*
         * Eid Milad-un-Nabi 2026
         * 26 August 2026
         *
         * JavaScript:
         * August = 7
         */

        const isEidMilad =
            today.getMonth() === 7 &&
            today.getDate() === 26;


        /*
         * TEMPORARY DEVELOPMENT PREVIEW
         *
         * Use this while designing/testing:
         *
         * const isEidMilad = true;
         */


        /* =====================================================
           NOT EID MILAD
        ===================================================== */

        if (!isEidMilad) {

            setVisible(false);

            onComplete?.();

            return;

        }


        /* =====================================================
           SESSION STORAGE CHECK
        ===================================================== */

        const hasSeenEidMilad =
            sessionStorage.getItem(
                "ces_eid_milad_splash_seen"
            );


        if (hasSeenEidMilad === "true") {

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

            sessionStorage.setItem(
                "ces_eid_milad_splash_seen",
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
            className={`eid-milad-splash ${
                closing
                    ? "is-closing"
                    : ""
            }`}
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div className="eid-milad-glow"></div>


            {/* =================================================
                ISLAMIC PATTERN
            ================================================= */}

            <div className="eid-pattern"></div>


            {/* =================================================
                FLOATING STARS
            ================================================= */}

            <div className="eid-stars">

                <span>✦</span>

                <span>✧</span>

                <span>•</span>

                <span>✦</span>

                <span>•</span>

                <span>✧</span>

                <span>✦</span>

            </div>


            {/* =================================================
                LANTERNS
            ================================================= */}

            <div className="eid-lantern lantern-left">

                <div className="lantern-top"></div>

                <div className="lantern-body">

                    <span></span>

                </div>

                <div className="lantern-bottom"></div>

            </div>


            <div className="eid-lantern lantern-right">

                <div className="lantern-top"></div>

                <div className="lantern-body">

                    <span></span>

                </div>

                <div className="lantern-bottom"></div>

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="eid-milad-content">


                {/* =================================================
                    CRESCENT
                ================================================= */}

                <div className="eid-crescent-wrap">

                    <div className="eid-crescent">

                        <div className="eid-crescent-cut"></div>

                    </div>

                    <span className="crescent-star">
                        ✦
                    </span>

                </div>


                {/* =================================================
                    CES LOGO
                ================================================= */}

                <div className="eid-logo-wrap">

                    <img
                        src={logo}
                        alt="Circuits Energy System"
                        className="eid-logo"
                    />

                </div>


                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div className="eid-divider">

                    <span></span>

                    <strong>
                        ✦
                    </strong>

                    <span></span>

                </div>


                {/* =================================================
                    KICKER
                ================================================= */}

                <p className="eid-kicker">

                    PEACE • COMPASSION • UNITY

                </p>


                {/* =================================================
                    MAIN TITLE
                ================================================= */}

                <h1 className="eid-title">

                    Eid Milad

                    <strong>
                        Mubarak
                    </strong>

                </h1>


                {/* =================================================
                    DATE
                ================================================= */}

                <p className="eid-date">

                    26 AUGUST 2026

                </p>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <p className="eid-quote">

                    May this blessed occasion inspire
                    peace, compassion, kindness and
                    harmony in every heart.

                </p>


                {/* =================================================
                    CES MESSAGE
                ================================================= */}

                <p className="eid-message">

                    Wishing you and your family
                    peace, prosperity and happiness.

                </p>


                {/* =================================================
                    DECORATION
                ================================================= */}

                <div className="eid-decoration">

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

            <div className="eid-bottom">

                <span>
                    CIRCUITS ENERGY SYSTEM
                </span>

                <span className="eid-dot">
                    •
                </span>

                <span>
                    INDIA
                </span>

            </div>

        </div>

    );

};


export default EidMiladSplash;