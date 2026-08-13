import {
    BadgeCheck,
    Cable,
    ClipboardCheck,
    Factory,
    ArrowUpRight,
} from "lucide-react";

import "./WhyChooseUs.css";


const WhyChooseUs = () => {

    const strengths = [
        {
            number: "01",
            icon: Factory,
            title: "Engineering First",
            text: "Every panel starts with understanding the application, load, process and operating environment."
        },
        {
            number: "02",
            icon: Cable,
            title: "Built In-House",
            text: "Engineering, fabrication, assembly and control wiring are brought together under one workflow."
        },
        {
            number: "03",
            icon: ClipboardCheck,
            title: "Tested Before Delivery",
            text: "Panels are inspected and functionally verified before they leave our facility."
        },
        {
            number: "04",
            icon: BadgeCheck,
            title: "Built for the Application",
            text: "From standard requirements to customised systems, every solution is built around the actual application."
        },
    ];


    return (
        <section
            id="why-us"
            className="why-us"
        >

            <div className="why-us-container">

                {/* =================================================
                    HEADER
                    ================================================= */}

                <div className="why-us-header">

                    <div className="why-us-eyebrow">
                        WHY CIRCUITSES
                    </div>


                    <div className="why-us-heading">

                        <h2>
                            More than a panel.
                            <br />

                            <span>
                                An engineered system.
                            </span>
                        </h2>


                        <p>
                            We bring engineering, fabrication, assembly,
                            testing and technical support together to
                            deliver electrical and automation systems
                            that are built for the way your industry works.
                        </p>

                    </div>

                </div>


                {/* =================================================
                    STRENGTHS
                    ================================================= */}

                <div className="why-us-grid">

                    {strengths.map((item) => {

                        const Icon = item.icon;

                        return (
                            <article
                                className="why-us-card"
                                key={item.number}
                            >

                                <div className="why-us-card-top">

                                    <span className="why-us-number">
                                        {item.number}
                                    </span>


                                    <div className="why-us-icon">
                                        <Icon />
                                    </div>

                                </div>


                                <div className="why-us-card-content">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>


                                <ArrowUpRight
                                    className="why-us-card-arrow"
                                />

                            </article>
                        );

                    })}

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                    ================================================= */}

                <div className="why-us-bottom">

                    <span>
                       Electrical Solutions Never Before
                    </span>

                    <div />

                    <strong>
                        Electrical Panels
                        <span> · </span>
                        Automation
                        <span> · </span>
                        Fabrication
                        <span> · </span>
                        Testing
                    </strong>

                </div>

            </div>

        </section>
    );
};


export default WhyChooseUs;