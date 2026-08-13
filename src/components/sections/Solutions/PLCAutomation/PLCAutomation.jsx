import React, { useEffect } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import "./PLCAutomation.css";

import plcHero from "../../../../assets/images/Plc-Hero.png";
import plcBackground from "../../../../assets/images/Plc-Background.png";



/* =========================================================
   PLC PLATFORM DATA
   ========================================================= */

const plcPlatforms = [
    {
        name: "Siemens",
        type: "SIMATIC",
        description:
            "Industrial PLC platforms for high-performance automation, process control and machine applications.",
    },
    {
        name: "Schneider Electric",
        type: "Modicon",
        description:
            "Flexible PLC solutions for machine automation, process control and connected industrial systems.",
    },
    {
        name: "ABB",
        type: "Automation",
        description:
            "Industrial control platforms designed for reliable automation and integrated plant operations.",
    },
    {
        name: "Mitsubishi Electric",
        type: "MELSEC",
        description:
            "High-speed PLC systems for machine control, motion applications and industrial automation.",
    },
    {
        name: "Omron",
        type: "SYSMAC",
        description:
            "Compact and scalable controllers for machine automation and intelligent production systems.",
    },
    {
        name: "Delta",
        type: "PLC",
        description:
            "Cost-effective automation controllers for machine builders and industrial applications.",
    },
];

/* =========================================================
   AUTOMATION CAPABILITIES
   ========================================================= */

const automationCapabilities = [
    {
        number: "01",
        title: "PLC Programming",
        description:
            "Structured PLC programming and control logic development based on machine sequence, process requirements and operational objectives.",
        icon: "⌘",
    },
    {
        number: "02",
        title: "HMI Development",
        description:
            "Operator interfaces designed for clear process visualization, diagnostics, alarms, controls and real-time machine monitoring.",
        icon: "▣",
    },
    {
        number: "03",
        title: "SCADA Integration",
        description:
            "Supervisory control and data acquisition solutions connecting field devices, PLCs and operational dashboards.",
        icon: "◫",
    },
    {
        number: "04",
        title: "VFD & Motion Control",
        description:
            "Drive configuration, speed control and motion integration for motors, conveyors, pumps and automated machinery.",
        icon: "↗",
    },
    {
        number: "05",
        title: "Remote I/O",
        description:
            "Distributed I/O architectures for flexible machine layouts, reduced wiring and reliable field-level communication.",
        icon: "⌁",
    },
    {
        number: "06",
        title: "Industrial Networking",
        description:
            "PLC communication and industrial network integration across controllers, HMIs, drives and field devices.",
        icon: "◎",
    },
];

/* =========================================================
   COMMUNICATION PROTOCOLS
   ========================================================= */

const communicationProtocols = [
    "Modbus RTU",
    "Modbus TCP",
    "PROFINET",
    "EtherNet/IP",
    "OPC UA",
    "MQTT",
];

/* =========================================================
   ENGINEERING SERVICES
   ========================================================= */

const plcServices = [
    {
        number: "01",
        title: "Control System Design",
        description:
            "Control architecture developed around your machine, process and production requirements.",
        icon: "◈",
    },
    {
        number: "02",
        title: "PLC Software Development",
        description:
            "Reliable control logic with structured programming, sequencing, interlocks and machine diagnostics.",
        icon: "⌘",
    },
    {
        number: "03",
        title: "HMI & Visualization",
        description:
            "Operator-friendly interfaces for machine control, process monitoring, alarms and diagnostics.",
        icon: "▣",
    },
    {
        number: "04",
        title: "Commissioning & Integration",
        description:
            "PLC, HMI, drives, sensors and field devices integrated and commissioned as one complete system.",
        icon: "↗",
    },
];

/* =========================================================
   INDUSTRIES
   ========================================================= */

const industries = [
    "Manufacturing",
    "Process Industries",
    "Automotive",
    "Water & Utilities",
    "Material Handling",
    "Machine Building",
];

/* =========================================================
   CONTROL ARCHITECTURE
   ========================================================= */

const controlLayers = [
    {
        number: "01",
        title: "Field Devices",
        description: "Sensors & Actuators",
        icon: "⌁",
    },
    {
        number: "02",
        title: "PLC Control",
        description: "Logic & Sequencing",
        icon: "◈",
    },
    {
        number: "03",
        title: "HMI / SCADA",
        description: "Visualization",
        icon: "▣",
    },
    {
        number: "04",
        title: "Operations",
        description: "Monitoring & Decisions",
        icon: "◎",
    },
];

