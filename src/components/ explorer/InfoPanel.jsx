import React from "react";
import "./InfoPanel.css";

const InfoPanel = ({ component }) => {
    if (!component) {
        return (
            <aside className="info-panel">

                <div className="empty-state">

                    <div className="empty-icon">⚙️</div>

                    <h3>Select a Component</h3>

                    <p>
                        Click any highlighted component inside the control
                        panel to inspect its technical information,
                        applications and supported manufacturers.
                    </p>

                </div>

            </aside>
        );
    }

    return (
        <aside className="info-panel">

            {/* Header */}

                <div className="info-content">

            <div
                className="component-header"
                style={{ borderLeft: `5px solid ${component.color}` }}
            >
                <div
                    className="component-icon"
                    style={{ background: component.color }}
                >
                    {component.icon}
                </div>

                <div>

                    <span className="component-category">
                        {component.category}
                    </span>

                    <h2>{component.title}</h2>

                    <p>{component.subtitle}</p>

                </div>
            </div>

            {/* Description */}

            <div className="info-card">

                <h4>Description</h4>

                <p>{component.description}</p>

            </div>

            {/* Specifications */}

            <div className="info-card">

                <h4>Specifications</h4>

                <ul className="tech-list">
                    {component.specifications.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

            {/* Applications */}

            <div className="info-card">

                <h4>Applications</h4>

                <div className="chip-container">

                    {component.applications.map((item) => (
                        <span
                            key={item}
                            className="chip"
                        >
                            {item}
                        </span>
                    ))}

                </div>

            </div>

            {/* Brands */}

            <div className="info-card">

                <h4>Supported Brands</h4>

                <div className="chip-container">

                    {component.brands.map((brand) => (
                        <span
                            key={brand}
                            className="chip secondary"
                        >
                            {brand}
                        </span>
                    ))}

                </div>

            </div>
            </div>

            {/* CTA */}

            <button className="request-btn">

                Request Similar Panel

            </button>

        </aside>
    );
};

export default InfoPanel;