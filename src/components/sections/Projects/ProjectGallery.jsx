import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./ProjectGallery.css";

import projects from "./projectsData"


const ProjectGallery = () => {

    const { projectId } = useParams();

    const project = projects.find(
        (item) => item.id === projectId
    );


    const [activeImage, setActiveImage] = useState(0);


    /* =========================================================
       PROJECT NOT FOUND
    ========================================================= */

    if (!project) {

        return (
            <main className="project-gallery-page">

                <section className="gallery-empty">

                    <h1>
                        Project not found
                    </h1>

                    <Link to="/projects">
                        ← Back to Projects
                    </Link>

                </section>

            </main>
        );
    }



    /* =========================================================
       NEXT / PREVIOUS
    ========================================================= */

    const nextImage = () => {

        setActiveImage(
            (current) =>
                current === project.images.length - 1
                    ? 0
                    : current + 1
        );

    };


    const previousImage = () => {

        setActiveImage(
            (current) =>
                current === 0
                    ? project.images.length - 1
                    : current - 1
        );

    };



    return (
        <main className="project-gallery-page">


            {/* =====================================================
                TOP
            ===================================================== */}

            <section className="gallery-top">

                <div className="gallery-container">

                    <Link
                        to="/projects"
                        className="gallery-back"
                    >
                        <span>
                            ←
                        </span>

                        Back to Projects
                    </Link>


                    <div className="gallery-heading">

                        <div>

                            <span>
                                PROJECT {project.number}
                            </span>

                            <h1>

                                {project.title}

                                <strong>
                                    {project.titleLine}
                                </strong>

                            </h1>

                        </div>


                        <div className="gallery-count">

                            <strong>
                                {String(activeImage + 1).padStart(2, "0")}
                            </strong>

                            <span>
                                /
                            </span>

                            <span>
                                {String(project.images.length).padStart(2, "0")}
                            </span>

                        </div>

                    </div>

                </div>

            </section>



            {/* =====================================================
                GALLERY
            ===================================================== */}

            <section className="gallery-section">

                <div className="gallery-container">


                    {/* =================================================
                        MAIN IMAGE
                    ================================================= */}

                    <div className="gallery-main">

                        <img
                            src={project.images[activeImage]}
                            alt={`${project.title} ${project.titleLine} ${activeImage + 1}`}
                        />


                        {/* PREVIOUS */}

                        {project.images.length > 1 && (

                            <button
                                type="button"
                                className="gallery-nav gallery-prev"
                                onClick={previousImage}
                                aria-label="Previous image"
                            >
                                ←
                            </button>

                        )}


                        {/* NEXT */}

                        {project.images.length > 1 && (

                            <button
                                type="button"
                                className="gallery-nav gallery-next"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                →
                            </button>

                        )}

                    </div>



                    {/* =================================================
                        THUMBNAILS
                    ================================================= */}

                    {project.images.length > 1 && (

                        <div className="gallery-thumbnails">

                            {project.images.map(
                                (image, index) => (

                                    <button
                                        type="button"
                                        key={`${project.id}-${index}`}
                                        className={`gallery-thumbnail ${
                                            activeImage === index
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setActiveImage(index)
                                        }
                                    >

                                        <img
                                            src={image}
                                            alt=""
                                        />

                                        <span>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                    </button>

                                )
                            )}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
};


export default ProjectGallery;