/* =========================================================
   COMPONENT
   ========================================================= */

const PLC = () => {

    const navigate = useNavigate();

    const scrollToCapabilities = () => {
        document
            .getElementById("plc-capabilities")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

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
        <main className="plc-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section
                className="plc-hero"
                style={{
                    backgroundImage: `url(${plcBackground})`,
                }}
            >

                <div className="plc-hero-overlay" />
                <div className="plc-hero-grid" />
                <div className="plc-hero-glow plc-hero-glow-one" />
                <div className="plc-hero-glow plc-hero-glow-two" />

                {/* Animated scanning beam */}
                <div className="plc-scan-beam" />

                {/* Ambient particles */}
                <div className="plc-particles">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>

                <div className="plc-container plc-hero-container">

                    {/* LEFT CONTENT */}

                    <div
                        className="plc-hero-content"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >

                        <div
                            className="plc-status-line"
                            data-aos="fade-down"
                            data-aos-delay="100"
                        >

                            <span className="plc-status-dot" />

                            <span>
                                INDUSTRIAL AUTOMATION
                            </span>

                            <i />

                            <span>
                                PLC SYSTEMS ONLINE
                            </span>

                        </div>

                        <span
                            className="plc-eyebrow"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            PLC • HMI • SCADA • DRIVES
                        </span>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            Intelligent
                            <span> Control.</span>
                            <br />
                            Built for
                            <span> Industry.</span>
                        </h1>

                        <p
                            className="plc-hero-description"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            Circuits ES engineers PLC-based automation
                            systems that connect machines, processes,
                            operators and industrial data into one
                            coordinated control environment.
                        </p>

                        <p
                            className="plc-hero-subtext"
                            data-aos="fade-up"
                            data-aos-delay="450"
                        >
                            From control logic and HMI development to
                            industrial networking, drives and commissioning,
                            we build automation around the way your
                            production actually works.
                        </p>



                        <div
                            className="plc-hero-actions"
                            data-aos="fade-up"
                            data-aos-delay="550"
                        >

                            <button
                                className="plc-btn plc-btn-primary"
                                type="button"
                                onClick={() => navigate("/quote")}
                            >
                                Discuss Your Automation
                                <span>↗</span>
                            </button>


                            <button
                                className="plc-btn plc-btn-secondary"
                                type="button"
                                onClick={scrollToCapabilities}
                            >
                                Explore Capabilities
                                <span>↓</span>
                            </button>

                        </div>

                        {/* <div
                            className="plc-hero-actions"
                            data-aos="fade-up"
                            data-aos-delay="550"
                        >

                            <button
                                className="plc-btn plc-btn-primary"
                                type="button"

                            >
                                Discuss Your Automation
                                <span>↗</span>
                            </button>

                            <button
                                className="plc-btn plc-btn-secondary"
                                type="button"
                            >
                                Explore Capabilities
                                <span>↓</span>
                            </button>

                        </div> */}

                        {/* SYSTEM METRICS */}

                        <div
                            className="plc-hero-metrics"
                            data-aos="fade-up"
                            data-aos-delay="650"
                        >

                            <div className="plc-metric">
                                <strong>PLC</strong>
                                <span>Control Logic</span>
                            </div>

                            <div className="plc-metric-divider" />

                            <div className="plc-metric">
                                <strong>HMI</strong>
                                <span>Visualization</span>
                            </div>

                            <div className="plc-metric-divider" />

                            <div className="plc-metric">
                                <strong>SCADA</strong>
                                <span>Supervision</span>
                            </div>

                            <div className="plc-metric-divider" />

                            <div className="plc-metric">
                                <strong>I/O</strong>
                                <span>Field Layer</span>
                            </div>

                        </div>

                    </div>


                    {/* RIGHT SYSTEM VISUAL */}

                    <div
                        className="plc-hero-visual"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                    >

                        <div className="plc-system-ring plc-system-ring-one" />
                        <div className="plc-system-ring plc-system-ring-two" />

                        <div className="plc-system-core">

                            <div className="plc-core-status">
                                <span className="plc-status-dot" />
                                SYSTEM STATUS
                            </div>

                            <div className="plc-core-label">
                                PLC
                            </div>

                            <div className="plc-core-subtitle">
                                CONTROL ENGINE
                            </div>

                            <div className="plc-core-bars">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="plc-core-footer">
                                <span>RUN</span>
                                <span>ONLINE</span>
                                <span>24/7</span>
                            </div>

                        </div>

                        {/* Architecture nodes */}

                        <div
                            className="plc-architecture-node plc-node-hmi"
                            data-aos="fade-left"
                            data-aos-delay="500"
                        >
                            <span>▣</span>

                            <div>
                                <strong>HMI</strong>
                                <small>Operator Layer</small>
                            </div>
                        </div>

                        <div
                            className="plc-architecture-node plc-node-scada"
                            data-aos="fade-left"
                            data-aos-delay="650"
                        >
                            <span>◫</span>

                            <div>
                                <strong>SCADA</strong>
                                <small>Supervisory Layer</small>
                            </div>
                        </div>

                        <div
                            className="plc-architecture-node plc-node-drive"
                            data-aos="fade-right"
                            data-aos-delay="800"
                        >
                            <span>↗</span>

                            <div>
                                <strong>DRIVES</strong>
                                <small>Motion Control</small>
                            </div>
                        </div>

                        <div
                            className="plc-architecture-node plc-node-field"
                            data-aos="fade-right"
                            data-aos-delay="950"
                        >
                            <span>⌁</span>

                            <div>
                                <strong>I/O</strong>
                                <small>Field Devices</small>
                            </div>
                        </div>

                        {/* Connection lines */}

                        <div className="plc-hero-connection plc-connection-one" />
                        <div className="plc-hero-connection plc-connection-two" />
                        <div className="plc-hero-connection plc-connection-three" />
                        <div className="plc-hero-connection plc-connection-four" />

                        {/* Moving signal pulses */}

                        <span className="plc-signal plc-signal-one" />
                        <span className="plc-signal plc-signal-two" />
                        <span className="plc-signal plc-signal-three" />
                        <span className="plc-signal plc-signal-four" />

                    </div>

                </div>

                {/* Bottom technology strip */}

                <div
                    className="plc-hero-tech-strip"
                    data-aos="fade-up"
                    data-aos-delay="750"
                >
                    <span>PLC CONTROL</span>
                    <i />
                    <span>HMI</span>
                    <i />
                    <span>SCADA</span>
                    <i />
                    <span>INDUSTRIAL NETWORKING</span>
                    <i />
                    <span>VFD</span>
                    <i />
                    <span>REMOTE I/O</span>
                </div>

            </section>


            {/* =================================================
                INTRO / CONTROL ARCHITECTURE
            ================================================= */}

            <section className="plc-intro">

                <div className="plc-container">

                    <div
                        className="plc-section-heading"
                        data-aos="fade-up"
                    >

                        <span className="plc-section-label">
                            CONTROL ARCHITECTURE
                        </span>

                        <h2>
                            One system.
                            <span>
                                Every layer connected.
                            </span>
                        </h2>

                        <p>
                            A modern automation system is more than a PLC.
                            It is the coordinated interaction between
                            field devices, control logic, visualization,
                            communication and operations.
                        </p>

                    </div>


                    <div className="plc-control-flow">

                        {controlLayers.map((layer, index) => (
                            <React.Fragment key={layer.number}>

                                <article
                                    className="plc-flow-item"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 120}
                                >

                                    <div className="plc-flow-icon">
                                        {layer.icon}
                                    </div>

                                    <span className="plc-flow-number">
                                        {layer.number}
                                    </span>

                                    <strong>
                                        {layer.title}
                                    </strong>

                                    <small>
                                        {layer.description}
                                    </small>

                                </article>

                                {index < controlLayers.length - 1 && (
                                    <div className="plc-flow-line">
                                        <span />
                                    </div>
                                )}

                            </React.Fragment>
                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                ENGINEERING VISUAL
            ================================================= */}

            <section className="plc-engineering-showcase">

                <div className="plc-container">

                    <div className="plc-showcase">

                        <div
                            className="plc-showcase-image"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >

                            <img
                                src={plcHero}
                                alt="Industrial PLC automation architecture"
                            />

                            <div className="plc-showcase-overlay" />

                            <div className="plc-showcase-status">
                                <span className="plc-status-dot" />
                                LIVE ENGINEERING VIEW
                            </div>

                            <div
                                className="plc-showcase-tag plc-showcase-tag-one"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                PLC
                            </div>

                            <div
                                className="plc-showcase-tag plc-showcase-tag-two"
                                data-aos="zoom-in"
                                data-aos-delay="650"
                            >
                                HMI
                            </div>

                            <div
                                className="plc-showcase-tag plc-showcase-tag-three"
                                data-aos="zoom-in"
                                data-aos-delay="800"
                            >
                                SCADA
                            </div>

                            <div
                                className="plc-showcase-tag plc-showcase-tag-four"
                                data-aos="zoom-in"
                                data-aos-delay="950"
                            >
                                VFD
                            </div>

                        </div>


                        <div
                            className="plc-showcase-content"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >

                            <span className="plc-section-label">
                                ENGINEERED CONTROL
                            </span>

                            <h2>
                                From machine signals
                                <span>
                                    to intelligent decisions.
                                </span>
                            </h2>

                            <p>
                                Every automation layer has a role.
                                Our engineering approach brings them
                                together into a dependable control
                                architecture designed around the
                                machine and process.
                            </p>

                            <div className="plc-showcase-points">

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <span>01</span>
                                    <strong>
                                        Real-time control
                                    </strong>
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <span>02</span>
                                    <strong>
                                        Process visibility
                                    </strong>
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <span>03</span>
                                    <strong>
                                        Connected equipment
                                    </strong>
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >
                                    <span>04</span>
                                    <strong>
                                        Reliable operations
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <section id="plc-capabilities" className="plc-capabilities">

                <div className="plc-container">

                    <div
                        className="plc-section-heading plc-heading-left"
                        data-aos="fade-up"
                    >

                        <span className="plc-section-label">
                            AUTOMATION CAPABILITIES
                        </span>

                        <h2>
                            From control logic
                            <span>
                                to complete automation.
                            </span>
                        </h2>

                        <p>
                            Our automation engineering capabilities
                            cover the complete control layer of
                            industrial machinery and processes.
                        </p>

                    </div>


                    <div className="plc-capability-grid">

                        {automationCapabilities.map(
                            (capability, index) => (

                                <article
                                    className="plc-capability-card"
                                    key={capability.number}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >

                                    <div className="plc-capability-top">

                                        <span className="plc-capability-number">
                                            {capability.number}
                                        </span>

                                        <span className="plc-capability-icon">
                                            {capability.icon}
                                        </span>

                                    </div>

                                    <h3>
                                        {capability.title}
                                    </h3>

                                    <p>
                                        {capability.description}
                                    </p>

                                    <span className="plc-card-link">
                                        Explore capability
                                        <span>→</span>
                                    </span>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                PLC PLATFORMS
            ================================================= */}

            <section className="plc-platforms">

                <div className="plc-container">

                    <div
                        className="plc-platform-header"
                        data-aos="fade-up"
                    >

                        <div>

                            <span className="plc-section-label">
                                PLC PLATFORMS
                            </span>

                            <h2>
                                Engineering across
                                <span>
                                    leading control platforms.
                                </span>
                            </h2>

                        </div>

                        <p>
                            We work with established industrial
                            control platforms to match the
                            controller architecture to your
                            application, equipment and project
                            requirements.
                        </p>

                    </div>


                    <div className="plc-platform-grid">

                        {plcPlatforms.map(
                            (platform, index) => (

                                <article
                                    className="plc-platform-card"
                                    key={platform.name}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >

                                    <div className="plc-platform-index">
                                        0{index + 1}
                                    </div>

                                    <div className="plc-platform-content">

                                        <span>
                                            {platform.type}
                                        </span>

                                        <h3>
                                            {platform.name}
                                        </h3>

                                        <p>
                                            {platform.description}
                                        </p>

                                    </div>

                                    <div className="plc-platform-arrow">
                                        ↗
                                    </div>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                COMMUNICATION
            ================================================= */}

            <section className="plc-communication">

                <div className="plc-container">

                    <div className="plc-communication-panel">

                        <div
                            className="plc-communication-content"
                            data-aos="fade-right"
                        >

                            <span className="plc-section-label">
                                INDUSTRIAL COMMUNICATION
                            </span>

                            <h2>
                                Keep every device
                                <span>
                                    speaking the same language.
                                </span>
                            </h2>

                            <p>
                                Industrial automation depends on
                                dependable communication between
                                controllers, HMIs, drives, remote I/O,
                                SCADA systems and field devices.
                            </p>


                            <div className="plc-protocol-list">

                                {communicationProtocols.map(
                                    (protocol, index) => (

                                        <span
                                            key={protocol}
                                            className="plc-protocol"
                                            data-aos="zoom-in"
                                            data-aos-delay={index * 100}
                                        >
                                            {protocol}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>


                        {/* NETWORK VISUAL */}

                        <div
                            className="plc-network-visual"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                        >

                            <div className="plc-network-grid" />

                            <div
                                className="plc-network-node plc-network-field"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <span>⌁</span>
                                FIELD
                            </div>

                            <div
                                className="plc-network-node plc-network-plc"
                                data-aos="zoom-in"
                                data-aos-delay="450"
                            >
                                <span>◈</span>
                                PLC
                            </div>

                            <div
                                className="plc-network-node plc-network-hmi"
                                data-aos="fade-left"
                                data-aos-delay="600"
                            >
                                <span>▣</span>
                                HMI
                            </div>

                            <div
                                className="plc-network-node plc-network-scada"
                                data-aos="fade-left"
                                data-aos-delay="750"
                            >
                                <span>◫</span>
                                SCADA
                            </div>

                            <div className="plc-network-line plc-network-line-one" />
                            <div className="plc-network-line plc-network-line-two" />
                            <div className="plc-network-line plc-network-line-three" />

                            <span className="plc-network-pulse plc-network-pulse-one" />
                            <span className="plc-network-pulse plc-network-pulse-two" />
                            <span className="plc-network-pulse plc-network-pulse-three" />

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                ENGINEERING SERVICES
            ================================================= */}

            <section className="plc-services">

                <div className="plc-container">

                    <div
                        className="plc-section-heading"
                        data-aos="fade-up"
                    >

                        <span className="plc-section-label">
                            ENGINEERING SERVICES
                        </span>

                        <h2>
                            From engineering
                            <span>
                                to commissioning.
                            </span>
                        </h2>

                    </div>


                    <div className="plc-service-list">

                        {plcServices.map((service, index) => (

                            <article
                                className="plc-service-row"
                                key={service.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >

                                <div className="plc-service-icon">
                                    {service.icon}
                                </div>

                                <span className="plc-service-number">
                                    {service.number}
                                </span>

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.description}
                                </p>

                                {/* <span className="plc-service-arrow">
                                    ↗
                                </span> */}

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                INDUSTRIES
            ================================================= */}

            <section className="plc-industries">

                <div className="plc-container">

                    <div className="plc-industries-content">

                        <div data-aos="fade-right">

                            <span className="plc-section-label">
                                APPLICATION AREAS
                            </span>

                            <h2>
                                Built around your
                                <span>
                                    industrial environment.
                                </span>
                            </h2>

                            <p>
                                Automation architecture is shaped
                                by the process, production environment
                                and operational requirements of every
                                facility.
                            </p>

                            <div
                                className="plc-industry-statement"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                CONTROL
                                <span>
                                    ADAPTS.
                                </span>
                            </div>

                        </div>


                        <div className="plc-industry-list">

                            {industries.map(
                                (industry, index) => (

                                    <div
                                        className="plc-industry-item"
                                        key={industry}
                                        data-aos="fade-left"
                                        data-aos-delay={index * 100}
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
                CTA
            ================================================= */}

            <section
                className="plc-cta"
                style={{
                    backgroundImage: `url(${plcBackground})`,
                }}
            >

                <div className="plc-cta-overlay" />

                <div className="plc-container">

                    <div className="plc-cta-inner">

                        <div
                            className="plc-cta-content"
                            data-aos="fade-right"
                        >

                            <div className="plc-cta-status">

                                <span className="plc-status-dot" />

                                READY FOR THE NEXT SYSTEM

                            </div>

                            <span className="plc-section-label">
                                START YOUR AUTOMATION PROJECT
                            </span>

                            <h2>
                                Let's engineer your
                                <span>
                                    next control system.
                                </span>
                            </h2>

                            <p>
                                Tell us about your machine, process or
                                automation requirement and our engineering
                                team can help define the right control
                                architecture.
                            </p>

                        </div>


                        <div
                            className="plc-cta-actions"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            {/* 
                            <button
                                className="plc-btn plc-btn-primary"
                                type="button"
                            >
                                Request Automation Quote
                                <span>↗</span>
                            </button>

                            <button
                                className="plc-btn plc-btn-secondary"
                                type="button"
                            >
                                Talk to Engineering
                                <span>→</span>
                            </button> */}

                            <a
                                href="/quote"
                                className="plc-btn plc-btn-primary"
                            >
                                Request Automation Quote
                                <span>↗</span>
                            </a>

                            <a
                                href="tel:9445468377"
                                className="plc-btn plc-btn-secondary"
                            >
                                Talk to Engineering
                                <span>→</span>
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default PLC;