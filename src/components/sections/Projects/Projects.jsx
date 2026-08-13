


import "./Projects.css";

import projects from "./projectsData";


const Projects = () => {

    return (
        <main className="projects-page">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="projects-hero">

                <div className="projects-hero-inner">

                    <div className="projects-hero-copy">

                        <span className="projects-eyebrow">
                            OUR PROJECTS
                        </span>

                        <h1>
                            Engineering solutions
                            <span>
                                built for real applications.
                            </span>
                        </h1>

                        <p>
                            Explore selected electrical and automation
                            projects engineered and manufactured by
                            CircuitsES for demanding industrial
                            applications.
                        </p>

                    </div>


                    <div className="projects-hero-mark">

                        <span>
                            CES
                        </span>

                        <small>
                            ENGINEERING
                            <br />
                            SYSTEMS
                        </small>

                    </div>

                </div>

            </section>



            {/* =====================================================
                PROJECTS
            ===================================================== */}

            <section className="projects-section">

                <div className="projects-container">


                    {/* =================================================
                        SECTION HEADER
                    ================================================= */}

                    <div className="projects-section-heading">

                        <div>

                            <span className="projects-label">
                                OUR PORTFOLIO
                            </span>

                            <h2>
                                Engineering Projects
                            </h2>

                        </div>


                        <p className="projects-heading-note">
                            A closer look at selected control,
                            automation and electrical systems
                            engineered by our team.
                        </p>

                    </div>



                    {/* =================================================
                        PROJECT LIST
                    ================================================= */}

                    <div className="projects-list">

                        {projects.map((project) => (

                            <article
                                className="project-card"
                                key={project.id}
                            >


                                {/* =====================================
                                    IMAGE
                                ===================================== */}

                                <div className="project-card-visual">

                                    <div className="project-image-frame">

                                        <img
                                            src={project.images[0]}
                                            alt={`${project.title} ${project.titleLine}`}
                                            loading="lazy"
                                        />

                                    </div>


                                    <div className="project-card-number">
                                        {project.number}
                                    </div>


                                    <div className="project-image-label">

                                        <span>
                                            CES
                                        </span>

                                        <span>
                                            ENGINEERED SYSTEM
                                        </span>

                                    </div>

                                </div>



                                {/* =====================================
                                    CONTENT
                                ===================================== */}

                                <div className="project-card-content">


                                    <div className="project-content-top">

                                        <span className="project-card-category">
                                            {project.category}
                                        </span>

                                        <span className="project-status">
                                            {project.status}
                                        </span>

                                    </div>



                                    <h3>

                                        {project.title}

                                        <span>
                                            {project.titleLine}
                                        </span>

                                    </h3>



                                    <p className="project-description">
                                        {project.description}
                                    </p>



                                    {/* =================================
                                        META
                                    ================================= */}

                                    <div className="project-card-meta">


                                        <div className="project-meta-item">

                                            <span>
                                                APPLICATION
                                            </span>

                                            <strong>
                                                {project.application}
                                            </strong>

                                        </div>


                                        <div className="project-meta-item">

                                            <span>
                                                SOLUTION
                                            </span>

                                            <strong>
                                                {project.solution}
                                            </strong>

                                        </div>


                                        <div className="project-meta-item">

                                            <span>
                                                SCOPE
                                            </span>

                                            <strong>
                                                {project.scope}
                                            </strong>

                                        </div>


                                        <div className="project-meta-item">

                                            <span>
                                                DELIVERY
                                            </span>

                                            <strong>
                                                {project.delivery}
                                            </strong>

                                        </div>

                                    </div>



                                    {/* =================================
                                        FOOTER
                                    ================================= */}

                                    <div className="project-card-footer">


                                        <div className="project-footer-line">

                                            <span />
                                            <span />
                                            <span />

                                        </div>


                                        <span className="project-footer-text">
                                            ENGINEERED • TESTED • DELIVERED
                                        </span>



                                        <a
                                            href={`/projects/${project.id}/gallery`}
                                            className="project-card-arrow"
                                            aria-label={`View ${project.title} gallery`}
                                        >
                                            ↗
                                        </a>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
};


export default Projects;