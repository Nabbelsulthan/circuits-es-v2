import "./CompletedProjectCard.css";

export default function CompletedProjectCard({ project }) {
    return (
        <article className="ces-completed-card">

            <div className="ces-completed-icon">
                ✓
            </div>

            <div className="ces-completed-content">

                <h4>
                    {project.project_name}
                </h4>

                <p>
                    <span>PO:</span>{" "}
                    {project.po_number || "-"}
                </p>

            </div>

            <div className="ces-completed-status">
                <span className="ces-completed-status-dot"></span>
                Delivered
            </div>

        </article>
    );
}