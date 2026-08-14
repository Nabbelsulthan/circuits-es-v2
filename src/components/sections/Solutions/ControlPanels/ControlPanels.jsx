



import "./ControlPanels.css";

import { Link } from "react-router-dom";

import PanelExplorer from "../../../ explorer/PanelExplorer";


/* =========================================================
   LT PANEL TYPES
   ========================================================= */

const panelTypes = [

    {
        title: "PCC Panels",
        icon: "🔌",
        description:
            "Power Control Centre (PCC) panels designed for safe and efficient low-voltage power distribution in industrial and commercial facilities.",
    },

    {
        title: "MCC Panels",
        icon: "⚙️",
        description:
            "Motor Control Centre (MCC) panels engineered for centralized motor control, protection and monitoring of industrial motors.",
    },

    {
        title: "APFC Panels",
        icon: "⚡",
        description:
            "Automatic Power Factor Correction (APFC) panels that improve power quality, reduce reactive power and increase energy efficiency.",
    },

    {
        title: "DG Synchronizing Panels",
        icon: "🔋",
        description:
            "Generator synchronization panels designed for automatic load sharing, seamless synchronization and uninterrupted power management.",
    },

];


/* =========================================================
   CONTROL PANELS PAGE
   ========================================================= */

const ControlPanels = () => {

    return (

        <main className="control-panels-page">


            {/* =================================================
                HERO
                ================================================= */}

            <section className="cp-hero">

                <div className="cp-container">

                    <div
                        className="cp-hero-content"
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-easing="ease-out-cubic"
                    >

                        {/* Global section label */}

                        <span className="section-tag">

                            LOW VOLTAGE (LT) PANEL SOLUTIONS

                        </span>


                        <h1>

                            Engineered Low Voltage

                            <br />

                            <span>
                                Panel Solutions
                            </span>

                        </h1>


                        <p>

                            CircuitsES designs and manufactures
                            custom-built Low Voltage (LT) panels for
                            safe power distribution, motor control,
                            power factor correction and generator
                            synchronization.

                            Every panel is engineered to deliver
                            reliability, safety, operational efficiency
                            and long-term performance.

                        </p>


                        {/* =================================================
                            ACTIONS
                            ================================================= */}

                        <div className="cp-buttons">

                            <Link
                                to="/quote"
                                className="primary-btn"
                            >

                                Request a Quote

                            </Link>


                            <a
                                href="#lt-panel-portfolio"
                                className="secondary-btn"
                            >

                                Explore LT Panels

                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        HERO IMAGE
                        ================================================= */}

                    <div
                        className="cp-hero-image"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out-cubic"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
                            alt="Low Voltage LT electrical control panel"
                        />

                    </div>

                </div>

            </section>


            {/* =================================================
                CUSTOM LT PANEL SOLUTIONS
                ================================================= */}

            <section className="cp-custom">

                <div className="cp-container">


                    {/* =================================================
                        SECTION HEADING
                        ================================================= */}

                    <div
                        className="section-heading"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >

                        <span className="section-tag">

                            CUSTOM LT PANEL SOLUTIONS

                        </span>


                        <h2>

                            Designed for Your Application.

                            <br />

                            <span>
                                Built for Your Process.
                            </span>

                        </h2>

                    </div>


                    {/* =================================================
                        CUSTOM CONTENT
                        ================================================= */}

                    <div className="custom-grid">


                        <div
                            className="custom-content"
                            data-aos="fade-right"
                            data-aos-duration="900"
                        >

                            <p>

                                At CircuitsES, we understand that every
                                industry has unique operational requirements.
                                That's why we design and manufacture custom
                                Low Voltage (LT) panels tailored to your
                                electrical systems, process requirements
                                and site conditions.

                            </p>


                            <p>

                                From engineering and component selection
                                to manufacturing, testing and commissioning,
                                every panel is built to deliver reliable
                                performance, safety, energy efficiency
                                and long service life.

                            </p>

                        </div>


                        {/* =================================================
                            CUSTOM FEATURES
                            ================================================= */}

                        <div className="custom-features">


                            <div
                                className="feature-card"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="100"
                            >

                                <span>
                                    ⚙️
                                </span>

                                <h3>
                                    Custom Design
                                </h3>

                                <p>

                                    Engineered specifically for your
                                    application and operational
                                    requirements.

                                </p>

                            </div>


                            <div
                                className="feature-card"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="180"
                            >

                                <span>
                                    📐
                                </span>

                                <h3>
                                    Engineered-to-Order
                                </h3>

                                <p>

                                    Every panel is designed according
                                    to customer specifications and
                                    project drawings.

                                </p>

                            </div>


                            <div
                                className="feature-card"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="260"
                            >

                                <span>
                                    🛡️
                                </span>

                                <h3>
                                    Quality & Safety
                                </h3>

                                <p>

                                    Built using premium components
                                    and tested before dispatch.

                                </p>

                            </div>


                            <div
                                className="feature-card"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="340"
                            >

                                <span>
                                    🏭
                                </span>

                                <h3>
                                    Industry Ready
                                </h3>

                                <p>

                                    Suitable for manufacturing,
                                    utilities, infrastructure and
                                    process industries.

                                </p>

                            </div>


                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                LT PANEL PORTFOLIO
                ================================================= */}

            <section
                id="lt-panel-portfolio"
                className="cp-panels"
            >

                <div className="cp-container">


                    {/* =================================================
                        SECTION HEADING
                        ================================================= */}

                    <div
                        className="section-heading"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >

                        <span className="section-tag">

                            OUR LT PANELS

                        </span>


                        <h2>

                            Power Distribution

                            <span>
                                {" "}Solutions
                            </span>

                        </h2>


                        <p>

                            Purpose-built low-voltage panels engineered
                            for dependable power distribution, motor
                            control and industrial electrical systems.

                        </p>

                    </div>


                    {/* =================================================
                        PANEL GRID
                        ================================================= */}

                    <div className="panel-grid">

                        {panelTypes.map(
                            (panel, index) => (

                                <article
                                    className="panel-card"
                                    key={panel.title}
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay={index * 120}
                                >


                                    {/* Panel Icon */}

                                    <div className="panel-icon">

                                        {panel.icon}

                                    </div>


                                    {/* Panel Content */}

                                    <div className="panel-card-content">

                                        <span className="panel-card-number">

                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}

                                        </span>


                                        <h3>
                                            {panel.title}
                                        </h3>


                                        <p>
                                            {panel.description}
                                        </p>

                                    </div>


                                    {/* Action */}

                                    <Link
                                        to="/quote"
                                        className="panel-card-link"
                                    >

                                    Learn More

                                        <span>
                                            ↗
                                        </span>

                                    </Link>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                INTERACTIVE LT PANEL EXPLORER
                ================================================= */}

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
            >

                <PanelExplorer />

            </div>


        </main>

    );

};


export default ControlPanels;