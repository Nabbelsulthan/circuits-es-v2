import { useEffect, useState } from "react";
import "./ProjectDetails.css";
import { API_URL } from "../Config/Config";

export default function ProjectDetails() {

    const [openProject, setOpenProject] = useState(null);

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const customerId =
            localStorage.getItem("customerId");

        if (!customerId) {
            setLoading(false);
            return;
        }


        fetch(
            `${API_URL}/api/customers/${customerId}/projects`
        )
            .then((res) => {

                if (!res.ok) {
                    throw new Error(
                        "Failed to fetch projects"
                    );
                }

                return res.json();

            })
            .then((data) => {

                const sortedProjects =
                    [...data].sort((a, b) => {

                        if (
                            a.status === "Delivered" &&
                            b.status !== "Delivered"
                        ) {
                            return 1;
                        }

                        if (
                            a.status !== "Delivered" &&
                            b.status === "Delivered"
                        ) {
                            return -1;
                        }

                        return 0;

                    });

                setProjects(sortedProjects);

                setLoading(false);

            })
            .catch((error) => {

                console.error(
                    "Project details error:",
                    error
                );

                setLoading(false);

            });

    }, []);


    /* =========================================================
       LOADING
    ========================================================= */

    if (loading) {

        return (

            <div className="ces-project-details-wrapper">

                <div className="ces-project-details-card">

                    <div className="ces-project-details-skeleton">

                        <div className="ces-skeleton-line ces-skeleton-title" />

                        <div className="ces-skeleton-line ces-skeleton-subtitle" />

                    </div>

                </div>

            </div>

        );

    }


    /* =========================================================
       EMPTY
    ========================================================= */

    if (projects.length === 0) {

        return (

            <div className="ces-project-details-wrapper">

                <div className="ces-project-details-empty">

                    <div className="ces-empty-icon">
                        📁
                    </div>

                    <h3>
                        No Projects Available
                    </h3>

                    <p>
                        Your assigned projects will
                        appear here once they are created.
                    </p>

                </div>

            </div>

        );

    }


    /* =========================================================
       MAIN
    ========================================================= */

    return (

        <div className="ces-project-details-wrapper">

            {projects.map((project, index) => {

                const isOpen =
                    openProject === index;

                const isCompleted =
                    project.status === "Delivered";


                return (

                    <article
                        key={project.id}
                        className={`
                            ces-project-details-card
                            ${isOpen ? "is-open" : ""}
                        `}
                    >

                        {/* =====================================
                            HEADER
                        ===================================== */}

                        <button
                            type="button"
                            className="ces-project-details-header"
                            onClick={() =>
                                setOpenProject(
                                    isOpen
                                        ? null
                                        : index
                                )
                            }
                            aria-expanded={isOpen}
                        >

                            <div className="ces-project-details-heading">

                                <span
                                    className={`
                                        ces-project-details-tag
                                        ${isCompleted
                                            ? "is-completed"
                                            : "is-active"
                                        }
                                    `}
                                >
                                    {isCompleted
                                        ? "COMPLETED PROJECT"
                                        : "ACTIVE PROJECT"
                                    }
                                </span>


                                <h2>
                                    {project.project_name}
                                </h2>


                                <p className="ces-project-details-subtitle">

                                    {project.panel_type || "Panel"}

                                    <span className="ces-project-details-dot">
                                        •
                                    </span>

                                    {project.status || "Pending"}

                                </p>

                            </div>


                            {/* =================================
                                HEADER RIGHT
                            ================================= */}

                            <div className="ces-project-details-header-right">

                                <div className="ces-project-completion">

                                    <span>
                                        {project.completion_percentage || 0}%
                                    </span>

                                    <small>
                                        Complete
                                    </small>

                                </div>


                                <span
                                    className={`
                                        ces-project-dropdown-icon
                                        ${isOpen ? "is-open" : ""}
                                    `}
                                >
                                    ▼
                                </span>

                            </div>

                        </button>


                        {/* =====================================
                            DETAILS
                        ===================================== */}

                        {isOpen && (

                            <div className="ces-project-details-content">

                                <div className="ces-project-details-grid">


                                    {/* PO NUMBER */}

                                    <div className="ces-project-detail-box">

                                        <span className="ces-project-detail-label">
                                            PO Number
                                        </span>

                                        <strong className="ces-project-detail-value">
                                            {project.po_number || "-"}
                                        </strong>

                                    </div>


                                    {/* PANEL TYPE */}

                                    <div className="ces-project-detail-box">

                                        <span className="ces-project-detail-label">
                                            Panel Type
                                        </span>

                                        <strong className="ces-project-detail-value">
                                            {project.panel_type || "-"}
                                        </strong>

                                    </div>


                                    {/* TARGET DATE */}

                                    <div className="ces-project-detail-box">

                                        <span className="ces-project-detail-label">
                                            Target Date
                                        </span>

                                        <strong className="ces-project-detail-value">

                                            {project.expected_delivery
                                                ? new Date(
                                                    project.expected_delivery
                                                ).toLocaleDateString()
                                                : "-"
                                            }

                                        </strong>

                                    </div>


                                    {/* PROJECT ENGINEER */}

                                    <div className="ces-project-detail-box">

                                        <span className="ces-project-detail-label">
                                            Project Engineer
                                        </span>

                                        <strong className="ces-project-detail-value">
                                            {project.project_engineer || "-"}
                                        </strong>

                                    </div>


                                    {/* CURRENT STAGE */}

                                    <div className="ces-project-detail-box">

                                        <span className="ces-project-detail-label">
                                            Current Stage
                                        </span>

                                        <strong className="ces-project-detail-value ces-project-stage-value">
                                            {project.status || "-"}
                                        </strong>

                                    </div>


                                    {/* DISPATCH */}

                                    <div className="ces-project-detail-box">

                                        <span className="ces-project-detail-label">
                                            Dispatch Status
                                        </span>

                                        <strong className="ces-project-detail-value ces-project-dispatch-value">
                                            {project.dispatch_status || "-"}
                                        </strong>

                                    </div>

                                </div>

                            </div>

                        )}

                    </article>

                );

            })}

        </div>

    );

}