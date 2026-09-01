import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import "./MCCPanel.css";

import mccImage from "../../../../assets/images/Mcc.png";

import SEO from "../../../SEO/SEO";
import BreadcrumbSchema from "../../../SEO/BreadcrumbSchema";


/* =========================================================
   MCC PANEL DATA
   ========================================================= */

const mccApplications = [
    {
        number: "01",
        title: "Motor Feeders",
        description:
            "Dedicated feeder arrangements for controlling and protecting individual motors across industrial applications.",
        icon: "↗",
    },
    {
        number: "02",
        title: "Motor Protection",
        description:
            "Protection and control arrangements designed around the operating requirements of industrial motors.",
        icon: "◈",
    },
    {
        number: "03",
        title: "Centralized Control",
        description:
            "Multiple motor feeders organized within a centralized Motor Control Centre for easier operation and maintenance.",
        icon: "⌘",
    },
    {
        number: "04",
        title: "VFD Integration",
        description:
            "MCC configurations can accommodate variable-speed motor control where required by the application.",
        icon: "◫",
    },
    {
        number: "05",
        title: "Starter Control",
        description:
            "Motor starting arrangements can be engineered according to motor, load and process requirements.",
        icon: "⚡",
    },
    {
        number: "06",
        title: "Custom Busbar Design",
        description:
            "Busbar arrangements are engineered around the required distribution and feeder configuration.",
        icon: "◎",
    },
];


const mccFeatures = [
    "Centralized motor control",
    "Motor feeder integration",
    "Protection and control",
    "Custom busbar arrangement",
    "Application-specific configuration",
    "Industrial-duty construction",
];


const mccIndustries = [
    "Manufacturing",
    "Process Industries",
    "Infrastructure",
    "Water & Utilities",
    "Material Handling",
    "Industrial Plants",
];


const mccProcess = [
    {
        number: "01",
        title: "Requirement",
        description:
            "We begin with the motor list, application, electrical requirements and project specifications.",
    },
    {
        number: "02",
        title: "Engineering",
        description:
            "Electrical schematics, panel architecture, feeder arrangement and busbar configuration are developed.",
    },
    {
        number: "03",
        title: "Manufacturing",
        description:
            "Panel fabrication, component mounting, busbar assembly and control wiring are completed.",
    },
    {
        number: "04",
        title: "Testing",
        description:
            "The completed panel undergoes inspection and functional verification before dispatch.",
    },
    {
        number: "05",
        title: "Support",
        description:
            "Technical assistance is provided through installation, commissioning and project support.",
    },
];


const mccConfiguration = [
    {
        label: "CONTROL",
        value: "Motor Feeders",
        icon: "⌁",
    },
    {
        label: "PROTECTION",
        value: "Motor Protection",
        icon: "◈",
    },
    {
        label: "DISTRIBUTION",
        value: "Busbar System",
        icon: "▤",
    },
    {
        label: "DRIVES",
        value: "VFD Integration",
        icon: "↗",
    },
];


const mccFaqs = [
    {
        question: "What is an MCC panel?",
        answer:
            "A Motor Control Centre (MCC) panel is an electrical panel used to centrally control, protect and distribute power to multiple motors and motor-driven equipment within an industrial facility.",
    },
    {
        question: "What can an MCC panel control?",
        answer:
            "An MCC can accommodate multiple motor feeders and starting or control arrangements based on the motor and process requirements of the application.",
    },
    {
        question: "Can the MCC be customized?",
        answer:
            "Yes. MCC configurations can be engineered around the customer's motor list, electrical requirements, feeder arrangement, control philosophy and project specifications.",
    },
    {
        question: "Can VFDs be integrated into an MCC?",
        answer:
            "VFD-based motor control can be incorporated where variable-speed operation is required by the application.",
    },
    {
        question: "Does CircuitES provide testing and commissioning support?",
        answer:
            "CircuitES follows a structured engineering and manufacturing workflow that includes testing before dispatch, with technical support for installation and commissioning.",
    },
];


