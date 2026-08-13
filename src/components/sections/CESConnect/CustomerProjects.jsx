import "./CustomerProjects.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_URL } from "../../Config/Config";
import ConnectLoading from "../../Connect/ConnectLoading";

import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";


export default function CustomerProjects() {

    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);


    /* =========================================
       LOAD CUSTOMER PROJECTS
    ========================================= */

    useEffect(() => {

        const customerId =
            localStorage.getItem("customerId");


        if (!customerId) {

            navigate("/portal", {
                replace: true,
            });

            return;

        }


        const fetchProjects = async () => {

            try {

                const response = await fetch(
                    `${API_URL}/api/customers/${customerId}/projects`
                );


                if (!response.ok) {

                    throw new Error(
                        `Failed to load projects: ${response.status}`
                    );

                }


                const data = await response.json();


                setProjects(
                    Array.isArray(data)
                        ? data
                        : []
                );


            } catch (error) {

                console.error(
                    "Customer projects error:",
                    error
                );

                setProjects([]);

            } finally {

                setLoading(false);

            }

        };


        fetchProjects();

    }, [navigate]);


    /* =========================================
       LOADING
    ========================================= */

    if (loading) {

        return <ConnectLoading />;

    }


    /* =========================================
       RENDER
    ========================================= */

    return (

        <main className="ces-connect-projects">

            <div className="ces-connect-projects__container">


                {/* =====================================
                    PAGE HEADER
                ===================================== */}

                <header className="ces-connect-projects__header">

                    <div className="ces-connect-projects__header-content">

                        <span className="ces-connect-projects__tag">
                            DOCUMENT LIBRARY
                        </span>


                        <h1 className="ces-connect-projects__title">
                            Project Library
                        </h1>


                        <p className="ces-connect-projects__description">
                            Browse engineering drawings, FAT reports,
                            technical documents and project progress
                            from one centralized location.
                        </p>

                    </div>


                    {/* =================================
                        PROJECT SUMMARY
                    ================================= */}

                    <div className="ces-connect-projects__summary">

                        <FolderCopyRoundedIcon
                            className="ces-connect-projects__summary-icon"
                        />


                        <span className="ces-connect-projects__count">
                            {projects.length}
                        </span>


                        <span className="ces-connect-projects__summary-label">
                            Total Projects
                        </span>

                    </div>

                </header>


                {/* =====================================
                    EMPTY STATE
                ===================================== */}

                {projects.length === 0 ? (

                    <div className="ces-connect-projects__empty">

                        <div className="ces-connect-projects__empty-icon">
                            <FolderOpenRoundedIcon />
                        </div>


                        <h2 className="ces-connect-projects__empty-title">
                            No Projects Available
                        </h2>


                        <p className="ces-connect-projects__empty-description">
                            Your assigned projects will appear here
                            once they are created.
                        </p>

                    </div>

                ) : (

                    /* =================================
                       PROJECT GRID
                    ================================= */

                    <div className="ces-connect-projects__grid">

                        {projects.map((project) => (

                            <article
                                key={project.id}
                                className="ces-connect-projects__card"
                            >


                                {/* =============================
                                    CARD TOP
                                ============================= */}

                                <div className="ces-connect-projects__card-top">


                                    <div className="ces-connect-projects__folder">

                                        <FolderOpenRoundedIcon />

                                    </div>


                                    <span
                                        className={`
                                            ces-connect-projects__status
                                            ${
                                                project.status === "Delivered"
                                                    ? "ces-connect-projects__status--completed"
                                                    : "ces-connect-projects__status--active"
                                            }
                                        `}
                                    >

                                        {project.status === "Delivered" ? (

                                            <>
                                                <AssignmentTurnedInRoundedIcon />

                                                <span>
                                                    Delivered
                                                </span>
                                            </>

                                        ) : (

                                            <>
                                                <PendingActionsRoundedIcon />

                                                <span>
                                                    {project.status || "Pending"}
                                                </span>
                                            </>

                                        )}

                                    </span>

                                </div>


                                {/* =============================
                                    PROJECT NAME
                                ============================= */}

                                <h2 className="ces-connect-projects__project-name">

                                    {project.project_name}

                                </h2>


                                {/* =============================
                                    PROJECT INFORMATION
                                ============================= */}

                                <div className="ces-connect-projects__project-info">


                                    <div className="ces-connect-projects__info-item">

                                        <span>
                                            Panel Type
                                        </span>

                                        <strong>
                                            {project.panel_type || "-"}
                                        </strong>

                                    </div>


                                    <div className="ces-connect-projects__info-item">

                                        <span>
                                            Progress
                                        </span>

                                        <strong>
                                            {project.completion_percentage || 0}%
                                        </strong>

                                    </div>

                                </div>


                                {/* =============================
                                    PROGRESS BAR
                                ============================= */}

                                <div className="ces-connect-projects__progress">

                                    <div className="ces-connect-projects__progress-track">

                                        <div
                                            className="ces-connect-projects__progress-value"
                                            style={{
                                                width: `${Math.min(
                                                    Math.max(
                                                        Number(
                                                            project.completion_percentage || 0
                                                        ),
                                                        0
                                                    ),
                                                    100
                                                )}%`,
                                            }}
                                        />

                                    </div>

                                </div>


                                {/* =============================
                                    OPEN PROJECT
                                ============================= */}

                                <button
                                    type="button"
                                    className="ces-connect-projects__open"
                                    onClick={() =>
                                        navigate(
                                            `/project/${project.id}`
                                        )
                                    }
                                >

                                    <span>
                                        Open Project
                                    </span>

                                    <ArrowForwardRoundedIcon />

                                </button>

                            </article>

                        ))}

                    </div>

                )}

            </div>

        </main>

    );

}