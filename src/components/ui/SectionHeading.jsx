const SectionHeading = ({
    tag,
    title,
    description,
    align = "center",
    className = ""
}) => {

    return (

        <div
            className={`
                section-heading
                section-heading-${align}
                ${className}
            `.trim()}
        >

            {tag && (

                <span className="section-tag">

                    {tag}

                </span>

            )}

            {title && (

                <h2>

                    {title}

                </h2>

            )}

            {description && (

                <p>

                    {description}

                </p>

            )}

        </div>

    );

};

export default SectionHeading;