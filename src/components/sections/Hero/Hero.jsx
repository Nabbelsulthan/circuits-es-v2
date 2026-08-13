
import "./Hero.css";

import { Link } from "react-router-dom";

import {
    ArrowRight,
    ArrowUpRight,
    ChevronDown,
} from "react-feather";

import { useRef } from "react";


const Hero = () => {

    const heroRef = useRef(null);


    /* =====================================================
       TRACK MOUSE POSITION
       ===================================================== */

    const handleMouseMove = (event) => {

        const hero = heroRef.current;

        if (!hero) return;


        const rect = hero.getBoundingClientRect();


        const x =
            ((event.clientX - rect.left) / rect.width) * 100;


        const y =
            ((event.clientY - rect.top) / rect.height) * 100;


        hero.style.setProperty(
            "--mouse-x",
            `${x}%`
        );


        hero.style.setProperty(
            "--mouse-y",
            `${y}%`
        );


        /* Highlight becomes stronger when cursor
           moves toward the right-side panel */

        const rightSide =
            Math.max(
                0,
                Math.min(
                    1,
                    (x - 48) / 52
                )
            );


        hero.style.setProperty(
            "--panel-focus",
            rightSide.toFixed(2)
        );

    };


    /* =====================================================
       RESET MOUSE EFFECT
       ===================================================== */

    const handleMouseLeave = () => {

        const hero = heroRef.current;

        if (!hero) return;


        hero.style.setProperty(
            "--mouse-x",
            "72%"
        );


        hero.style.setProperty(
            "--mouse-y",
            "48%"
        );


        hero.style.setProperty(
            "--panel-focus",
            "0"
        );

    };


    return (

        <section
            ref={heroRef}
            id="home"
            className="hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {/* =================================================
                INDUSTRIAL BACKGROUND
                ================================================= */}

            <div
                className="hero-background"
                aria-hidden="true"
            />


            {/* =================================================
                BASE OVERLAY
                ================================================= */}

            <div
                className="hero-overlay"
                aria-hidden="true"
            />


            {/* =================================================
                TECHNICAL LIGHT
                FOLLOWS THE MOUSE
                ================================================= */}

            <div
                className="hero-mouse-light"
                aria-hidden="true"
            />


            {/* =================================================
                PANEL FOCUS
                ================================================= */}

            <div
                className="hero-panel-focus"
                aria-hidden="true"
            >

                <span className="hero-panel-line line-one" />

                <span className="hero-panel-line line-two" />

                <span className="hero-panel-line line-three" />

                <span className="hero-panel-label">
                    SYSTEM ACTIVE
                </span>

            </div>


            {/* =================================================
                TECHNICAL GRID
                ================================================= */}

            <div
                className="hero-grid"
                aria-hidden="true"
            />


            {/* =================================================
                MAIN CONTAINER
                ================================================= */}

            <div className="hero-container">


                {/* =================================================
                    TOP BAR
                    ================================================= */}

                <header className="hero-topbar">


                    <div className="hero-brand-mark">

                        <span className="hero-brand-dot" />

                        <span>
                            CIRCUITS ENERGY SYSTEM
                        </span>

                    </div>


                    <div className="hero-topbar-right">

                        <span>
                            INDUSTRIAL AUTOMATION
                        </span>

                        <span className="hero-slash">
                            /
                        </span>

                        <span>
                            ELECTRICAL ENGINEERING
                        </span>

                    </div>

                </header>


                {/* =================================================
                    HERO MAIN
                    ================================================= */}

                <div className="hero-main">


                    <div className="hero-copy">


                        {/* =================================================
                            EYEBROW
                            ================================================= */}

                        <div className="hero-eyebrow">

                            <span>
                                ELECTRICAL SOLUTIONS
                            </span>

                            <span className="hero-eyebrow-line" />

                            <span>
                                ENGINEERED DIFFERENTLY
                            </span>

                        </div>


                        {/* =================================================
                            MAIN HEADING
                            ================================================= */}

                        <h1>

                            Electrical Solutions.

                            <span>
                                Engineered for
                            </span>

                            What’s Next.

                        </h1>


                        {/* =================================================
                            DESCRIPTION
                            ================================================= */}

                        <p className="hero-description">

                            We engineer and manufacture electrical
                            control panels and industrial automation
                            systems built around real production
                            requirements.

                        </p>


                        {/* =================================================
                            SEO LOCATION
                            ================================================= */}

                        <div className="hero-location">

                            <span>
                                PANEL MANUFACTURER
                            </span>

                            <i />

                            <span>
                                HOSUR
                            </span>

                            <i />

                            <span>
                                BENGALURU
                            </span>

                            <i />

                            <span>
                                CHENNAI
                            </span>

                        </div>


                        {/* =================================================
                            ACTIONS
                            ================================================= */}

                        <div className="hero-actions">


                            <Link
                                to="/quote"
                                className="primary-btn"
                            >

                                Get a Quote

                                <ArrowRight
                                    size={18}
                                />

                            </Link>

                            {/* 
                            <Link
                                to="/#solutions"
                                className="secondary-btn"
                            >

                                Explore Solutions

                                <ArrowUpRight
                                    size={17}
                                />

                            </Link> */}

                            <Link
                                to="/"
                                state={{
                                    scrollTo: "solutions",
                                }}
                                className="secondary-btn"
                            >

                                Explore Solutions

                                <ArrowUpRight
                                    size={17}
                                />

                            </Link>


                        </div>


                    </div>


                    {/* =================================================
                        PANEL INFORMATION
                        ================================================= */}

                    <div className="hero-panel-info">


                        <div className="hero-panel-info-top">

                            <span>
                                01
                            </span>

                            <span>
                                CONTROL SYSTEM
                            </span>

                        </div>


                        <div className="hero-panel-info-title">

                            ENGINEERED
                            <br />
                            FOR INDUSTRY

                        </div>


                        <div className="hero-panel-info-bottom">

                            <span>
                                DESIGN
                            </span>

                            <span className="hero-info-line" />

                            <span>
                                BUILD
                            </span>

                            <span className="hero-info-line" />

                            <span>
                                TEST
                            </span>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM ENGINEERING BAR
                    ================================================= */}

                <div className="hero-bottom">


                    <div className="hero-bottom-item">

                        <strong>
                            01
                        </strong>

                        <div>

                            <span>
                                ENGINEERING
                            </span>

                            <small>
                                Application-led design
                            </small>

                        </div>

                    </div>


                    <div className="hero-bottom-item">

                        <strong>
                            02
                        </strong>

                        <div>

                            <span>
                                MANUFACTURING
                            </span>

                            <small>
                                Precision panel fabrication
                            </small>

                        </div>

                    </div>


                    <div className="hero-bottom-item">

                        <strong>
                            03
                        </strong>

                        <div>

                            <span>
                                TESTING
                            </span>

                            <small>
                                Functional verification
                            </small>

                        </div>

                    </div>


                    <div className="hero-bottom-item">

                        <strong>
                            04
                        </strong>

                        <div>

                            <span>
                                DELIVERY
                            </span>

                            <small>
                                Installation & support
                            </small>

                        </div>

                    </div>


                </div>


                {/* =================================================
                    SCROLL
                    ================================================= */}

                <div className="hero-scroll">

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <ChevronDown
                        size={17}
                    />

                </div>


            </div>

        </section>
    );
};


export default Hero;