import "./ProjectDocuments.css";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    useEffect,
    useState,
} from "react";

import {
    API_URL, STORAGE_URL
} from "../../Config/Config";

import FolderOpenRoundedIcon
    from "@mui/icons-material/FolderOpenRounded";

import DescriptionRoundedIcon
    from "@mui/icons-material/DescriptionRounded";

import DownloadRoundedIcon
    from "@mui/icons-material/DownloadRounded";

import KeyboardArrowRightRoundedIcon
    from "@mui/icons-material/KeyboardArrowRightRounded";

import FactCheckRoundedIcon
    from "@mui/icons-material/FactCheckRounded";

import VerifiedRoundedIcon
    from "@mui/icons-material/VerifiedRounded";

import PhotoLibraryRoundedIcon
    from "@mui/icons-material/PhotoLibraryRounded";

import PhotoRoundedIcon
    from "@mui/icons-material/PhotoRounded";

import ArrowBackRoundedIcon
    from "@mui/icons-material/ArrowBackRounded";

import ErrorOutlineRoundedIcon
    from "@mui/icons-material/ErrorOutlineRounded";

import ConnectLoading
    from "../../Connect/ConnectLoading";


/* =========================================================
   STORAGE

   Your old component referenced STORAGE_URL but never
   defined/imported it.

   Your API endpoints already use API_URL as the backend
   base URL, so use the same backend base for the files.
========================================================= */

// const STORAGE_URL = API_URL;


/* =========================================================
   FILE TYPE
========================================================= */

const getFileType = (fileName = "") => {

    const extension =
        fileName
            .split(".")
            .pop()
            ?.toUpperCase() || "";


    const types = {

        PDF: "PDF Document",

        DWG: "CAD Drawing",

        DXF: "CAD Drawing",

        DOC: "Word Document",

        DOCX: "Word Document",

        XLS: "Excel Spreadsheet",

        XLSX: "Excel Spreadsheet",

        PPT: "PowerPoint",

        PPTX: "PowerPoint",

        JPG: "Image",

        JPEG: "Image",

        PNG: "Image",

        WEBP: "Image",

        ZIP: "ZIP Archive",

        RAR: "RAR Archive",

    };


    return (
        types[extension] ||
        `${extension || "FILE"} File`
    );

};


/* =========================================================
   SAFE JSON FETCH
========================================================= */

// const fetchJson = async (url) => {

//     const response =
//         await fetch(url);


//     if (!response.ok) {

//         throw new Error(
//             `Request failed: ${response.status}`
//         );

//     }


//     return response.json();

// };

