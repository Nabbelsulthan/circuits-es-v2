import IconBox from "./IconBox";

const FeatureCard = ({
    icon: Icon,
    tag,
    title,
    description,
    children,
    className = "",
    aos = "fade-up",
    delay
}) => {

    return (

        <article
            className={`
                feature-card
                ${className}
            `.trim()}

            data-aos={aos}

            {...(
                delay !== undefined
                    ? { "data-aos-delay": delay }
                    : {}
            )}
        >

            {Icon && (

                <IconBox
                    icon={Icon}
                    className="feature-card-icon"
                />

            )}

            {tag && (

                <span className="feature-card-tag">

                    {tag}

                </span>

            )}

            {title && (

                <h3>

                    {title}

                </h3>

            )}

            {description && (

                <p>

                    {description}

                </p>

            )}

            {children}

        </article>

    );

};

export default FeatureCard;