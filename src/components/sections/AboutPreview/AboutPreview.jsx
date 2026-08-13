
import "./AboutPreview.css";

import { Link } from "react-router-dom";

import AboutImage from "../../../assets/images/About.png";

import {
    HiOutlineCheckCircle,
} from "react-icons/hi";

import {
    ArrowUpRight,
    Zap,
    Settings,
    Shield,
} from "react-feather";


/* =========================================================
   CAPABILITIES
   ========================================================= */

const capabilities = [

    {
        icon: <Zap size={20} />,
        title: "Electrical Engineering",
        text: "Application-driven panel and power solutions.",
    },

    {
        icon: <Settings size={20} />,
        title: "Industrial Automation",
        text: "Control systems designed around your process.",
    },

    {
        icon: <Shield size={20} />,
        title: "Built & Tested",
        text: "Quality-focused fabrication and verification.",
    },

];


const AboutPreview = () => {

    return (

        <section
            id="about"
            className="about-preview"
        >

            {/* =================================================
                BACKGROUND
                ================================================= */}

            <div
                className="about-preview-grid"
                aria-hidden="true"
            />

            <div
                className="about-preview-glow"
                aria-hidden="true"
            />


            {/* =================================================
                MAIN CONTAINER
                ================================================= */}

            <div className="about-preview-container">


                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div
                    className="about-preview-content"
                    data-aos="fade-up"
                    data-aos-duration="850"
                    data-aos-easing="ease-out-cubic"
                >


                    {/* =================================================
                        EYEBROW
                        ================================================= */}

                    <div className="about-preview-eyebrow">

                        <span className="about-preview-eyebrow-line" />

                        ABOUT CIRCUITS ES

                    </div>


                    {/* =================================================
                        HEADING
                        ================================================= */}

                    <h2>

                        We don't just build

                        <br />

                        <span>
                            panels.
                        </span>

                        <br />

                        We engineer

                        <br />

                        <span>
                            solutions.
                        </span>

                    </h2>


                    {/* =================================================
                        DESCRIPTION
                        ================================================= */}

                    <p className="about-preview-description">

                        Circuits Energy System designs and manufactures
                        electrical control panels and industrial automation
                        solutions for real-world production environments.

                    </p>


                    <p className="about-preview-description about-preview-description-secondary">

                        From engineering and panel fabrication to testing,
                        installation and support, we build systems around
                        the way your operation actually works.

                    </p>


                    {/* =================================================
                        CAPABILITIES
                        ================================================= */}

                    <div className="about-preview-capabilities">

                        {capabilities.map(
                            (item, index) => (

                                <div
                                    className="about-capability"
                                    key={item.title}
                                    data-aos="fade-up"
                                    data-aos-delay={
                                        150 + index * 100
                                    }
                                    data-aos-duration="650"
                                >

                                    <div
                                        className="about-capability-icon"
                                    >
                                        {item.icon}
                                    </div>


                                    <div
                                        className="about-capability-content"
                                    >

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.text}
                                        </p>

                                    </div>

                                </div>

                            )
                        )}

                    </div>


                    {/* =================================================
                        TRUST POINTS
                        ================================================= */}

                    <div
                        className="about-preview-points"
                        data-aos="fade-up"
                        data-aos-delay="450"
                    >

                        <div>

                            <HiOutlineCheckCircle />

                            <span>
                                Customized engineering
                            </span>

                        </div>


                        <div>

                            <HiOutlineCheckCircle />

                            <span>
                                Factory-tested solutions
                            </span>

                        </div>


                        <div>

                            <HiOutlineCheckCircle />

                            <span>
                                Project-focused support
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        CTA
                        ================================================= */}

                    <Link
                        to="/services"
                        className="primary-btn about-preview-button"
                        data-aos="fade-up"
                        data-aos-delay="550"
                    >

                        <span>
                            Discover Circuits ES
                        </span>

                        <ArrowUpRight
                            size={18}
                        />

                    </Link>

                </div>


                {/* =================================================
                    VISUAL
                    ================================================= */}

                <div
                    className="about-preview-visual"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                >


                    {/* =================================================
                        FRAME
                        ================================================= */}

                    <div
                        className="about-visual-frame"
                        aria-hidden="true"
                    >

                        <span
                            className="
                                about-frame-corner
                                corner-tl
                            "
                        />

                        <span
                            className="
                                about-frame-corner
                                corner-tr
                            "
                        />

                        <span
                            className="
                                about-frame-corner
                                corner-bl
                            "
                        />

                        <span
                            className="
                                about-frame-corner
                                corner-br
                            "
                        />

                    </div>


                    {/* =================================================
                        MAIN IMAGE
                        ================================================= */}

                    <div className="about-main-image">

                        <img
                            src={AboutImage}
                            alt="
                                Circuits ES electrical panel engineering
                                and industrial automation
                            "
                        />

                    </div>


                    {/* =================================================
                        ENGINEERING LABEL
                        ================================================= */}

                    <div
                        className="about-image-label"
                        data-aos="fade-up"
                        data-aos-delay="350"
                    >

                        <span
                            className="about-image-status"
                        />


                        <div>

                            <strong>
                                ENGINEERED FOR INDUSTRY
                            </strong>

                            <span>
                                Electrical · Automation · Control
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        SPEC CARD
                        ================================================= */}

                    <div className="about-spec-card">

                        <span>
                            CES / ENGINEERING
                        </span>

                        <strong>

                            DESIGN

                            <br />

                            BUILD

                            <br />

                            TEST

                        </strong>

                    </div>


                    {/* =================================================
                        TECHNICAL LINE
                        ================================================= */}

                    <div
                        className="about-visual-line"
                        aria-hidden="true"
                    />

                </div>

            </div>


            {/* =================================================
                BOTTOM STATEMENT
                ================================================= */}

            <div
                className="about-preview-bottom"
                data-aos="fade-up"
                data-aos-delay="200"
            >

                <div className="about-bottom-label">

                    <span
                        className="about-bottom-dot"
                    />

                    ENGINEERING-LED

                </div>


                <p>
                    Built around your application,
                    not from a template.
                </p>

            </div>

        </section>

    );

};


export default AboutPreview;