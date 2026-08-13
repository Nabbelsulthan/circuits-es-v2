import "./DispatchStatus.css";

import { useEffect, useState } from "react";

import { API_URL } from "../../Config/Config";

import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";


export default function DispatchStatus() {

    const [projects, setProjects] = useState([]);

    const [selectedProject, setSelectedProject] =
        useState(null);


    /* =====================================================
       FETCH PROJECTS
    ===================================================== */

    useEffect(() => {

        const customerId =
            localStorage.getItem("customerId");


        if (!customerId) {

            return;

        }


        fetch(
            `${API_URL}/api/customer-projects/customer/${customerId}`
        )
            .then((res) => {

                if (!res.ok) {

                    throw new Error(
                        `Failed to load dispatch projects: ${res.status}`
                    );

                }

                return res.json();

            })
            .then((data) => {

                console.log(
                    "Dispatch Projects:",
                    data
                );

                setProjects(
                    Array.isArray(data)
                        ? data
                        : []
                );

            })
            .catch((error) => {

                console.error(
                    "Dispatch projects error:",
                    error
                );

            });

    }, []);


    /* =====================================================
       DATE FORMATTER
    ===================================================== */

    const formatDate = (date) => {

        if (!date) {

            return "-";

        }

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );

    };


    /* =====================================================
       EMPTY VALUE
    ===================================================== */

    const displayValue = (value, fallback = "-") => {

        return value || fallback;

    };


    /* =====================================================
       MAIN
    ===================================================== */

    return (

        <main className="ces-connect-dispatch">

            <div className="ces-connect-dispatch__container">


                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="ces-connect-dispatch__header">

                    <div className="ces-connect-dispatch__header-content">

                        <span className="ces-connect-dispatch__tag">

                            <LocalShippingRoundedIcon />

                            DISPATCH & DELIVERY

                        </span>


                        <h1 className="ces-connect-dispatch__title">
                            Dispatch Status
                        </h1>


                        <p className="ces-connect-dispatch__description">
                            Track transportation, shipment and
                            delivery information for all your
                            projects from one centralized location.
                        </p>

                    </div>


                    {/* Header count */}

                    <div className="ces-connect-dispatch__header-count">

                        <LocalShippingRoundedIcon />

                        <strong>
                            {projects.length}
                        </strong>

                        <span>
                            Projects
                        </span>

                    </div>

                </header>


                {/* =================================================
                    PROJECT LIST
                ================================================= */}

                {!selectedProject ? (

                    projects.length > 0 ? (

                        <section className="ces-connect-dispatch__list">

                            {projects.map((project) => (

                                <article
                                    key={project.id}
                                    className="ces-connect-dispatch__project-card"
                                    onClick={() =>
                                        setSelectedProject(project)
                                    }
                                >


                                    {/* Card icon */}

                                    <div className="ces-connect-dispatch__project-icon">

                                        <LocalShippingRoundedIcon />

                                    </div>


                                    {/* Project information */}

                                    <div className="ces-connect-dispatch__project-content">

                                        <span className="ces-connect-dispatch__project-label">
                                            PROJECT
                                        </span>

                                        <h2>
                                            {project.project_name}
                                        </h2>

                                    </div>


                                    {/* Status */}

                                    <div className="ces-connect-dispatch__project-status">

                                        <span className="ces-connect-dispatch__status-label">
                                            DISPATCH STATUS
                                        </span>

                                        <span className="ces-connect-dispatch__status-badge">

                                            <span className="ces-connect-dispatch__status-dot"></span>

                                            {displayValue(
                                                project.dispatch_status,
                                                "Pending"
                                            )}

                                        </span>

                                    </div>


                                    {/* Arrow */}

                                    <div className="ces-connect-dispatch__project-arrow">

                                        <ArrowForwardRoundedIcon />

                                    </div>

                                </article>

                            ))}

                        </section>

                    ) : (

                        /* =================================================
                           EMPTY STATE
                        ================================================= */

                        <section className="ces-connect-dispatch__empty">

                            <div className="ces-connect-dispatch__empty-icon">

                                <LocalShippingRoundedIcon />

                            </div>


                            <h2>
                                No Dispatch Information
                            </h2>


                            <p>
                                Dispatch and delivery information
                                for your projects will appear here
                                once it is available.
                            </p>

                        </section>

                    )

                ) : (

                    /* =================================================
                       DETAILS
                    ================================================= */

                    <section className="ces-connect-dispatch__details">


                        {/* Back */}

                        <button
                            type="button"
                            className="ces-connect-dispatch__back"
                            onClick={() =>
                                setSelectedProject(null)
                            }
                        >

                            <ArrowBackRoundedIcon />

                            <span>
                                Back to Projects
                            </span>

                        </button>


                        {/* Detail heading */}

                        <div className="ces-connect-dispatch__details-heading">

                            <div className="ces-connect-dispatch__details-icon">

                                <LocalShippingRoundedIcon />

                            </div>


                            <div>

                                <span>
                                    DISPATCH DETAILS
                                </span>

                                <h2>
                                    {selectedProject.project_name}
                                </h2>

                            </div>

                        </div>


                        {/* =================================================
                           DETAILS GRID
                        ================================================= */}

                        <div className="ces-connect-dispatch__info-grid">


                            {/* PO NUMBER */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <ReceiptLongRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        PO Number
                                    </span>

                                    <strong>
                                        {displayValue(
                                            selectedProject.po_number
                                        )}
                                    </strong>

                                </div>

                            </div>


                            {/* DISPATCH STATUS */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <LocalShippingRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        Dispatch Status
                                    </span>

                                    <strong className="ces-connect-dispatch__info-status">

                                        {displayValue(
                                            selectedProject.dispatch_status,
                                            "Pending"
                                        )}

                                    </strong>

                                </div>

                            </div>


                            {/* TRANSPORTER */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <BusinessRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        Transporter
                                    </span>

                                    <strong>
                                        {displayValue(
                                            selectedProject.transporter
                                        )}
                                    </strong>

                                </div>

                            </div>


                            {/* LR NUMBER */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <ReceiptLongRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        LR Number
                                    </span>

                                    <strong>
                                        {displayValue(
                                            selectedProject.lr_number
                                        )}
                                    </strong>

                                </div>

                            </div>


                            {/* VEHICLE */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <DirectionsCarRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        Vehicle Number
                                    </span>

                                    <strong>
                                        {displayValue(
                                            selectedProject.vehicle_number
                                        )}
                                    </strong>

                                </div>

                            </div>


                            {/* DISPATCH DATE */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <EventRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        Dispatch Date
                                    </span>

                                    <strong>
                                        {formatDate(
                                            selectedProject.dispatch_date
                                        )}
                                    </strong>

                                </div>

                            </div>


                            {/* DELIVERY DATE */}

                            <div className="ces-connect-dispatch__info-card">

                                <div className="ces-connect-dispatch__info-icon">

                                    <EventRoundedIcon />

                                </div>

                                <div>

                                    <span>
                                        Delivery Date
                                    </span>

                                    <strong>

                                        {selectedProject.delivery_date
                                            ? formatDate(
                                                selectedProject.delivery_date
                                            )
                                            : "Pending"
                                        }

                                    </strong>

                                </div>

                            </div>

                        </div>

                    </section>

                )}

            </div>

        </main>

    );

}