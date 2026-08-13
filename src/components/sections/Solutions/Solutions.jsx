


import "./Solutions.css";

import { FaWrench } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import {
    HiOutlineChip,
    HiOutlineCog,
    HiOutlineDesktopComputer,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineArrowRight,
} from "react-icons/hi";


/* =========================================================
   SOLUTIONS DATA
   ========================================================= */
const solutions = [
    {
        icon: <HiOutlineLightningBolt />,
        title: "LT Panels",
        description:
            "Custom-engineered Low Voltage (LT) panels, including MCC, PCC, APFC, Synchronizing, Feeder Pillar and Distribution Panels, designed for safe, reliable and efficient power distribution.",
        link: "/solutions/lt-panels",
    },

    {
        icon: <HiOutlineChip />,
        title: "PLC Automation",
        description:
            "Intelligent PLC programming and industrial automation solutions that optimize production, improve efficiency and reduce downtime.",
        link: "/solutions/plc",
    },

    {
        icon: <HiOutlineDesktopComputer />,
        title: "SCADA Systems",
        description:
            "Advanced monitoring and visualization systems providing real-time control, diagnostics and centralized process management.",
        link: "/quote",
    },

    {
        icon: <HiOutlineCog />,
        title: "VFD & Motor Control",
        description:
            "Energy-efficient motor control solutions using Variable Frequency Drives for smooth operation, energy savings and process optimization.",
        link: "/quote",
    },

    {
        icon: <FaWrench />,
        title: "Installation & Commissioning",
        description:
            "Complete installation, testing and commissioning services ensuring every system performs safely and efficiently from day one.",
        // link: "/solutions/installation-commissioning",
        link: "/quote",
    },

    {
        icon: <HiOutlineShieldCheck />,
        title: "AMC & Technical Support",
        description:
            "Reliable preventive maintenance, troubleshooting, upgrades and technical support to keep your operations running without interruption.",
        // link: "/solutions/amc-support",
        link: "/quote",
    },
];

const Solutions = () => {

    const navigate = useNavigate();


    return (

        <section
            id="solutions"
            className="solutions-section"
        >

            {/* =================================================
                TECHNICAL BACKGROUND
                ================================================= */}

            <div
                className="solutions-background-grid"
                aria-hidden="true"
            />


            <div className="solutions-container">


                {/* =================================================
                    HEADER
                    ================================================= */}

                <div
                    className="solutions-header"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-out-cubic"
                >

                    <span className="section-tag">
                        OUR SOLUTIONS
                    </span>


                    <h2>

                        Comprehensive

                        <span>
                            {" "}Electrical & Automation Solutions
                        </span>

                    </h2>


                    <p>

                        Circuits ES delivers complete electrical
                        engineering, industrial automation and
                        control panel solutions tailored to modern
                        industries. From design and manufacturing
                        to installation and long-term support, we
                        provide reliable solutions that improve
                        efficiency, safety and operational performance.

                    </p>

                </div>


                {/* =================================================
                    SOLUTIONS GRID
                    ================================================= */}

                <div className="solutions-grid">

                    {solutions.map(
                        (item, index) => (

                            <article
                                key={item.title}
                                className="solution-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 90}
                                data-aos-duration="700"
                                data-aos-easing="ease-out-cubic"
                            >


                                {/* =================================================
                                    CARD INDEX
                                    ================================================= */}

                                <span className="solution-index">

                                    {String(index + 1).padStart(2, "0")}

                                </span>


                                {/* =================================================
                                    ICON
                                    ================================================= */}

                                <div className="solution-icon">

                                    {item.icon}

                                </div>


                                {/* =================================================
                                    CONTENT
                                    ================================================= */}

                                <div className="solution-content">

                                    <h3>
                                        {item.title}
                                    </h3>


                                    <p>
                                        {item.description}
                                    </p>

                                </div>


                                {/* =================================================
                                    ACTION
                                    ================================================= */}

                                {item.link && (

                                    <button
                                        type="button"
                                        className="solution-btn"
                                        onClick={() =>
                                            navigate(item.link)
                                        }
                                    >

                                        <span>
                                            Learn More
                                        </span>

                                        <HiOutlineArrowRight />

                                    </button>

                                )}


                                {/* =================================================
                                    TECHNICAL LINE
                                    ================================================= */}

                                <span
                                    className="solution-card-line"
                                    aria-hidden="true"
                                />

                            </article>

                        )
                    )}

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                    ================================================= */}

                <div
                    className="solutions-bottom"
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration="700"
                >

                    <span className="solutions-bottom-label">

                        <span className="solutions-bottom-dot" />

                        ENGINEERING CAPABILITY

                    </span>


                    <p>
                        Electrical systems engineered around
                        the application — not a standard template.
                    </p>

                </div>

            </div>

        </section>

    );

};


export default Solutions;