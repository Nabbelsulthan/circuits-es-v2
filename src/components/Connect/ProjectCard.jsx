import ProgressTimeline from "./ProgressTimeline";
import "./ProjectCard.css";

const stageMap = {
    Design: 0,
    Fabrication: 1,
    Assembly: 2,
    Wiring: 3,
    Testing: 4,
    Dispatch: 5,
    Delivered: 6,
};

export default function ProjectCard({ project }) {

    const currentStage =
        stageMap[project.status] ?? 0;

    const customerName =
        localStorage.getItem("customerName") || "Customer";

    return (

        <article className="ces-project-card">

            {/* =========================================
                PROJECT HEADER
            ========================================= */}

            <div className="ces-project-card-header">

                <div className="ces-project-card-heading">

                    <h3 className="ces-project-card-title">
                        {project.project_name}
                    </h3>

                    <p className="ces-project-card-company">
                        {customerName}
                    </p>

                </div>


                <span className="ces-project-card-status">
                    {project.status || "Pending"}
                </span>

            </div>


            {/* =========================================
                PROJECT INFORMATION
            ========================================= */}

            <div className="ces-project-card-meta">

                <div className="ces-project-meta-item">

                    <span className="ces-project-meta-label">
                        PO Number
                    </span>

                    <strong className="ces-project-meta-value">
                        {project.po_number || "-"}
                    </strong>

                </div>


                <div className="ces-project-meta-item">

                    <span className="ces-project-meta-label">
                        Project Value
                    </span>

                    <strong className="ces-project-meta-value">
                        ₹{project.project_value ?? "0.00"}
                    </strong>

                </div>

            </div>


            {/* =========================================
                PROJECT PROGRESS
            ========================================= */}

            <div className="ces-project-progress">

                <ProgressTimeline
                    currentStage={currentStage}
                />

            </div>

        </article>
    );
}