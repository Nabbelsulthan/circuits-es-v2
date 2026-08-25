import { useEffect, useState } from "react";
import "./ProjectDetails.css";
import { API_URL } from "../Config/Config";
import { supabase, authenticateRealtime, } from "../Config/supabaseClient";

export default function ProjectDetails() {

    const [openProject, setOpenProject] = useState(null);

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);


    // useEffect(() => {

    //     const customerId =
    //         localStorage.getItem("customerId");

    //     if (!customerId) {
    //         setLoading(false);
    //         return;
    //     }


    //     fetch(
    //         `${API_URL}/api/customers/${customerId}/projects`
    //     )
    //         .then((res) => {

    //             if (!res.ok) {
    //                 throw new Error(
    //                     "Failed to fetch projects"
    //                 );
    //             }

    //             return res.json();

    //         })
    //         .then((data) => {

    //             const sortedProjects =
    //                 [...data].sort((a, b) => {

    //                     if (
    //                         a.status === "Delivered" &&
    //                         b.status !== "Delivered"
    //                     ) {
    //                         return 1;
    //                     }

    //                     if (
    //                         a.status !== "Delivered" &&
    //                         b.status === "Delivered"
    //                     ) {
    //                         return -1;
    //                     }

    //                     return 0;

    //                 });

    //             setProjects(sortedProjects);

    //             setLoading(false);

    //         })
    //         .catch((error) => {

    //             console.error(
    //                 "Project details error:",
    //                 error
    //             );

    //             setLoading(false);

    //         });

    // }, []);


    useEffect(() => {

        const customerId =
            localStorage.getItem("customerId");


        if (!customerId) {

            setLoading(false);

            return;

        }


        let channel = null;
        let cancelled = false;


        /* =========================================================
           LOAD PROJECTS
        ========================================================= */

        const loadProjects = async () => {

            try {

                // const response =
                //     await fetch(
                //         `${API_URL}/api/customers/${customerId}/projects`
                //     );

                const response =
                    await fetch(
                        `${API_URL}/api/customers/${customerId}/projects`,
                        {
                            method: "GET",
                            cache: "no-store",
                            headers: {
                                Authorization:
                                    `Bearer ${localStorage.getItem("token")}`,
                                "Cache-Control": "no-cache",
                            },
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Failed to fetch projects"
                    );

                }


                const data =
                    await response.json();


                if (cancelled) {
                    return;
                }


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


                setProjects(
                    sortedProjects
                );


                setLoading(false);


            } catch (error) {

                console.error(
                    "Project details error:",
                    error
                );


                if (!cancelled) {

                    setLoading(false);

                }

            }

        };


        /* =========================================================
           REALTIME SETUP
        ========================================================= */

        const setupRealtime = async () => {

            try {

                console.log(
                    "Authenticating Supabase Realtime for ProjectDetails..."
                );


                // const authenticated =
                //     await authenticateRealtime();


                // if (
                //     !authenticated ||
                //     cancelled
                // ) {

                //     console.error(
                //         "Unable to authenticate Supabase Realtime for ProjectDetails"
                //     );

                //     return;


                // }


                console.log(
                    "Authenticating Supabase Realtime for ProjectDetails..."
                );

                await authenticateRealtime();

                if (cancelled) {
                    return;
                }


                console.log(
                    "Supabase Realtime authenticated for ProjectDetails"
                );


                /* =============================================
                   INITIAL LOAD
                ============================================= */

                await loadProjects();


                if (cancelled) {
                    return;
                }


                /* =============================================
                   START REALTIME
                ============================================= */

                console.log(
                    "Starting ProjectDetails realtime:",
                    customerId
                );


                channel =
                    supabase
                        .channel(
                            `project-details-${customerId}`
                        )
                        .on(
                            "postgres_changes",
                            {
                                event: "*",
                                schema: "public",
                                table: "projects",
                                filter:
                                    `customer_id=eq.${customerId}`,
                            },
                            async (payload) => {

                                console.log(
                                    "🔥 PROJECT DETAILS REALTIME EVENT:",
                                    payload
                                );


                                /*
                                 * Reload the complete project list
                                 * from your backend.
                                 *
                                 * This keeps every field synchronized:
                                 *
                                 * status
                                 * dispatch_status
                                 * panel_type
                                 * completion_percentage
                                 * PO number
                                 * expected delivery
                                 * engineer
                                 * etc.
                                 */

                                await loadProjects();

                            }
                        )
                        .subscribe(
                            (status) => {

                                console.log(
                                    "ProjectDetails realtime status:",
                                    status
                                );

                            }
                        );


            } catch (error) {

                console.error(
                    "ProjectDetails realtime setup failed:",
                    error
                );

            }

        };


        setupRealtime();


        /* =========================================================
           CLEANUP
        ========================================================= */

        return () => {

            cancelled = true;


            if (channel) {

                console.log(
                    "Removing ProjectDetails realtime channel"
                );


                supabase.removeChannel(
                    channel
                );

            }

        };


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