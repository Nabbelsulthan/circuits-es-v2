import "./ProgressTimeline.css";

const stages = [
    "Design",
    "Fabrication",
    "Assembly",
    "Wiring",
    "Testing",
    "Dispatch",
    "Delivered",
];

export default function ProgressTimeline({
    currentStage = 2,
}) {
    const projectCompleted =
        currentStage >= stages.length - 1;

    return (
        <div className="ces-progress-timeline">

            {/* =================================================
                DESKTOP / LARGE TABLET TIMELINE
            ================================================= */}

            <div className="ces-progress-desktop-scroll">

                <div className="ces-progress-desktop">

                    {stages.map((stage, index) => {

                        const completed =
                            projectCompleted
                                ? index <= currentStage
                                : index < currentStage;

                        const active =
                            !projectCompleted &&
                            index === currentStage;

                        return (
                            <div
                                key={stage}
                                className={`
                                    ces-progress-item
                                    ${completed ? "is-completed" : ""}
                                    ${active ? "is-active" : ""}
                                `}
                            >

                                {/* Circle */}

                                <div
                                    className={`
                                        ces-progress-circle
                                        ${completed ? "is-completed" : ""}
                                        ${active ? "is-active" : ""}
                                    `}
                                >
                                    {completed ? "✓" : ""}
                                </div>


                                {/* Label */}

                                <span className="ces-progress-label">
                                    {stage}
                                </span>


                                {/* Connecting Line */}

                                {index < stages.length - 1 && (
                                    <div
                                        className={`
                                            ces-progress-line
                                            ${index < currentStage
                                                ? "is-completed"
                                                : ""
                                            }
                                        `}
                                    />
                                )}

                            </div>
                        );
                    })}

                </div>

            </div>


            {/* =================================================
                MOBILE TIMELINE
            ================================================= */}

            <div className="ces-progress-mobile">

                {stages.map((stage, index) => {

                    const completed =
                        projectCompleted
                            ? index <= currentStage
                            : index < currentStage;

                    const active =
                        !projectCompleted &&
                        index === currentStage;

                    return (
                        <div
                            key={stage}
                            className={`
                                ces-mobile-progress-item
                                ${completed ? "is-completed" : ""}
                                ${active ? "is-active" : ""}
                            `}
                        >

                            <div
                                className={`
                                    ces-mobile-progress-icon
                                    ${completed ? "is-completed" : ""}
                                    ${active ? "is-active" : ""}
                                `}
                            >
                                {completed
                                    ? "✓"
                                    : active
                                        ? "●"
                                        : "○"
                                }
                            </div>


                            <div className="ces-mobile-progress-content">

                                <span className="ces-mobile-stage-name">
                                    {stage}
                                </span>

                                <span
                                    className={`
                                        ces-mobile-stage-status
                                        ${completed ? "is-completed" : ""}
                                        ${active ? "is-active" : ""}
                                    `}
                                >
                                    {completed
                                        ? "Completed"
                                        : active
                                            ? "In Progress"
                                            : "Pending"
                                    }
                                </span>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}