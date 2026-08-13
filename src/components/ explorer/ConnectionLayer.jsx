import React from "react";
import "./ConnectionLayer.css";

const ConnectionLayer = ({
    components,
    selectedComponent,
}) => {

    if (!selectedComponent) return null;

    const selected = components.find(
        c => c.id === selectedComponent.id
    );

    if (!selected) return null;

    return (

        <svg
            className="connection-layer"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >

            {selected.connections.map(id => {

                const target = components.find(
                    c => c.id === id
                );

                if (!target) return null;

                return (

                    <g key={id}>

                        <line
                            className="connection-line"
                            x1={selected.x}
                            y1={selected.y}
                            x2={target.x}
                            y2={target.y}
                        />

                        <circle
                            className="power-pulse"

                            r="1"

                        >

                            <animateMotion
                                dur="2s"
                                repeatCount="indefinite"

                                path={`M ${selected.x} ${selected.y}
                                       L ${target.x} ${target.y}`}
                            />

                        </circle>

                    </g>

                );

            })}

        </svg>

    );

};

export default ConnectionLayer;