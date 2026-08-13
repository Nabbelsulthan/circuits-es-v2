import "./CESConnect.css";

import StatsCards from "../../Connect/StatsCards";
import ProjectCard from "../../Connect/ProjectCard";
import RecentUpdates from "../../Connect/RecentUpdates";
import CustomerBanner from "../../Connect/CustomerBanner";
import ProjectDetails from "../../Connect/ProjectDetails";
import CompletedProjectCard from "../../Connect/CompletedProjectCard";
import ConnectLoading from "../../Connect/ConnectLoading";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_URL } from "../../Config/Config";


export default function CESConnect() {

    /* =========================================
       STATE
    ========================================= */

    const [loading, setLoading] = useState(true);

    const [showActive, setShowActive] = useState(true);

    const [showCompleted, setShowCompleted] = useState(false);

    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();


    /* =========================================
       LOAD CUSTOMER PROJECTS
    ========================================= */

    useEffect(() => {

        const customerId = localStorage.getItem("customerId");

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

                console.log(
                    "CES Connect Projects:",
                    data
                );


                const projectData = Array.isArray(data)
                    ? data
                    : [];


                setProjects(projectData);


                /* =================================
                   ACTIVE PROJECT DISPLAY
                ================================= */

                const activeCount = projectData.filter(
                    (project) =>
                        project.status !== "Delivered"
                ).length;


                /*
                    One or zero active projects:
                    expand automatically.

                    Multiple active projects:
                    collapse by default.
                */

                setShowActive(activeCount <= 1);


            } catch (error) {

                console.error(
                    "CES Connect project loading error:",
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
       PROJECT FILTERS
    ========================================= */

    const activeProjects = projects.filter(
        (project) =>
            project.status !== "Delivered"
    );


    const completedProjects = projects.filter(
        (project) =>
            project.status === "Delivered"
    );


    /* =========================================
       LOGOUT
    ========================================= */

    const handleLogout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("customerId");

        localStorage.removeItem("customerName");

        localStorage.removeItem("isLoggedIn");


        navigate("/portal", {
            replace: true,
        });

    };


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

        <main className="ces-connect-page">

            <div className="ces-connect-page__container">


                {/* =================================
                    DASHBOARD HEADER
                ================================= */}

                <header className="ces-connect-page__header">

                    <div className="ces-connect-page__header-content">

                        <span className="ces-connect-page__eyebrow">
                            CES CONNECT
                        </span>

                        <h1 className="ces-connect-page__title">
                            Customer Dashboard
                        </h1>

                        <p className="ces-connect-page__welcome">
                            Your centralized hub for project tracking,
                            documentation, dispatch updates and
                            progress monitoring.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="ces-connect-page__logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </header>


                {/* =================================
                    CUSTOMER BANNER
                ================================= */}

                <div className="ces-connect-page__customer-banner">

                    <CustomerBanner
                        projects={projects}
                    />

                </div>


                {/* =================================
                    PROJECT DETAILS
                ================================= */}

                <div className="ces-connect-page__project-details">

                    <ProjectDetails />

                </div>


                {/* =================================
                    STATISTICS
                ================================= */}

                <div className="ces-connect-page__stats">

                    <StatsCards
                        projects={projects}
                    />

                </div>


                {/* =================================
                    PROJECTS + RECENT UPDATES
                ================================= */}

                <div className="ces-connect-page__dashboard-grid">


                    {/* =================================
                        PROJECTS
                    ================================= */}

                    <div className="ces-connect-page__projects">


                        {/* =================================
                            ACTIVE PROJECTS HEADER
                        ================================= */}

                        <button
                            type="button"
                            className="ces-connect-page__section-header"
                            onClick={() =>
                                setShowActive(
                                    (previous) => !previous
                                )
                            }
                            aria-expanded={showActive}
                        >

                            <span className="ces-connect-page__section-heading">

                                <span
                                    className="
                                        ces-connect-page__section-icon
                                        ces-connect-page__section-icon--active
                                    "
                                    aria-hidden="true"
                                >
                                    ●
                                </span>

                                <span className="ces-connect-page__section-title">
                                    Active Projects
                                </span>

                            </span>


                            <span className="ces-connect-page__section-right">

                                <span className="ces-connect-page__section-count">
                                    {activeProjects.length}
                                </span>

                                <span
                                    className={`
                                        ces-connect-page__expand-icon
                                        ${showActive
                                            ? "ces-connect-page__expand-icon--expanded"
                                            : ""
                                        }
                                    `}
                                    aria-hidden="true"
                                >
                                    ▶
                                </span>

                            </span>

                        </button>


                        {/* =================================
                            ACTIVE PROJECT LIST
                        ================================= */}

                        {showActive && (

                            <div className="ces-connect-page__project-list">

                                {activeProjects.length > 0 ? (

                                    activeProjects.map((project) => (

                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                        />

                                    ))

                                ) : (

                                    <div className="ces-connect-page__empty-state">

                                        <p>
                                            No active projects at the moment.
                                        </p>

                                    </div>

                                )}

                            </div>

                        )}


                        {/* =================================
                            COMPLETED PROJECTS
                        ================================= */}

                        {completedProjects.length > 0 && (

                            <div className="ces-connect-page__completed-section">


                                {/* =================================
                                    COMPLETED HEADER
                                ================================= */}

                                <button
                                    type="button"
                                    className="ces-connect-page__section-header"
                                    onClick={() =>
                                        setShowCompleted(
                                            (previous) => !previous
                                        )
                                    }
                                    aria-expanded={showCompleted}
                                >

                                    <span className="ces-connect-page__section-heading">

                                        <span
                                            className="
                                                ces-connect-page__section-icon
                                                ces-connect-page__section-icon--completed
                                            "
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>

                                        <span className="ces-connect-page__section-title">
                                            Completed Projects
                                        </span>

                                    </span>


                                    <span className="ces-connect-page__section-right">

                                        <span
                                            className="
                                                ces-connect-page__section-count
                                                ces-connect-page__section-count--completed
                                            "
                                        >
                                            {completedProjects.length}
                                        </span>

                                        <span
                                            className={`
                                                ces-connect-page__expand-icon
                                                ${showCompleted
                                                    ? "ces-connect-page__expand-icon--expanded"
                                                    : ""
                                                }
                                            `}
                                            aria-hidden="true"
                                        >
                                            ▶
                                        </span>

                                    </span>

                                </button>


                                {/* =================================
                                    COMPLETED PROJECT LIST
                                ================================= */}

                                {showCompleted && (

                                    <div className="ces-connect-page__project-list">

                                        {completedProjects.map(
                                            (project) => (

                                                <CompletedProjectCard
                                                    key={project.id}
                                                    project={project}
                                                />

                                            )
                                        )}

                                    </div>

                                )}

                            </div>

                        )}

                    </div>


                    {/* =================================
                        RECENT UPDATES
                    ================================= */}

                    <aside className="ces-connect-page__recent-updates">

                        <RecentUpdates
                            projects={projects}
                        />

                    </aside>

                </div>

            </div>

        </main>

    );
}