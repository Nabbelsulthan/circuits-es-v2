


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";




import "./Products.css";

import productHero from "../../../assets/images/Products-Hero.png";
import Mcc from "../../../assets/images/Mcc.png";
import Pcc from "../../../assets/images/Pcc.png";
import Plc from "../../../assets/images/Plc.png";
import Apfc from "../../../assets/images/Apfc.png";
import Vfd from "../../../assets/images/Vfd.png";
import Dg from "../../../assets/images/Dg.png";
import SEO from "../../SEO/SEO";
import BreadcrumbSchema from "../../SEO/BreadcrumbSchema";


/* =========================================================
   PRODUCTS PAGE
   ========================================================= */

const Products = () => {

    // const navigate = useNavigate();

    // const goToContact = () => {
    //     navigate("/");

    //     setTimeout(() => {
    //         document
    //             .getElementById("contact")
    //             ?.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             });
    //     }, 100);
    // };


    useEffect(() => {

        AOS.init({
            duration: 850,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });

        AOS.refresh();

        return () => {
            AOS.refreshHard();
        };

    }, []);


    return (

        <>
            <SEO
                title="Electrical Control Panels & Automation Products | CircuitsES"
                description="Explore electrical control panels, MCC, PCC, PLC and industrial automation products engineered and manufactured by CircuitsES for industrial applications."
                path="/products"
            />

            <BreadcrumbSchema
                items={[
                    {
                        name: "Home",
                        path: "/"
                    },
                    {
                        name: "Products",
                        path: "/products"
                    }
                ]}
            />

            <main
                id="products"
                className="products-page"
            >


                {/* =================================================
                HERO / MANUFACTURING SHOWCASE
            ================================================= */}

                <section className="products-showcase">

                    <div className="products-hero-grid" />

                    <div className="products-hero-glow products-hero-glow-one" />
                    <div className="products-hero-glow products-hero-glow-two" />

                    <div className="container">

                        <div className="showcase-grid">


                            {/* -----------------------------------------
                            HERO CONTENT
                        ----------------------------------------- */}

                            <div
                                className="showcase-content"
                                data-aos="fade-right"
                                data-aos-duration="900"
                            >

                                <div
                                    className="products-status"
                                    data-aos="fade-down"
                                    data-aos-delay="100"
                                >

                                    <span className="products-status-dot" />

                                    INDUSTRIAL ELECTRICAL SYSTEMS

                                    <span className="products-status-divider" />

                                    ENGINEERED & MANUFACTURED

                                </div>


                                <span
                                    className="section-tag"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    OUR PRODUCTS
                                </span>


                                <h1
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >

                                    Industrial Electrical Panels

                                    <span>
                                        Built For Every Industry
                                    </span>

                                </h1>


                                <p
                                    className="showcase-description"
                                    data-aos="fade-up"
                                    data-aos-delay="350"
                                >

                                    Circuits Energy System designs and
                                    manufactures custom electrical panels,
                                    industrial automation systems and
                                    engineered control solutions for
                                    manufacturing plants, infrastructure
                                    projects, OEMs and process industries.

                                </p>


                                {/* -----------------------------------------
                                HIGHLIGHTS
                            ----------------------------------------- */}

                                <div
                                    className="showcase-highlights"
                                    data-aos="fade-up"
                                    data-aos-delay="450"
                                >

                                    <div className="showcase-highlight">

                                        <strong>
                                            18+
                                        </strong>

                                        <span>
                                            Product Types
                                        </span>

                                    </div>


                                    <div className="showcase-highlight-divider" />


                                    <div className="showcase-highlight">

                                        <strong>
                                            100%
                                        </strong>

                                        <span>
                                            Custom Built
                                        </span>

                                    </div>


                                    <div className="showcase-highlight-divider" />


                                    <div className="showcase-highlight">

                                        <strong>
                                            IEC
                                        </strong>

                                        <span>
                                            Compliant
                                        </span>

                                    </div>

                                </div>


                                {/* -----------------------------------------
                                ACTIONS
                            ----------------------------------------- */}

                                <div
                                    className="showcase-buttons"
                                    data-aos="fade-up"
                                    data-aos-delay="550"
                                >

                                    <Link
                                        to="/quote"
                                        className="primary-btn"
                                    >

                                        Request Quote

                                        <span>
                                            ↗
                                        </span>

                                    </Link>

                                    <a
                                        href="tel:+91-9445468377"
                                        className="secondary-btn"
                                    >
                                        Talk to an Engineer

                                        <span>
                                            →
                                        </span>
                                    </a>

                                    {/* <button
                                    type="button"
                                    className="secondary-btn"
                                    onClick={goToContact}
                                >
                                    Talk to an Engineer

                                    <span>
                                        →
                                    </span>
                                </button> */}


                                    {/* <Link
                                    to="/#contact"
                                    className="secondary-btn"
                                >

                                    Talk to an Engineer

                                    <span>
                                        →
                                    </span>

                                </Link> */}

                                </div>

                            </div>


                            {/* -----------------------------------------
                            HERO VISUAL
                        ----------------------------------------- */}

                            <div
                                className="showcase-visual"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >

                                <div className="visual-card">


                                    <div
                                        className="floating-tag one"
                                        data-aos="fade-left"
                                        data-aos-delay="400"
                                    >
                                        ⚡ IEC Standards
                                    </div>


                                    <div
                                        className="floating-tag two"
                                        data-aos="fade-left"
                                        data-aos-delay="550"
                                    >
                                        🏭 Custom Built
                                    </div>


                                    <div
                                        className="floating-tag three"
                                        data-aos="fade-left"
                                        data-aos-delay="700"
                                    >
                                        ✓ Factory Tested
                                    </div>


                                    <div className="visual-image-wrapper">

                                        <img
                                            src={productHero}
                                            alt="Circuits Energy System Products"
                                        />

                                        <div className="visual-image-overlay" />

                                    </div>


                                    <div className="visual-footer">

                                        <div>

                                            <strong>
                                                Complete Product Range
                                            </strong>

                                            <span>
                                                Power • Automation • Control
                                            </span>

                                        </div>


                                        <div className="status-badge">

                                            <span className="status-pulse" />

                                            Manufacturing

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* -----------------------------------------
                    HERO BOTTOM STRIP
                ----------------------------------------- */}

                    <div
                        className="products-hero-strip"
                        data-aos="fade-up"
                        data-aos-delay="650"
                    >

                        <span>
                            POWER DISTRIBUTION
                        </span>

                        <i />

                        <span>
                            MOTOR CONTROL
                        </span>

                        <i />

                        <span>
                            AUTOMATION
                        </span>

                        <i />

                        <span>
                            POWER QUALITY
                        </span>

                        <i />

                        <span>
                            GENERATOR CONTROL
                        </span>

                    </div>

                </section>



                {/* =================================================
                FEATURED PRODUCTS
            ================================================= */}

                <section className="featured-products">

                    <div className="container">


                        <div
                            className="section-heading"
                            data-aos="fade-up"
                        >

                            <span>
                                FEATURED PRODUCTS
                            </span>

                            <h2>
                                Our Flagship Electrical Panels
                            </h2>

                            <p>
                                Designed, engineered and manufactured to
                                deliver maximum reliability, safety and
                                long-term industrial performance.
                            </p>

                        </div>


                        <div className="featured-grid">


                            {/* =================================================
                            MCC
                        ================================================= */}

                            <article
                                className="featured-card"
                                data-aos="zoom-in-up"
                                data-aos-delay="0"
                            >

                                <div className="featured-preview">

                                    <img
                                        src={Mcc}
                                        alt="MCC Panel"
                                        className="featured-image"
                                    />

                                    <div className="preview-overlay">

                                        <span>
                                            ENGINEERED PANEL
                                        </span>

                                    </div>

                                </div>


                                <div className="featured-content">

                                    <div className="featured-number">
                                        01
                                    </div>

                                    <h3>
                                        MCC Panel
                                    </h3>

                                    <p>
                                        Motor Control Centres designed for
                                        centralized motor control, protection
                                        and industrial reliability.
                                    </p>

                                    <ul>

                                        <li>
                                            Motor Feeders
                                        </li>

                                        <li>
                                            Overload Protection
                                        </li>

                                        <li>
                                            Custom Busbar Design
                                        </li>

                                    </ul>


                                    <Link
                                        to="/quote"
                                        className="product-link"
                                    >
                                        Request Quote
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>



                            {/* =================================================
                            PCC
                        ================================================= */}

                            <article
                                className="featured-card"
                                data-aos="zoom-in-up"
                                data-aos-delay="100"
                            >

                                <div className="featured-preview">

                                    <img
                                        src={Pcc}
                                        alt="PCC Panel"
                                        className="featured-image"
                                    />

                                    <div className="preview-overlay">

                                        <span>
                                            POWER DISTRIBUTION
                                        </span>

                                    </div>

                                </div>


                                <div className="featured-content">

                                    <div className="featured-number">
                                        02
                                    </div>

                                    <h3>
                                        PCC Panel
                                    </h3>

                                    <p>
                                        Main Power Control Centres engineered
                                        for dependable electrical power
                                        distribution in industrial facilities.
                                    </p>

                                    <ul>

                                        <li>
                                            Main Distribution
                                        </li>

                                        <li>
                                            Incoming Protection
                                        </li>

                                        <li>
                                            IEC Compliant Design
                                        </li>

                                    </ul>


                                    <Link
                                        to="/quote"
                                        className="product-link"
                                    >
                                        Request Quote
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>



                            {/* =================================================
                            PLC
                        ================================================= */}

                            <article
                                className="featured-card"
                                data-aos="zoom-in-up"
                                data-aos-delay="200"
                            >

                                <div className="featured-preview">

                                    <img
                                        src={Plc}
                                        alt="PLC Panel"
                                        className="featured-image"
                                    />

                                    <div className="preview-overlay">

                                        <span>
                                            SMART AUTOMATION
                                        </span>

                                    </div>

                                </div>


                                <div className="featured-content">

                                    <div className="featured-number">
                                        03
                                    </div>

                                    <h3>
                                        PLC Control Panel
                                    </h3>

                                    <p>
                                        Intelligent automation panels with PLC,
                                        HMI and industrial communication
                                        systems for modern manufacturing.
                                    </p>

                                    <ul>

                                        <li>
                                            PLC Programming
                                        </li>

                                        <li>
                                            HMI Integration
                                        </li>

                                        <li>
                                            SCADA Ready
                                        </li>

                                    </ul>


                                    <Link
                                        to="/quote"
                                        className="product-link"
                                    >
                                        Request Quote
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>



                            {/* =================================================
                            APFC
                        ================================================= */}

                            <article
                                className="featured-card"
                                data-aos="zoom-in-up"
                                data-aos-delay="300"
                            >

                                <div className="featured-preview">

                                    <img
                                        src={Apfc}
                                        alt="APFC Panel"
                                        className="featured-image"
                                    />

                                    <div className="preview-overlay">

                                        <span>
                                            POWER QUALITY
                                        </span>

                                    </div>

                                </div>


                                <div className="featured-content">

                                    <div className="featured-number">
                                        04
                                    </div>

                                    <h3>
                                        APFC Panel
                                    </h3>

                                    <p>
                                        Automatic Power Factor Correction
                                        panels that improve electrical
                                        efficiency and reduce power losses.
                                    </p>

                                    <ul>

                                        <li>
                                            Automatic Switching
                                        </li>

                                        <li>
                                            Energy Saving
                                        </li>

                                        <li>
                                            Power Optimization
                                        </li>

                                    </ul>


                                    <Link
                                        to="/quote"
                                        className="product-link"
                                    >
                                        Request Quote
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>



                            {/* =================================================
                            VFD
                        ================================================= */}

                            <article
                                className="featured-card"
                                data-aos="zoom-in-up"
                                data-aos-delay="400"
                            >

                                <div className="featured-preview">

                                    <img
                                        src={Vfd}
                                        alt="VFD Panel"
                                        className="featured-image"
                                    />

                                    <div className="preview-overlay">

                                        <span>
                                            MOTOR CONTROL
                                        </span>

                                    </div>

                                </div>


                                <div className="featured-content">

                                    <div className="featured-number">
                                        05
                                    </div>

                                    <h3>
                                        VFD Control Panel
                                    </h3>

                                    <p>
                                        Variable Frequency Drive panels for
                                        accurate motor speed control,
                                        efficiency and process optimization.
                                    </p>

                                    <ul>

                                        <li>
                                            Variable Speed Control
                                        </li>

                                        <li>
                                            Energy Efficient
                                        </li>

                                        <li>
                                            Soft Starting
                                        </li>

                                    </ul>


                                    <Link
                                        to="/quote"
                                        className="product-link"
                                    >
                                        Request Quote
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>



                            {/* =================================================
                            DG
                        ================================================= */}

                            <article
                                className="featured-card"
                                data-aos="zoom-in-up"
                                data-aos-delay="500"
                            >

                                <div className="featured-preview">

                                    <img
                                        src={Dg}
                                        alt="DG Synchronizing Panel"
                                        className="featured-image"
                                    />

                                    <div className="preview-overlay">

                                        <span>
                                            GENERATOR CONTROL
                                        </span>

                                    </div>

                                </div>


                                <div className="featured-content">

                                    <div className="featured-number">
                                        06
                                    </div>

                                    <h3>
                                        DG Synchronizing Panel
                                    </h3>

                                    <p>
                                        Advanced synchronizing panels for
                                        multiple generators with automatic
                                        load sharing and protection.
                                    </p>

                                    <ul>

                                        <li>
                                            Auto Synchronization
                                        </li>

                                        <li>
                                            Load Sharing
                                        </li>

                                        <li>
                                            Generator Protection
                                        </li>

                                    </ul>


                                    <Link
                                        to="/quote"
                                        className="product-link"
                                    >
                                        Request Quote
                                        <span>→</span>
                                    </Link>

                                </div>

                            </article>

                        </div>

                    </div>

                </section>



                {/* =================================================
                COMPLETE PRODUCT PORTFOLIO
            ================================================= */}

                <section className="product-portfolio">

                    <div className="container">


                        <div
                            className="section-heading"
                            data-aos="fade-up"
                        >

                            <span>
                                COMPLETE PRODUCT PORTFOLIO
                            </span>

                            <h2>
                                Every Panel Your Industry Needs
                            </h2>

                            <p>
                                From power distribution to industrial
                                automation, we manufacture a complete range
                                of custom-built electrical panels engineered
                                for demanding industrial applications.
                            </p>

                        </div>


                        <div className="portfolio-grid">


                            <div
                                className="portfolio-card"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >

                                <div className="portfolio-card-top">
                                    <span>01</span>
                                </div>

                                <h3>
                                    Power Distribution
                                </h3>

                                <ul>

                                    <li>
                                        PCC Panel
                                    </li>

                                    <li>
                                        MCC Panel
                                    </li>

                                    <li>
                                        Main LT Panel
                                    </li>

                                    <li>
                                        Feeder Pillar Panel
                                    </li>

                                    <li>
                                        Distribution Board
                                    </li>

                                </ul>

                            </div>



                            <div
                                className="portfolio-card"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >

                                <div className="portfolio-card-top">
                                    <span>02</span>
                                </div>

                                <h3>
                                    Industrial Automation
                                </h3>

                                <ul>

                                    <li>
                                        PLC Control Panel
                                    </li>

                                    <li>
                                        PLC + HMI Panel
                                    </li>

                                    <li>
                                        SCADA Control Panel
                                    </li>

                                    <li>
                                        Remote I/O Panel
                                    </li>

                                    <li>
                                        Automation Desk
                                    </li>

                                </ul>

                            </div>



                            <div
                                className="portfolio-card"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >

                                <div className="portfolio-card-top">
                                    <span>03</span>
                                </div>

                                <h3>
                                    Motor Control
                                </h3>

                                <ul>

                                    <li>
                                        VFD Panel
                                    </li>

                                    <li>
                                        Soft Starter Panel
                                    </li>

                                    <li>
                                        Star Delta Panel
                                    </li>

                                    <li>
                                        DOL Starter Panel
                                    </li>

                                    <li>
                                        Pump Control Panel
                                    </li>

                                </ul>

                            </div>



                            <div
                                className="portfolio-card"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >

                                <div className="portfolio-card-top">
                                    <span>04</span>
                                </div>

                                <h3>
                                    Generator & Utility
                                </h3>

                                <ul>

                                    <li>
                                        AMF Panel
                                    </li>

                                    <li>
                                        ATS Panel
                                    </li>

                                    <li>
                                        DG Synchronizing Panel
                                    </li>

                                </ul>

                            </div>



                            <div
                                className="portfolio-card"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >

                                <div className="portfolio-card-top">
                                    <span>05</span>
                                </div>

                                <h3>
                                    Power Quality
                                </h3>

                                <ul>

                                    <li>
                                        APFC Panel
                                    </li>

                                    <li>
                                        Capacitor Bank Panel
                                    </li>

                                    <li>
                                        Harmonic Filter Panel
                                    </li>

                                </ul>

                            </div>



                            <div
                                className="portfolio-card"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >

                                <div className="portfolio-card-top">
                                    <span>06</span>
                                </div>

                                <h3>
                                    Industrial Enclosures
                                </h3>

                                <ul>

                                    <li>
                                        Floor Mounted Enclosure
                                    </li>

                                    <li>
                                        Wall Mounted Enclosure
                                    </li>

                                    <li>
                                        SS304 Enclosure
                                    </li>

                                    <li>
                                        SS316 Enclosure
                                    </li>

                                    <li>
                                        IP65 Outdoor Enclosure
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =================================================
                ENGINEERING CAPABILITY
            ================================================= */}

                <section className="engineering-capability">

                    <div className="container">


                        <div
                            className="section-heading"
                            data-aos="fade-up"
                        >

                            <span>
                                ENGINEERING EXCELLENCE
                            </span>

                            <h2>
                                From Concept to Commissioning
                            </h2>

                            <p>
                                Every panel manufactured by Circuits Energy
                                System follows a structured engineering
                                workflow to ensure quality, reliability and
                                long-term industrial performance.
                            </p>

                        </div>


                        <div className="engineering-process">


                            <div
                                className="process-card"
                                data-aos="fade-right"
                                data-aos-delay="0"
                            >

                                <div className="process-number">
                                    01
                                </div>

                                <h3>
                                    Requirement Analysis
                                </h3>

                                <p>
                                    Understanding customer applications,
                                    electrical load calculations,
                                    specifications and project goals.
                                </p>

                            </div>


                            <div
                                className="process-arrow"
                                data-aos="fade-in"
                                data-aos-delay="100"
                            >
                                →
                            </div>


                            <div
                                className="process-card"
                                data-aos="fade-left"
                                data-aos-delay="150"
                            >

                                <div className="process-number">
                                    02
                                </div>

                                <h3>
                                    Engineering Design
                                </h3>

                                <p>
                                    Preparation of electrical schematics,
                                    GA drawings, BOM and panel layouts
                                    using modern engineering tools.
                                </p>

                            </div>


                            <div
                                className="process-arrow"
                                data-aos="fade-in"
                                data-aos-delay="200"
                            >
                                →
                            </div>


                            <div
                                className="process-card"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >

                                <div className="process-number">
                                    03
                                </div>

                                <h3>
                                    Manufacturing
                                </h3>

                                <p>
                                    Fabrication, busbar assembly,
                                    component mounting and precision
                                    wiring by experienced technicians.
                                </p>

                            </div>


                            <div
                                className="process-arrow"
                                data-aos="fade-in"
                                data-aos-delay="350"
                            >
                                →
                            </div>


                            <div
                                className="process-card"
                                data-aos="fade-up"
                                data-aos-delay="450"
                            >

                                <div className="process-number">
                                    04
                                </div>

                                <h3>
                                    Testing & FAT
                                </h3>

                                <p>
                                    Functional testing, insulation
                                    verification and Factory Acceptance
                                    Testing before dispatch.
                                </p>

                            </div>


                            <div
                                className="process-arrow"
                                data-aos="fade-in"
                                data-aos-delay="500"
                            >
                                →
                            </div>


                            <div
                                className="process-card"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >

                                <div className="process-number">
                                    05
                                </div>

                                <h3>
                                    Installation Support
                                </h3>

                                <p>
                                    Site commissioning, technical
                                    assistance and post-installation
                                    engineering support.
                                </p>

                            </div>

                        </div>


                        {/* -----------------------------------------
                        ENGINEERING STATS
                    ----------------------------------------- */}

                        <div
                            className="engineering-stats"
                            data-aos="flip-up"
                            data-aos-delay="100"
                        >

                            <div>

                                <h3>
                                    Custom
                                </h3>

                                <span>
                                    Engineered Solutions
                                </span>

                            </div>


                            <div>

                                <h3>
                                    IEC
                                </h3>

                                <span>
                                    Industry Standards
                                </span>

                            </div>


                            <div>

                                <h3>
                                    FAT
                                </h3>

                                <span>
                                    Factory Tested
                                </span>

                            </div>


                            <div>

                                <h3>
                                    PAN India
                                </h3>

                                <span>
                                    Delivery & Support
                                </span>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =================================================
                CUSTOM ENGINEERING
            ================================================= */}

                <section className="custom-engineering">

                    <div className="container">

                        <div className="custom-engineering-box">


                            {/* -----------------------------------------
                            CONTENT
                        ----------------------------------------- */}

                            <div
                                className="custom-content"
                                data-aos="fade-right"
                            >

                                <span>
                                    CUSTOM ENGINEERING SOLUTIONS
                                </span>

                                <h2>
                                    Every Project Starts With
                                    <span>
                                        Your Requirement
                                    </span>
                                </h2>

                                <p>
                                    Whether you require a standard electrical
                                    panel or a completely customized automation
                                    system, our engineering team works closely
                                    with you to design, manufacture, test and
                                    deliver a solution tailored to your
                                    application.
                                </p>


                                <div className="custom-features">

                                    <div data-aos="fade-up" data-aos-delay="100">
                                        ✓ Custom Panel Design
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="150">
                                        ✓ Electrical Drawings
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="200">
                                        ✓ PLC Programming
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="250">
                                        ✓ Factory Acceptance Testing
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="300">
                                        ✓ Site Commissioning
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="350">
                                        ✓ Lifetime Technical Support
                                    </div>

                                </div>

                            </div>


                            {/* -----------------------------------------
                            QUOTE CARD
                        ----------------------------------------- */}

                            <div
                                className="quote-card"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >

                                <div className="quote-card-label">
                                    START YOUR PROJECT
                                </div>

                                <h3>
                                    Need a Custom Panel?
                                </h3>

                                <p>
                                    Share your electrical requirements,
                                    SLD, BOQ or technical specifications.
                                    Our engineers will recommend the
                                    right solution.
                                </p>


                                <div className="quote-points">

                                    <span>
                                        ✓ Fast Response
                                    </span>

                                    <span>
                                        ✓ Technical Consultation
                                    </span>

                                    <span>
                                        ✓ Competitive Pricing
                                    </span>

                                    <span>
                                        ✓ Manufacturing Support
                                    </span>

                                </div>


                                <Link
                                    to="/quote"
                                    className="quote-btn-product"
                                >
                                    Request a Quote
                                    <span>
                                        ↗
                                    </span>
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </>
    );
};

export default Products;