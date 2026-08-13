import IconBox from "./IconBox";

const ProcessTimeline = ({
    items = [],
    orientation = "horizontal",
    className = ""
}) => {

    return (

        <div
            className={`
    process-timeline
    process-timeline-${orientation}
    ${className}
`.trim()}

            style={
                orientation === "horizontal"
                    ? {
                        "--process-count": items.length
                    }
                    : undefined
            }
        >

            {items.map((item, index) => {

                const Icon = item.icon;

                return (

                    <div
                        className="process-step"
                        key={`${item.title}-${index}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >

                        <IconBox
                            icon={Icon}
                            size={30}
                            className="process-step-icon"
                        />

                        <div className="process-step-content">

                            <span className="process-step-number">

                                {String(index + 1).padStart(2, "0")}

                            </span>

                            <h3>

                                {item.title}

                            </h3>

                            {item.description && (

                                <p>

                                    {item.description}

                                </p>

                            )}

                        </div>

                        {index < items.length - 1 && (

                            <div
                                className="process-connector"
                                aria-hidden="true"
                            />

                        )}

                    </div>

                );

            })}

        </div>

    );

};

export default ProcessTimeline;