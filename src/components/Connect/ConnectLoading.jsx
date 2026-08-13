import "./ConnectLoading.css";
import { useEffect, useState } from "react";
import cesLogo from "../../assets/logos/CircuitES-logo.png";

const messages = [
    "Connecting to CES Cloud...",
    "Synchronizing project information...",
    "Loading engineering documents...",
    "Checking dispatch status...",
    "Preparing your workspace...",
];

export default function ConnectLoading() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ces-connect-loading">

            <div className="ces-connect-loading-logo-wrap">

                <div className="ces-connect-loading-ring"></div>

                <div className="ces-connect-loading-logo">

                    <img
                        src={cesLogo}
                        alt="Circuits Energy System"
                    />

                </div>

            </div>

            <h1 className="ces-connect-loading-title">
                CES Connect
            </h1>

            <p className="ces-connect-loading-subtitle">
                Customer Portal
            </p>

            <div className="ces-connect-loading-message">
                <span className="ces-connect-loading-dot"></span>

                <span key={index}>
                    {messages[index]}
                </span>
            </div>

            <div className="ces-connect-loading-bar">

                <div className="ces-connect-loading-progress"></div>

            </div>

            <div className="ces-connect-loading-footer">
                <span>Powered by</span>
                <strong> Circuits Energy System</strong>
            </div>

        </div>
    );
}