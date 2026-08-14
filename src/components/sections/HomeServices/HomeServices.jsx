import "./HomeServices.css";

import {
    DraftingCompass,
    Factory,
    Settings,
    Wrench,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

import Button from "../../ui/Button";

const HomeServices = () => {

    const services = [
        {
            number: "01",
            icon: DraftingCompass,
            title: "Electrical Engineering",
            description:
                "Application analysis, electrical design, CAD development and manufacturing-ready documentation.",
        },
        {
            number: "02",
            icon: Settings,
            title: "Automation & Integration",
            description:
                "PLC, HMI, SCADA, drives and industrial control system integration.",
        },
        {
            number: "03",
            icon: Factory,
            title: "Precision Manufacturing",
            description:
                "Panel fabrication, CNC cutting, bending, busbar fabrication and panel assembly.",
        },
        {
            number: "04",
            icon: Wrench,
            title: "Lifecycle Support",
            description:
                "Maintenance, troubleshooting, technical assistance, upgrades and retrofit support.",
        },
    ];

    return (
        <section id="home-services" className="home-services">

            <div className="home-services-container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="home-services-header">

                    <div className="home-services-heading">

                        <span className="home-services-eyebrow">
                            OUR SERVICES
                        </span>

                        <h2>
                            Engineering
                            <span>that works beyond the drawing.</span>
                        </h2>

                    </div>


                    <div className="home-services-intro">

                        <p>
                            From electrical engineering and automation
                            to precision manufacturing, commissioning
                            and ongoing support, we bring the complete
                            project lifecycle together.
                        </p>

                        <Button
                            to="/services"
                            variant="secondary"
                        >
                            Explore Our Services
                           
                        </Button>

                    </div>

                </div>


                {/* =================================================
                    MAIN SERVICE VISUAL
                ================================================= */}

                <div className="home-services-main">

                    {/* LEFT — ENGINEERING FLOW */}

                    <div className="home-services-flow">

                        <div className="flow-header">

                            <span>
                                CES ENGINEERING WORKFLOW
                            </span>

                            <span className="flow-status">
                                <i />
                                INTEGRATED
                            </span>

                        </div>


                        <div className="flow-content">

                            <div className="flow-line" />

                            <div className="flow-step active">

                                <div className="flow-icon">
                                    <DraftingCompass size={20} />
                                </div>

                                <div>
                                    <small>
                                        01
                                    </small>

                                    <strong>
                                        Engineering
                                    </strong>

                                    <span>
                                        Design & Documentation
                                    </span>
                                </div>

                            </div>


                            <div className="flow-step">

                                <div className="flow-icon">
                                    <Factory size={20} />
                                </div>

                                <div>
                                    <small>
                                        02
                                    </small>

                                    <strong>
                                        Manufacturing
                                    </strong>

                                    <span>
                                        Fabrication & Assembly
                                    </span>
                                </div>

                            </div>


                            <div className="flow-step">

                                <div className="flow-icon">
                                    <Settings size={20} />
                                </div>

                                <div>
                                    <small>
                                        03
                                    </small>

                                    <strong>
                                        Automation
                                    </strong>

                                    <span>
                                        Integration & Control
                                    </span>
                                </div>

                            </div>


                            <div className="flow-step">

                                <div className="flow-icon">
                                    <CheckCircle2 size={20} />
                                </div>

                                <div>
                                    <small>
                                        04
                                    </small>

                                    <strong>
                                        Commissioning
                                    </strong>

                                    <span>
                                        Testing & Verification
                                    </span>
                                </div>

                            </div>


                            <div className="flow-step">

                                <div className="flow-icon">
                                    <Wrench size={20} />
                                </div>

                                <div>
                                    <small>
                                        05
                                    </small>

                                    <strong>
                                        Support
                                    </strong>

                                    <span>
                                        Lifecycle Engineering
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT — SERVICE CARDS */}

                    <div className="home-services-grid">

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (
                                <article
                                    className="home-service-card"
                                    key={service.number}
                                >

                                    <div className="home-service-card-top">

                                        <span className="home-service-number">
                                            {service.number}
                                        </span>

                                        <div className="home-service-icon">
                                            <Icon size={21} />
                                        </div>

                                    </div>


                                    <div className="home-service-card-content">

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>

                                    </div>


                                    <div className="home-service-card-bottom">

                                        <span>
                                            EXPLORE
                                        </span>

                                        <ArrowUpRight size={16} />

                                    </div>

                                </article>
                            );

                        })}

                    </div>

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                ================================================= */}

                <div className="home-services-bottom">

                    <div className="home-services-bottom-line" />

                    <p>
                        One engineering partner from
                        <strong> concept to commissioning.</strong>
                    </p>

                    <Button
                        to="/services"
                        variant="primary"
                    >
                        View All Services
               
                    </Button>

                </div>

            </div>

        </section>
    );
};

export default HomeServices;