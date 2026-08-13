import PanelCanvas from "./PanelCanvas";
import InfoPanel from "./InfoPanel";
import ExplorerToolbar from "./ExplorerToolbar";
import { useState } from "react";
import "./TabletExplorer.css";





const TabletExplorer = ({

    components,
    selectedComponent,
    onSelect,
    mode,
    setMode,
}) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    return (

        <section className={`panel-explorer tablet ${mode}`}>

            <div className="explorer-grid"></div>

            <div className="explorer-header">

                <span className="explorer-badge">
                    Interactive Engineering Explorer
                </span>

                <h2>Industrial Electrical Panel Explorer</h2>

                <p>
                    Explore industrial electrical panels with a
                    touch-friendly interface designed for tablets.
                </p>

            </div>

            <div className="tablet-layout">

                <PanelCanvas
                    components={components}
                    selectedComponent={selectedComponent}
                    onSelect={(id) => {
                        onSelect(id);
                        setDrawerOpen(true);
                    }}
                    mode={mode}
                />

                <>
                    {drawerOpen && (
                        <div
                            className="drawer-overlay"
                            onClick={() => setDrawerOpen(false)}
                        />
                    )}

                    <div
                        className={`tablet-drawer ${drawerOpen ? "open" : ""
                            }`}
                    >
                        <div className="drawer-handle" />

                        <button
                            className="drawer-close"
                            onClick={() => setDrawerOpen(false)}
                        >
                            ✕
                        </button>

                        <InfoPanel
                            component={selectedComponent}
                            mode={mode}
                        />
                    </div>
                </>
            </div>

            <ExplorerToolbar
                mode={mode}
                setMode={setMode}
            />

        </section>
    );
}

export default TabletExplorer;