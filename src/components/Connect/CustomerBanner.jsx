import "./CustomerBanner.css";

export default function CustomerBanner({ projects = [] }) {

    const customer =
        localStorage.getItem("customerName") || "Customer";


    /* =========================================
       PROJECT STATS
    ========================================= */

    const totalProjects = projects.length;

    const completedProjects = projects.filter(
        (project) =>
            project.status === "Delivered"
    ).length;

    const ongoingProjects =
        totalProjects - completedProjects;


    return (

        <section className="ces-connect-banner">

            {/* =====================================
                CUSTOMER INFORMATION
            ===================================== */}

            <div className="ces-connect-banner__content">

                <span className="ces-connect-banner__tag">
                    ACTIVE CUSTOMER
                </span>


                <h2 className="ces-connect-banner__title">

                    Welcome Back,

                    <span className="ces-connect-banner__customer-name">
                        {" "}
                        {customer}
                    </span>

                </h2>


                <p className="ces-connect-banner__description">
                    Track project progress, review engineering
                    documents, monitor testing activities and
                    receive dispatch updates in real time.
                </p>

            </div>


            {/* =====================================
                PROJECT STATISTICS
            ===================================== */}

            <div className="ces-connect-banner__stats">

                <div className="ces-connect-banner__stat">

                    <span className="ces-connect-banner__stat-value">
                        {totalProjects}
                    </span>

                    <span className="ces-connect-banner__stat-label">
                        Projects
                    </span>

                </div>


                <div className="ces-connect-banner__stat">

                    <span className="ces-connect-banner__stat-value">
                        {completedProjects}
                    </span>

                    <span className="ces-connect-banner__stat-label">
                        Completed
                    </span>

                </div>


                <div className="ces-connect-banner__stat">

                    <span className="ces-connect-banner__stat-value">
                        {ongoingProjects}
                    </span>

                    <span className="ces-connect-banner__stat-label">
                        Ongoing
                    </span>

                </div>

            </div>

        </section>

    );
}