const fetchJson = async (url) => {

    const token =
        localStorage.getItem("token");

    const response = await fetch(
        url,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {

        const error =
            new Error(
                `Request failed: ${response.status}`
            );

        error.status =
            response.status;

        throw error;
    }

    return response.json();
};


/* =========================================================
   COMPONENT
========================================================= */

export default function ProjectDocuments() {

    const {
        id,
    } = useParams();


    const navigate =
        useNavigate();


    /* =====================================================
       STATE
    ===================================================== */

    const [
        project,
        setProject,
    ] = useState(null);


    const [
        documents,
        setDocuments,
    ] = useState([]);


    const [
        fatReports,
        setFatReports,
    ] = useState([]);


    const [
        gallery,
        setGallery,
    ] = useState([]);


    const [
        selectedImage,
        setSelectedImage,
    ] = useState(null);


    const [
        loading,
        setLoading,
    ] = useState(true);


    const [
        error,
        setError,
    ] = useState("");


    const [
        showDocuments,
        setShowDocuments,
    ] = useState(false);


    const [
        showFatReports,
        setShowFatReports,
    ] = useState(false);


    const [
        showGallery,
        setShowGallery,
    ] = useState(false);


    /* =====================================================
       LOAD PROJECT DATA
    ===================================================== */

    useEffect(() => {

        let cancelled = false;


        const loadProject = async () => {

            if (!id) {

                setError(
                    "Project ID is missing."
                );

                setLoading(false);

                return;

            }


            try {

                setLoading(true);

                setError("");


                const [
                    projectData,
                    documentsData,
                    fatData,
                    galleryData,
                ] = await Promise.all([

                    fetchJson(
                        `${API_URL}/api/customer-projects/${id}`
                    ),

                    fetchJson(
                        `${API_URL}/api/documents/${id}`
                    ),

                    fetchJson(
                        `${API_URL}/api/fat-reports/${id}`
                    ),

                    fetchJson(
                        `${API_URL}/api/gallery/${id}`
                    ),

                ]);


                if (cancelled) {
                    return;
                }


                setProject(
                    projectData || null
                );


                setDocuments(
                    Array.isArray(documentsData)
                        ? documentsData
                        : []
                );


                setFatReports(
                    Array.isArray(fatData)
                        ? fatData
                        : []
                );


                setGallery(
                    Array.isArray(galleryData)
                        ? galleryData
                        : []
                );


            } catch (fetchError) {

                console.error(
                    "Project Documents Error:",
                    fetchError
                );

                if (!cancelled) {

                    if (fetchError.status === 401) {

                        setError(
                            "Your session has expired. Please log in again."
                        );

                    } else if (fetchError.status === 403) {

                        setError(
                            "Unauthorized Access. You do not have permission to view this project."
                        );

                    } else if (fetchError.status === 404) {

                        setError(
                            "Unauthorized Access. You do not have permission to view this project."
                        );

                    } else {

                        setError(
                            "Unable to load this project. Please try again."
                        );

                    }

                }

            }  finally {

                if (!cancelled) {

                    setLoading(false);

                }

            }

        };


        loadProject();


        return () => {

            cancelled = true;

        };

    }, [id]);


    /* =====================================================
       AUTOMATIC SECTION EXPANSION
    ===================================================== */

    useEffect(() => {

        if (documents.length === 1) {

            setShowDocuments(true);

        }

    }, [documents.length]);


    useEffect(() => {

        if (fatReports.length === 1) {

            setShowFatReports(true);

        }

    }, [fatReports.length]);


    useEffect(() => {

        if (gallery.length === 1) {

            setShowGallery(true);

        }

    }, [gallery.length]);


    /* =====================================================
       LOADING
    ===================================================== */

    if (loading) {

        return (

            <div className="ces-project-documents-state">

                <ConnectLoading />

            </div>

        );

    }


    /* =====================================================
       ERROR
    ===================================================== */

    if (error || !project) {

        return (

            <div className="ces-project-documents-state">

                <div className="project-error-card">

                    <div className="project-error-icon">

                        <ErrorOutlineRoundedIcon />

                    </div>


                    <h1>
                        Project Not Available
                    </h1>


                    <p>
                        {error ||
                            "We could not find this project."}
                    </p>


                    <button
                        type="button"
                        className="project-back-btn"
                        onClick={() =>
                            navigate(
                                "/customer-projects"
                            )
                        }
                    >

                        <ArrowBackRoundedIcon />

                        Back to Projects

                    </button>

                </div>

            </div>

        );

    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <div className="ces-project-documents">


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="project-header">


                <div className="project-folder">

                    <FolderOpenRoundedIcon
                        className="project-folder-icon"
                    />

                </div>


                <div className="project-header-content">


                    <span className="project-tag">

                        PROJECT DOCUMENTS

                    </span>


                    <h1>

                        {project.project_name ||
                            "Project"}

                    </h1>


                    <p>

                        Engineering documents, FAT reports
                        and project progress gallery for this
                        project.

                    </p>


                </div>


                <button
                    type="button"
                    className="project-back-top-btn"
                    onClick={() =>
                        navigate(
                            "/customer-projects"
                        )
                    }
                >

                    <ArrowBackRoundedIcon />

                    <span>
                        Projects
                    </span>

                </button>


            </div>


            {/* =================================================
                DOCUMENTS
            ================================================= */}

            <div
                className="section-header"
                onClick={() =>
                    setShowDocuments(
                        !showDocuments
                    )
                }
            >

                <div className="section-left">

                    <DescriptionRoundedIcon />

                    <h2>
                        Documents
                    </h2>

                </div>


                <div className="section-right">

                    <span className="section-count">

                        {documents.length}

                    </span>


                    <KeyboardArrowRightRoundedIcon
                        className={`expand-arrow ${showDocuments
                                ? "expanded"
                                : ""
                            }`}
                    />

                </div>

            </div>


            {showDocuments && (

                <div className="document-grid">


                    {documents.length === 0 ? (

                        <div className="empty-section">

                            <DescriptionRoundedIcon
                                className="empty-section-icon"
                            />

                            <h3>
                                No Documents Available
                            </h3>

                            <p>
                                Engineering drawings,
                                manuals and technical
                                documents will appear here
                                once they have been uploaded
                                for this project.
                            </p>

                        </div>

                    ) : (

                        documents.map((doc) => (

                            <div
                                key={doc.id}
                                className="document-card"
                            >

                                <div className="document-left">

                                    <div className="document-icon">

                                        <DescriptionRoundedIcon />

                                    </div>


                                    <div className="document-text">

                                        <h4 className="document-title">

                                            {doc.file_name ||
                                                "Untitled Document"}

                                        </h4>


                                        <span className="document-type">

                                            {getFileType(
                                                doc.file_name
                                            )}

                                        </span>

                                    </div>

                                </div>


                                <a
                                    href={`${STORAGE_URL}/documents/${doc.file_path}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="download-btn"
                                >

                                    <DownloadRoundedIcon />

                                    Download

                                </a>

                            </div>

                        ))

                    )}

                </div>

            )}


            {/* =================================================
                FAT REPORTS
            ================================================= */}

            <div
                className="section-header"
                onClick={() =>
                    setShowFatReports(
                        !showFatReports
                    )
                }
            >

                <div className="section-left">

                    <FactCheckRoundedIcon
                        className="fat-icon"
                    />

                    <h2>
                        FAT Reports
                    </h2>

                </div>


                <div className="section-right">

                    <span className="section-count fat-count">

                        {fatReports.length}

                    </span>


                    <KeyboardArrowRightRoundedIcon
                        className={`expand-arrow ${showFatReports
                                ? "expanded"
                                : ""
                            }`}
                    />

                </div>

            </div>


            {showFatReports && (

                <div className="document-grid">


                    {fatReports.length === 0 ? (

                        <div className="empty-section">

                            <VerifiedRoundedIcon
                                className="empty-section-icon"
                            />

                            <h3>
                                No FAT Reports Available
                            </h3>

                            <p>
                                Factory Acceptance Test
                                reports will appear here
                                once testing has been
                                completed and uploaded.
                            </p>

                        </div>

                    ) : (

                        fatReports.map((report) => (

                            <div
                                key={report.id}
                                className="document-card"
                            >

                                <div className="document-left">

                                    <div className="fat-document-icon">

                                        <VerifiedRoundedIcon />

                                    </div>


                                    <div className="document-text">

                                        <h4 className="document-title">

                                            {report.report_name ||
                                                "FAT Report"}

                                        </h4>


                                        <span className="document-type">

                                            Factory Acceptance Test

                                        </span>

                                    </div>

                                </div>


                                <a
                                    href={`${STORAGE_URL}/fat-reports/${report.file_path}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fat-download-btn"
                                >

                                    <DownloadRoundedIcon />

                                    Download

                                </a>

                            </div>

                        ))

                    )}

                </div>

            )}


            {/* =================================================
                PROGRESS GALLERY
            ================================================= */}

            <div
                className="section-header"
                onClick={() =>
                    setShowGallery(
                        !showGallery
                    )
                }
            >

                <div className="section-left">

                    <PhotoLibraryRoundedIcon
                        className="gallery-header-icon"
                    />

                    <h2>
                        Progress Gallery
                    </h2>

                </div>


                <div className="section-right">

                    <span className="section-count gallery-count">

                        {gallery.length}

                    </span>


                    <KeyboardArrowRightRoundedIcon
                        className={`expand-arrow ${showGallery
                                ? "expanded"
                                : ""
                            }`}
                    />

                </div>

            </div>


            {showGallery && (

                gallery.length === 0 ? (

                    <div className="empty-section">

                        <PhotoLibraryRoundedIcon
                            className="empty-section-icon"
                        />

                        <h3>
                            No Progress Images Yet
                        </h3>

                        <p>
                            Progress photographs will
                            appear here as work advances
                            on your project.
                        </p>

                    </div>

                ) : (

                    <div className="gallery-grid">

                        {gallery.map((image) => (

                            <div
                                key={image.id}
                                className="gallery-card"
                            >

                                <div className="gallery-image-wrapper">

                                    <img
                                        src={`${STORAGE_URL}/gallery/${image.image_path}`}
                                        alt={
                                            image.caption ||
                                            "Project Progress"
                                        }
                                        className="gallery-image"
                                        onClick={() =>
                                            setSelectedImage(
                                                image
                                            )
                                        }
                                    />


                                    <div className="gallery-overlay">

                                        <PhotoRoundedIcon />

                                        <span>
                                            View Image
                                        </span>

                                    </div>

                                </div>


                                <div className="gallery-info">

                                    <h4>

                                        {image.caption ||
                                            "Project Progress"}

                                    </h4>

                                </div>

                            </div>

                        ))}

                    </div>

                )

            )}


            {/* =================================================
                IMAGE MODAL
            ================================================= */}

            {selectedImage && (

                <div
                    className="image-modal"
                    onClick={() =>
                        setSelectedImage(null)
                    }
                >

                    <div
                        className="image-preview-container"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            type="button"
                            className="close-image-btn"
                            onClick={() =>
                                setSelectedImage(null)
                            }
                            aria-label="Close image"
                        >
                            ✕
                        </button>


                        <img
                            src={`${STORAGE_URL}/gallery/${selectedImage.image_path}`}
                            alt={
                                selectedImage.caption ||
                                "Project Progress"
                            }
                            className="image-preview"
                        />


                        <div className="image-preview-caption">

                            {selectedImage.caption ||
                                "Project Progress"}

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}