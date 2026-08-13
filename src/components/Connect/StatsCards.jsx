import "./StatsCards.css";




import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_URL } from "../Config/Config";


export default function StatsCards() {

    const navigate = useNavigate();


    const [stats, setStats] = useState({
        activeProject: "-",
        dispatchStatus: "-",
        totalProjects: 0,
        documents: 0,
        completedProjects: 0,
    });


    /* =========================================================
       LOAD CUSTOMER PROJECT DATA
    ========================================================= */

    useEffect(() => {

        const customerId =
            localStorage.getItem("customerId");


        if (!customerId) {

            return;

        }


        const loadStats = async () => {

            try {

                const response = await fetch(
                    `${API_URL}/api/customers/${customerId}/projects`
                );


                if (!response.ok) {

                    throw new Error(
                        `Projects request failed: ${response.status}`
                    );

                }


                const projects = await response.json();


                if (!Array.isArray(projects)) {

                    return;

                }


                if (projects.length === 0) {

                    setStats({
                        activeProject: "-",
                        dispatchStatus: "-",
                        totalProjects: 0,
                        documents: 0,
                        completedProjects: 0,
                    });

                    return;

                }


                /* =============================================
                   ACTIVE PROJECTS
                ============================================= */

                const activeProjects =
                    projects.filter(
                        (project) =>
                            project.status !== "Delivered"
                    );


                const currentProject =
                    activeProjects[0] ||
                    projects[0];


                /* =============================================
                   COMPLETED PROJECTS
                ============================================= */

                const completedProjects =
                    projects.filter(
                        (project) =>
                            project.status === "Delivered"
                    ).length;


                /* =============================================
                   DOCUMENT COUNT
                ============================================= */

                let documentCount = 0;


                for (const project of projects) {

                    try {

                        const response =
                            await fetch(
                                `${API_URL}/api/documents/${project.id}`
                            );


                        if (!response.ok) {

                            continue;

                        }


                        const docs =
                            await response.json();


                        if (Array.isArray(docs)) {

                            documentCount += docs.length;

                        }

                    } catch (error) {

                        console.error(
                            `Document loading failed for project ${project.id}:`,
                            error
                        );

                    }

                }


                /* =============================================
                   UPDATE STATS
                ============================================= */

                setStats({

                    activeProject:
                        currentProject?.project_name ||
                        "-",

                    dispatchStatus:
                        currentProject?.dispatch_status ||
                        "-",

                    totalProjects:
                        projects.length,

                    completedProjects,

                    documents:
                        documentCount,

                });

            } catch (error) {

                console.error(
                    "CES Connect stats error:",
                    error
                );

            }

        };


        loadStats();

    }, []);


    /* =========================================================
       CES CONNECT NAVIGATION
       ---------------------------------------------
       The delayed scroll reset is intentional.

       Your global ScrollToTop already runs, but React Router
       can preserve the previous scroll position during the
       CES Connect navigation/render cycle.

       We reset again after navigation has been committed.
    ========================================================= */

    const navigateToCESPage = (path) => {

        navigate(path);


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                });

            });

        });

    };


    /* =========================================================
       CARD CLICK
    ========================================================= */

    const handleCardClick = (title) => {

        switch (title) {

            case "Dispatch Status":

                navigateToCESPage(
                    "/dispatch-status"
                );

                break;


            case "Documents":

                navigateToCESPage(
                    "/customer-projects"
                );

                break;


            default:

                break;

        }

    };


    /* =========================================================
       CARDS
    ========================================================= */

    const cards = [

        {
            title: "Current Project",

            value:
                stats.activeProject,

            icon:
                <FolderIcon />,
        },


        {
            title: "Documents",

            value:
                stats.documents,

            icon:
                <DescriptionIcon />,
        },


        {
            title: "Dispatch Status",

            value:
                stats.dispatchStatus,

            icon:
                <LocalShippingIcon />,
        },


        {
            title: "Completed Projects",

            value:
                stats.completedProjects,

            icon:
                <FolderIcon />,
        },

    ];


    /* =========================================================
       RENDER
    ========================================================= */

    return (

        <div className="stats-grid">

            {cards.map((card) => (

                <div
                    key={card.title}

                    className={`stat-card ${
                        card.title === "Dispatch Status" ||
                        card.title === "Documents"
                            ? "stat-card-clickable"
                            : ""
                    }`}

                    onClick={() =>
                        handleCardClick(
                            card.title
                        )
                    }

                >

                    <div className="stat-icon">

                        {card.icon}

                    </div>


                    <div className="stat-content">

                        <div className="stat-title">

                            {card.title}

                        </div>


                        <div className="stat-value">

                            {card.value}

                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}