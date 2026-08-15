



import "./AboutPreview.css";

import { Link } from "react-router-dom";

import AboutImage from "../../../assets/images/About.png";

import ISO9001Certificate from "../../../assets/certificates/ISO-9001-2015.pdf";

import ISO9001CertificatePreview
    from "../../../assets/certificates/ISO-9001-2015.jpg";

import {
    HiOutlineCheckCircle,
} from "react-icons/hi";

import {
    ArrowUpRight,
    Zap,
    Settings,
    Shield,
    Award,
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


/* =========================================================
   ABOUT PREVIEW
   ========================================================= */

const AboutPreview = () => {

    const isAndroid =
        /Android/i.test(navigator.userAgent);

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

                        ABOUT CIRCUITSES

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
                            Discover CircuitsES
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

                    {/* FRAME */}

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


                    {/* MAIN IMAGE */}

                    <div className="about-main-image">

                        <img
                            src={AboutImage}
                            alt="
                                CircuitsES electrical panel engineering
                                and industrial automation
                            "
                        />

                    </div>


                    {/* ENGINEERING LABEL */}

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


                    {/* SPEC CARD */}

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


                    {/* TECHNICAL LINE */}

                    <div
                        className="about-visual-line"
                        aria-hidden="true"
                    />

                </div>

            </div>


            {/* =================================================
                QUALITY & CERTIFICATION
            ================================================= */}

            <section
                className="about-certification"
                data-aos="fade-up"
                data-aos-duration="900"
            >

                <div className="about-certification-container">


                    {/* =================================================
                        CERTIFICATION CONTENT
                    ================================================= */}

                    <div className="about-certification-content">

                        <div className="about-preview-eyebrow">

                            <span className="about-preview-eyebrow-line" />

                            QUALITY & CERTIFICATION

                        </div>


                        <div className="about-certification-icon">

                            <Award size={24} />

                        </div>


                        <h2>

                            Quality is built into

                            <br />

                            <span>
                                every solution.
                            </span>

                        </h2>


                        <p>

                            Our quality management system reflects
                            our commitment to consistent engineering,
                            manufacturing and service standards.

                        </p>


                        <div className="about-certification-badge">

                            <strong>
                                ISO 9001:2015
                            </strong>

                            <span>
                                QUALITY MANAGEMENT SYSTEM
                            </span>

                        </div>


                        <div className="about-certification-details">

                            <div>

                                <span>
                                    CERTIFICATION NO.
                                </span>

                                <strong>
                                    711C0AB7
                                </strong>

                            </div>


                            <div>

                                <span>
                                    CERTIFIED
                                </span>

                                <strong>
                                    04 JUN 2026
                                </strong>

                            </div>


                            <div>

                                <span>
                                    VALID UNTIL
                                </span>

                                <strong>
                                    03 JUN 2029
                                </strong>

                            </div>

                        </div>


                        {/* <a
                            href={ISO9001Certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-certificate-button"
                        >

                            <span>
                                View ISO Certificate
                            </span>

                            <ArrowUpRight size={17} />

                        </a> */}

                    </div>


                    {/* =================================================
                        CERTIFICATE PREVIEW
                    ================================================= */}

                    <div
                        className="about-certificate-document"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >

                        <div className="certificate-document-frame">

                            <div className="certificate-document-top">

                                <span>
                                    CIRCUITS ENERGY SYSTEM
                                </span>

                                <span>
                                    ISO 9001:2015
                                </span>

                            </div>


                            {/* <div className="certificate-document-viewer">

                                <iframe
                                    src={`${ISO9001Certificate}#toolbar=0&navpanes=0&scrollbar=0`}
                                    title="Circuits Energy System ISO 9001:2015 Certificate"
                                />

                            </div> */}

                            <div className="certificate-document-viewer">

                                {isAndroid ? (

                                    <div className="certificate-android-preview">

                                        <img
                                            src={ISO9001CertificatePreview}
                                            alt="Circuits Energy System ISO 9001:2015 Certificate"
                                            className="certificate-preview-image"
                                        />

                                    </div>

                                ) : (

                                    <iframe
                                        src={`${ISO9001Certificate}#toolbar=0&navpanes=0&scrollbar=0`}
                                        title="Circuits Energy System ISO 9001:2015 Certificate"
                                    />

                                )}

                            </div>


                            <div className="certificate-document-bottom">

                                <span>
                                    QUALITY MANAGEMENT SYSTEM
                                </span>

                                {/* <a
                                    href={ISO9001Certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Certificate ↗
                                </a> */}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


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