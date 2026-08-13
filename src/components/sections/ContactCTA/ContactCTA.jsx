import {
    ArrowUpRight,
    Factory,
} from "lucide-react";

import "./ContactCTA.css";


const ContactCTA = () => {

    return (

        <section className="contact-cta">

            <div className="contact-cta-container">

                {/* =================================================
                    TOP LABEL
                    ================================================= */}

                <div className="contact-cta-label">

                    <Factory />

                    <span>
                        ENGINEERED FOR INDUSTRY
                    </span>

                </div>


                {/* =================================================
                    MAIN CONTENT
                    ================================================= */}

                <div className="contact-cta-content">

                    <div className="contact-cta-heading">

                        <h2>
                            Have a project
                            <span> to build?</span>
                        </h2>

                    </div>


                    <div className="contact-cta-action">

                        <p>
                            From electrical panels to industrial
                            automation, let's build the right
                            solution for your application.
                        </p>


                        <a
                            href="/#contact"
                            className="contact-cta-button"
                        >

                            Start a Conversation

                            <ArrowUpRight />

                        </a>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM LINE
                    ================================================= */}

                <div className="contact-cta-bottom">

                    <span>
                        PANEL ENGINEERING
                    </span>

                    <span>
                        /
                    </span>

                    <span>
                        AUTOMATION
                    </span>

                    <span>
                        /
                    </span>

                    <span>
                        INDUSTRIAL SOLUTIONS
                    </span>

                </div>

            </div>

        </section>
    );
};


export default ContactCTA;