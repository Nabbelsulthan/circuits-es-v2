import "./ExplorerToolbar.css";

const ExplorerToolbar = ({ mode, setMode }) => {
    const modes = [
        "normal",
        "wiring",
        "power",
        "blueprint",
        "xray",
    ];

    return (
        <div className="explorer-toolbar">
            {modes.map((item) => (
                <button
                    key={item}
                    className={mode === item ? "active" : ""}
                    onClick={() => setMode(item)}
                >
                    {item.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default ExplorerToolbar;