/* =========================================================
   COMPONENT
   ========================================================= */

const MCCPanel = () => {

    useEffect(() => {

        AOS.init({
            duration: 850,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
            disable: false,
        });

        AOS.refresh();

        return () => {
            AOS.refreshHard();
        };

    }, []);


    return (

        <>
            <SEO
                title="MCC Panel Manufacturer in Hosur, Bangalore & Chennai | CircuitsES"
                description="CircuitsES is an MCC panel manufacturer serving Hosur, Bangalore and Chennai, offering custom Motor Control Centre panels for industrial motor control, protection, distribution and automation applications."
                path="/products/mcc-panels"
            />


            <BreadcrumbSchema
                items={[
                    {
                        name: "Home",
                        path: "/",
                    },
                    {
                        name: "Products",
                        path: "/products",
                    },
                    {
                        name: "MCC Panels",
                        path: "/products/mcc-panels",
                    },
                ]}
            />


            <main className="mcc-page">


                {/* =================================================
                    HERO
                ================================================= */}

                <section className="mcc-hero">

                    <div className="mcc-hero-grid" />

                    <div className="mcc-hero-glow mcc-hero-glow-one" />
                    <div className="mcc-hero-glow mcc-hero-glow-two" />

                    <div className="mcc-scan-line" />


                    <div className="mcc-container mcc-hero-container">


                        {/* LEFT */}

                        <div
                            className="mcc-hero-content"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >

                            <div
                                className="mcc-status-line"
                                data-aos="fade-down"
                                data-aos-delay="100"
                            >

                                <span className="mcc-status-dot" />

                                <span>
                                    MOTOR CONTROL CENTRE
                                </span>

                                <i />

                                <span>
                                    ENGINEERED & MANUFACTURED
                                </span>

                            </div>



                            <span
                                className="mcc-eyebrow"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                MCC • MOTOR CONTROL • PROTECTION
                            </span>

                            {/* 
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                Centralized
                                <span> Motor Control.</span>

                                <br />

                                Built for
                                <span> Industry.</span>
                            </h1> */}


                            <h1
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                Control Every
                                <span> Motor.</span>

                                <br />

                                Power Every
                                <span> Process.</span>
                            </h1>


                            <p
                                className="mcc-hero-description"
                                data-aos="fade-up"
                                data-aos-delay="350"
                            >
                                CircuitsES designs and manufactures Motor Control
                                Centre panels engineered for centralized motor
                                control, protection and industrial power
                                distribution.
                            </p>


                            <p
                                className="mcc-hero-subtext"
                                data-aos="fade-up"
                                data-aos-delay="450"
                            >
                                From motor feeders and starter arrangements to
                                custom busbar configurations and VFD integration,
                                each MCC is developed around the requirements of
                                the application.
                            </p>


                            <div
                                className="mcc-hero-actions"
                                data-aos="fade-up"
                                data-aos-delay="550"
                            >

                                <Link
                                    to="/quote"
                                    className="mcc-btn mcc-btn-primary"
                                >
                                    Request MCC Quote
                                    <span>↗</span>
                                </Link>


                                <a
                                    href="tel:+91-9445468377"
                                    className="mcc-btn mcc-btn-secondary"
                                >
                                    Talk to an Engineer
                                    <span>→</span>
                                </a>

                            </div>


                            <div
                                className="mcc-hero-metrics"
                                data-aos="fade-up"
                                data-aos-delay="650"
                            >

                                <div className="mcc-metric">
                                    <strong>MOTOR</strong>
                                    <span>Control</span>
                                </div>

                                <div className="mcc-metric-divider" />

                                <div className="mcc-metric">
                                    <strong>FEEDER</strong>
                                    <span>Protection</span>
                                </div>

                                <div className="mcc-metric-divider" />

                                <div className="mcc-metric">
                                    <strong>BUSBAR</strong>
                                    <span>Distribution</span>
                                </div>

                                <div className="mcc-metric-divider" />

                                <div className="mcc-metric">
                                    <strong>VFD</strong>
                                    <span>Integration</span>
                                </div>

                            </div>

                        </div>


                        {/* RIGHT */}

                        <div
                            className="mcc-hero-visual"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            data-aos-duration="1200"
                        >

                            <div className="mcc-orbit mcc-orbit-one" />
                            <div className="mcc-orbit mcc-orbit-two" />


                            <div className="mcc-image-card">

                                <div className="mcc-image-status">

                                    <span className="mcc-status-dot" />

                                    ENGINEERED PANEL

                                </div>


                                <div className="mcc-image-wrapper">

                                    <img
                                        src={mccImage}
                                        alt="MCC Panel manufactured by CircuitsES"
                                    />

                                    <div className="mcc-image-overlay" />

                                </div>


                                <div className="mcc-image-footer">

                                    <div>

                                        <strong>
                                            MOTOR CONTROL CENTRE
                                        </strong>

                                        <span>
                                            POWER • CONTROL • PROTECTION
                                        </span>

                                    </div>

                                    <span className="mcc-live-badge">
                                        MCC
                                    </span>

                                </div>

                            </div>


                            <div
                                className="mcc-floating-card mcc-floating-card-one"
                                data-aos="fade-left"
                                data-aos-delay="500"
                            >

                                <span>◈</span>

                                <div>
                                    <strong>Motor Protection</strong>
                                    <small>Control & Safety</small>
                                </div>

                            </div>


                            <div
                                className="mcc-floating-card mcc-floating-card-two"
                                data-aos="fade-right"
                                data-aos-delay="650"
                            >

                                <span>▤</span>

                                <div>
                                    <strong>Custom Busbar</strong>
                                    <small>Engineered Distribution</small>
                                </div>

                            </div>


                            <div
                                className="mcc-floating-card mcc-floating-card-three"
                                data-aos="fade-left"
                                data-aos-delay="800"
                            >

                                <span>✓</span>

                                <div>
                                    <strong>Factory Tested</strong>
                                    <small>Before Dispatch</small>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div
                        className="mcc-hero-strip"
                        data-aos="fade-up"
                        data-aos-delay="750"
                    >

                        <span>POWER DISTRIBUTION</span>

                        <i />

                        <span>MOTOR CONTROL</span>

                        <i />

                        <span>PROTECTION</span>

                        <i />

                        <span>STARTER CONTROL</span>

                        <i />

                        <span>VFD INTEGRATION</span>

                    </div>

                </section>


                {/* =================================================
                    INTRO
                ================================================= */}

                <section className="mcc-intro">

                    <div className="mcc-container">

                        <div
                            className="mcc-section-heading"
                            data-aos="fade-up"
                        >

                            <span className="mcc-section-label">
                                MCC PANEL ENGINEERING
                            </span>

                            <h2>
                                One panel.
                                <span>
                                    Multiple motor systems.
                                </span>
                            </h2>

                            <p>
                                A Motor Control Centre brings multiple motor
                                feeders and control functions together into a
                                centralized electrical system. CircuitES
                                engineers MCC panels around the application,
                                motor requirements and operating environment.
                            </p>

                        </div>


                        <div className="mcc-architecture">

                            <div
                                className="mcc-architecture-node"
                                data-aos="fade-right"
                            >
                                <span>01</span>
                                <strong>Incoming</strong>
                                <small>Power Supply</small>
                            </div>


                            <div className="mcc-architecture-line">
                                <span />
                            </div>


                            <div
                                className="mcc-architecture-core"
                                data-aos="zoom-in"
                                data-aos-delay="150"
                            >

                                <div className="mcc-core-ring">

                                    <span className="mcc-core-pulse" />

                                    <strong>
                                        MCC
                                    </strong>

                                    <small>
                                        MOTOR CONTROL CENTRE
                                    </small>

                                </div>

                            </div>


                            <div className="mcc-architecture-line">
                                <span />
                            </div>


                            <div
                                className="mcc-architecture-node"
                                data-aos="fade-left"
                                data-aos-delay="250"
                            >
                                <span>02</span>
                                <strong>Motor Feeders</strong>
                                <small>Control & Protection</small>
                            </div>

                        </div>


                        <div className="mcc-architecture-bottom">

                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <span>01</span>
                                <strong>Centralized Control</strong>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <span>02</span>
                                <strong>Motor Protection</strong>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <span>03</span>
                                <strong>Power Distribution</strong>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    WHY MCC
                ================================================= */}

                <section className="mcc-capabilities">

                    <div className="mcc-container">

                        <div
                            className="mcc-section-heading mcc-heading-left"
                            data-aos="fade-up"
                        >

                            <span className="mcc-section-label">
                                CAPABILITIES
                            </span>

                            <h2>
                                Engineered around
                                <span>
                                    your motor system.
                                </span>
                            </h2>

                            <p>
                                Every MCC configuration can be developed around
                                the motors, feeders, control philosophy and
                                operational requirements of the project.
                            </p>

                        </div>


                        <div className="mcc-capability-grid">

                            {mccApplications.map((item, index) => (

                                <article
                                    className="mcc-capability-card"
                                    key={item.number}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 90}
                                >

                                    <div className="mcc-card-top">

                                        <span className="mcc-card-number">
                                            {item.number}
                                        </span>

                                        <span className="mcc-card-icon">
                                            {item.icon}
                                        </span>

                                    </div>


                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>


                                    <span className="mcc-card-line" />

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CONFIGURATION
                ================================================= */}

                <section className="mcc-configuration">

                    <div className="mcc-container">

                        <div className="mcc-configuration-panel">

                            <div
                                className="mcc-configuration-content"
                                data-aos="fade-right"
                            >

                                <span className="mcc-section-label">
                                    SYSTEM CONFIGURATION
                                </span>

                                <h2>
                                    Control.
                                    <span>
                                        Protect.
                                    </span>
                                    <br />
                                    Distribute.
                                </h2>

                                <p>
                                    An MCC is more than a collection of motor
                                    feeders. Its architecture brings power
                                    distribution, motor control and protection
                                    together into one coordinated system.
                                </p>


                                <div className="mcc-feature-list">

                                    {mccFeatures.map((feature, index) => (

                                        <div
                                            key={feature}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 70}
                                        >

                                            <span>✓</span>

                                            {feature}

                                        </div>

                                    ))}

                                </div>

                            </div>


                            <div
                                className="mcc-configuration-visual"
                                data-aos="zoom-in"
                            >

                                <div className="mcc-config-grid" />


                                <div className="mcc-config-core">

                                    <span className="mcc-config-status">
                                        SYSTEM ARCHITECTURE
                                    </span>

                                    <strong>
                                        MCC
                                    </strong>

                                    <small>
                                        CONTROL CENTRE
                                    </small>

                                </div>


                                {mccConfiguration.map(
                                    (item, index) => (

                                        <div
                                            className={`mcc-config-node mcc-config-node-${index + 1}`}
                                            key={item.label}
                                            data-aos="zoom-in"
                                            data-aos-delay={300 + index * 100}
                                        >

                                            <span>
                                                {item.icon}
                                            </span>

                                            <div>
                                                <small>
                                                    {item.label}
                                                </small>

                                                <strong>
                                                    {item.value}
                                                </strong>
                                            </div>

                                        </div>

                                    )
                                )}


                                <div className="mcc-config-line mcc-config-line-one" />
                                <div className="mcc-config-line mcc-config-line-two" />
                                <div className="mcc-config-line mcc-config-line-three" />
                                <div className="mcc-config-line mcc-config-line-four" />

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    ENGINEERING PROCESS
                ================================================= */}

                <section className="mcc-process">

                    <div className="mcc-container">

                        <div
                            className="mcc-section-heading"
                            data-aos="fade-up"
                        >

                            <span className="mcc-section-label">
                                ENGINEERING & MANUFACTURING
                            </span>

                            <h2>
                                From requirement
                                <span>
                                    to completed panel.
                                </span>
                            </h2>

                            <p>
                                Our MCC workflow connects engineering,
                                fabrication, assembly and testing into one
                                controlled manufacturing process.
                            </p>

                        </div>


                        <div className="mcc-process-grid">

                            {mccProcess.map((item, index) => (

                                <React.Fragment key={item.number}>

                                    <article
                                        className="mcc-process-card"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >

                                        <span className="mcc-process-number">
                                            {item.number}
                                        </span>

                                        <div className="mcc-process-icon">
                                            {index === 0 && "⌁"}
                                            {index === 1 && "◈"}
                                            {index === 2 && "▤"}
                                            {index === 3 && "✓"}
                                            {index === 4 && "↗"}
                                        </div>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </article>


                                    {index < mccProcess.length - 1 && (

                                        <div className="mcc-process-arrow">
                                            →
                                        </div>

                                    )}

                                </React.Fragment>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    APPLICATIONS
                ================================================= */}

                <section className="mcc-industries">

                    <div className="mcc-container">

                        <div className="mcc-industries-layout">

                            <div
                                className="mcc-industries-content"
                                data-aos="fade-right"
                            >

                                <span className="mcc-section-label">
                                    APPLICATION AREAS
                                </span>

                                <h2>
                                    Built for
                                    <span>
                                        industrial environments.
                                    </span>
                                </h2>

                                <p>
                                    MCC systems are used wherever multiple
                                    motors require centralized control,
                                    protection and coordinated electrical
                                    distribution.
                                </p>


                                <div className="mcc-industry-statement">
                                    MOTOR CONTROL
                                    <span>
                                        STARTS HERE.
                                    </span>
                                </div>

                            </div>


                            <div className="mcc-industry-list">

                                {mccIndustries.map(
                                    (industry, index) => (

                                        <div
                                            className="mcc-industry-item"
                                            key={industry}
                                            data-aos="fade-left"
                                            data-aos-delay={index * 90}
                                        >

                                            <span>
                                                0{index + 1}
                                            </span>

                                            <strong>
                                                {industry}
                                            </strong>

                                            <b>
                                                →
                                            </b>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    FAQ
                ================================================= */}

                <section className="mcc-faq">

                    <div className="mcc-container">

                        <div
                            className="mcc-section-heading"
                            data-aos="fade-up"
                        >

                            <span className="mcc-section-label">
                                MCC PANEL FAQ
                            </span>

                            <h2>
                                Questions engineers
                                <span>
                                    ask before ordering.
                                </span>
                            </h2>

                        </div>


                        <div className="mcc-faq-list">

                            {mccFaqs.map((faq, index) => (

                                <details
                                    className="mcc-faq-item"
                                    key={faq.question}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                >

                                    <summary>

                                        <span>
                                            {faq.question}
                                        </span>

                                        <b>
                                            +
                                        </b>

                                    </summary>

                                    <div className="mcc-faq-answer">

                                        <p>
                                            {faq.answer}
                                        </p>

                                    </div>

                                </details>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CTA
                ================================================= */}

                <section className="mcc-final-cta">

                    <div className="mcc-container">

                        <div
                            className="mcc-cta-box"
                            data-aos="zoom-in"
                        >

                            <div className="mcc-cta-content">

                                <span className="mcc-section-label">
                                    START YOUR PROJECT
                                </span>

                                <h2>
                                    Have an MCC
                                    <span>
                                        requirement?
                                    </span>
                                </h2>

                                <p>
                                    Share your motor list, SLD, BOQ or project
                                    specification. Our engineering team can
                                    review the requirement and recommend an
                                    appropriate MCC configuration.
                                </p>

                            </div>


                            <div className="mcc-cta-actions">

                                <Link
                                    to="/quote"
                                    className="mcc-btn mcc-btn-primary"
                                >
                                    Request MCC Quote
                                    <span>↗</span>
                                </Link>

                                <Link
                                    to="/products"
                                    className="mcc-cta-back"
                                >
                                    ← View All Products
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


            </main>

        </>
    );
};


export default MCCPanel;