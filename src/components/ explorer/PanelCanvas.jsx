import React from "react";
import "./PanelCanvas.css";

import Hotspot from "./Hotspot";



import panelImage from "../../assets/explorer/industrial-panel.jpg"
import ConnectionLayer from "./ConnectionLayer";

const PanelCanvas = ({

    components,
    selectedComponent,
    onSelect,
    mobile = false,
}) => {
    return (



<div className="panel-canvas">

    {/* Engineering Frame Corners */}
    <div className="corner tl"></div>
    <div className="corner tr"></div>
    <div className="corner bl"></div>
    <div className="corner br"></div>

    {/* Blueprint Grid Overlay */}
    <div className="panel-grid-overlay"></div>

    {/* Animated Scan Line */}
    <div className="scan-line"></div>

    {/* Background Image */}
    <img
        src={panelImage}
        alt="Industrial Control Panel"
        className="panel-image"
    />



    {/* Dark Overlay */}
    <div className="panel-overlay"></div>




    {/* Hotspots */}
    {components.map((component) => (
        <Hotspot
            key={component.id}
            component={component}
            active={selectedComponent?.id === component.id}
            onClick={() => onSelect(component.id)}
        />
    ))}

    {/* Explorer Title */}
    <div className="canvas-title">
        <span>INTERACTIVE PANEL</span>

        <h3>
            Explore Every Component
        </h3>
    </div>

    {/* Live Status */}
    <div className="live-indicator">
        <span className="live-dot"></span>

        <span className="live-text">
            LIVE PANEL INSPECTION
        </span>
    </div>

    <ConnectionLayer

        components={components}

        selectedComponent={selectedComponent}

    />

</div>



    );
};

export default PanelCanvas;




// import React from "react";
// import "./PanelCanvas.css";

// import Hotspot from "./Hotspot";
// import ConnectionLayer from "./ConnectionLayer";

// import panelImage from "../../assets/explorer/industrial-panel.jpg";

// const PanelCanvas = ({
//     components,
//     selectedComponent,
//     onSelect,
//     mobile = false,
// }) => {
//     return (
//         <div className="panel-canvas">

//             {/* Engineering Frame Corners */}
//             <div className="corner tl"></div>
//             <div className="corner tr"></div>
//             <div className="corner bl"></div>
//             <div className="corner br"></div>

//             {/* Blueprint Grid Overlay */}
//             {!mobile && <div className="panel-grid-overlay"></div>}

//             {/* Animated Scan Line */}
//             {!mobile && <div className="scan-line"></div>}

//             {/* Background Image */}
//             <img
//                 src={panelImage}
//                 alt="Industrial Control Panel"
//                 className="panel-image"
//             />

//             {/* Dark Overlay */}
//             <div className="panel-overlay"></div>

//             {/* Hotspots */}
//             {components.map((component) => (
//                 <Hotspot
//                     key={component.id}
//                     component={component}
//                     active={selectedComponent?.id === component.id}
//                     onClick={() => onSelect(component.id)}
//                 />
//             ))}

//             {/* Desktop Only */}
//             {!mobile && (
//                 <>
//                     {/* Explorer Title */}
//                     <div className="canvas-title">
//                         <span>INTERACTIVE PANEL</span>

//                         <h3>
//                             Explore Every Component
//                         </h3>
//                     </div>

//                     {/* Live Status */}
//                     <div className="live-indicator">
//                         <span className="live-dot"></span>

//                         <span className="live-text">
//                             LIVE PANEL INSPECTION
//                         </span>
//                     </div>

//                     {/* Connection Lines */}
//                     <ConnectionLayer
//                         components={components}
//                         selectedComponent={selectedComponent}
//                     />
//                 </>
//             )}

//         </div>
//     );
// };

// export default PanelCanvas;