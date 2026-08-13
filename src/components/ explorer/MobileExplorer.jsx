

import { useState, useRef, useEffect } from "react";
import "./MobileExplorer.css";

import PanelCanvas from "./PanelCanvas";
import { panelComponents } from "./panelData";

const MobileExplorer = () => {

    const [selectedComponent, setSelectedComponent] = useState(panelComponents[0]);

    const canvasRef = useRef(null);

    // const scrollToCanvas = () => {
    //     canvasRef.current?.scrollIntoView({
    //         behavior: "smooth",
    //         block: "center",
    //     });
    // };


    useEffect(() => {
        canvasRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }, [selectedComponent]);
    return (
        <section className="mobile-explorer">

            <div className="mobile-header">

                <span className="mobile-badge">
                    Interactive Engineering Scan
                </span>

                <h2>
                    Inspect the Panel
                </h2>

                <p>
                    Tap the highlighted points to inspect real components
                    inside this industrial electrical panel.
                </p>

            </div>

            <div className="mobile-canvas"
                ref={canvasRef}
            >

                <PanelCanvas
                    // mobile
                    components={panelComponents}
                    selectedComponent={selectedComponent}
                    onSelect={(id) => {

                        const component = panelComponents.find(
                            item => item.id === id
                        );

                        setSelectedComponent(component);

                    }}
                />

            </div>

            <div className="inspection-card">

                <div className="inspection-number">
                    {selectedComponent.shortName}
                </div>

                <h3>
                    {selectedComponent.title}
                </h3>

                <p>
                    {selectedComponent.description}
                </p>

                <div className="inspection-actions">

                    <button
                        onClick={() => {

                            const index = panelComponents.findIndex(
                                item => item.id === selectedComponent.id
                            );

                            const prev =
                                index === 0
                                    ? panelComponents.length - 1
                                    : index - 1;

                            setSelectedComponent(
                                panelComponents[prev]
                            );

                            // scrollToCanvas();
                        }}
                    >

                        ← Previous

                    </button>

                    <button
                        onClick={() => {

                            const index = panelComponents.findIndex(
                                item => item.id === selectedComponent.id
                            );

                            const next =
                                index === panelComponents.length - 1
                                    ? 0
                                    : index + 1;

                            setSelectedComponent(
                                panelComponents[next]
                            );
                            // scrollToCanvas();
                        }}
                    >

                        Next →

                    </button>

                </div>

            </div>

            <div className="exploration-progress">

                <div className="progress-top">

                    <span>
                        Components Explored
                    </span>

                    <span>
                        {
                            panelComponents.findIndex(
                                item => item.id === selectedComponent.id
                            ) + 1
                        }

                        /

                        {panelComponents.length}
                    </span>

                </div>

                <div className="progress-dots">

                    {panelComponents.map((component) => (

                        <span

                            key={component.id}

                            className={
                                selectedComponent.id === component.id
                                    ? "active"
                                    : ""
                            }

                            onClick={() => {
                                setSelectedComponent(component);
                                // scrollToCanvas();
                            }}

                        />

                    ))}

                </div>

            </div>

            <div className="desktop-experience">

                <div className="desktop-icon">
                    🖥️
                </div>

                <div>

                    <h4>
                        Complete Engineering Experience
                    </h4>

                    <p>
                        Desktop unlocks interactive inspection,
                        engineering views, wiring layouts,
                        blueprint mode and detailed component
                        information.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default MobileExplorer;