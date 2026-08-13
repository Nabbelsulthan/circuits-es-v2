import React, { useState, useEffect } from "react";
import "./PanelExplorer.css";

import PanelCanvas from "./PanelCanvas";
import InfoPanel from "./InfoPanel";
import ExplorerToolbar from "./ExplorerToolbar";
import { panelComponents } from "./panelData";



import MobileExplorer from "./MobileExplorer";
import TabletExplorer from "./TabletExplorer";




const PanelExplorer = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const [mode, setMode] = useState("normal");

    const handleComponentSelect = (componentId) => {
        const component = panelComponents.find(
            (item) => item.id === componentId
        );

        setSelectedComponent(component);
    };


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);

    if (screenWidth <= 768) {
        return <MobileExplorer />;
    }


 
    if (screenWidth < 1200) {
        return (
            <TabletExplorer
                components={panelComponents}
                selectedComponent={selectedComponent}
                onSelect={handleComponentSelect}
                mode={mode}
                setMode={setMode}
            />
        );
    }

    return (
        <section className={`panel-explorer ${mode}`}>

            {/* Background Grid */}
            <div className="explorer-grid"></div>

            <div className="explorer-header">

                <span className="explorer-badge">
                    Interactive Engineering Explorer
                </span>

                <h2>
                    Industrial Electrical Panel Explorer
                </h2>

                <p>
                    Explore a real industrial electrical control panel.
                    Hover or click any highlighted component to inspect
                    its purpose, specifications and applications.
                </p>

            </div>

            <div className="explorer-layout">

                <PanelCanvas
                    components={panelComponents}
                    selectedComponent={selectedComponent}
                    onSelect={handleComponentSelect}
                    mode={mode}
                />
                <InfoPanel
                    component={selectedComponent}
                    mode={mode}
                />
            </div>

            <div className="explorer-footer">

                <div className="legend-title">
                    Components
                </div>

                <div className="legend-list">

                    {panelComponents.map((component) => (

                        <button
                            key={component.id}
                            className={`legend-item ${selectedComponent?.id === component.id
                                ? "active"
                                : ""
                                }`}
                            onClick={() =>
                                handleComponentSelect(component.id)
                            }
                        >
                            <span className="legend-dot"></span>

                            {component.title}
                        </button>

                    ))}

                </div>

            </div>


            <ExplorerToolbar
                mode={mode}
                setMode={setMode}
            />



        </section>
    );
};

export default PanelExplorer;