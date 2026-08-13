import React from "react";
import "./Hotspot.css";

const Hotspot = ({
    component,
    active,
    onClick,
}) => {
    return (
        <div
            className={`hotspot ${component.side || "right"} ${
                active ? "active" : ""
            }`}
            style={{
                left: `${component.x}%`,
                top: `${component.y}%`,
            }}
            onClick={onClick}
        >
            {/* Label */}
            <div className="hotspot-label">
                {component.title}
            </div>

            {/* Leader Line */}
            <div className="hotspot-line"></div>

            {/* Outer Pulse */}
            <div className="hotspot-pulse"></div>

            {/* Rotating Ring */}
            <div className="hotspot-ring"></div>

            {/* Center Dot */}
            <div className="hotspot-dot"></div>
        </div>
    );
};

export default Hotspot;

