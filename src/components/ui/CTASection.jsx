import { ArrowRight } from "lucide-react";

const CTASection = ({
    tag = "LET'S WORK TOGETHER",
    title,
    description,
    primaryText = "Request Consultation",
    primaryTo = "/contact",
    secondaryText,
    secondaryTo,
    className = ""
}) => {

    return (

        <section
            className={`
                reusable-cta
                ${className}
            `.trim()}
        >

            <div className="container">

                <div
                    className="reusable-cta-box"
                    data-aos="zoom-in"
                >

                    <div className="reusable-cta-content">

                        {tag && (

                            <span className="section-tag">

                                {tag}

                            </span>

                        )}

                        <h2>

                            {title}

                        </h2>

                        {description && (

                            <p>

                                {description}

                            </p>

                        )}

                    </div>

                    <div className="reusable-cta-actions">

                        <a
                            href={primaryTo}
                            className="btn btn-primary"
                        >

                            <span>

                                {primaryText}

                            </span>

                            <ArrowRight size={18} />

                        </a>

                        {secondaryText && (

                            <a
                                href={secondaryTo}
                                className="btn btn-secondary"
                            >

                                <span>

                                    {secondaryText}

                                </span>

                                <ArrowRight size={18} />

                            </a>

                        )}

                    </div>

                </div>

            </div>

        </section>

    );

};

export default CTASection;