export const panelComponents = [
    {
        id: "mccb",
        shortName: "MCCB",
        title: "Moulded Case Circuit Breaker",
        subtitle: "Incoming Protection Device",

        category: "Protection",
        side: "left",
        color: "#ef4444",
        icon: "⚡",

        x: 33,
        y: 32,

        connections: ["busbar"],

        description:
            "The MCCB protects the electrical system against overloads and short circuits while providing safe isolation of incoming power.",

        specifications: [
            "Current Rating : 16A – 3200A",
            "Breaking Capacity : Up to 100kA",
            "Thermal & Magnetic Protection",
            "Manual / Motorized Operation",
            "Suitable for LV Distribution"
        ],

        applications: [
            "PCC",
            "MCC",
            "APFC",
            "Industrial Plants"
        ],

        brands: [
            "Schneider Electric",
            "Siemens",
            "ABB",
            "L&T",
            "Legrand"
        ]
    },

    {
        id: "busbar",
        shortName: "BUS",
        title: "Copper Busbar",
        subtitle: "Power Distribution",

        category: "Power Distribution",
        side: "top",
        color: "#f59e0b",
        icon: "🔶",

        x: 48,
        y: 15,

        connections: ["mccb", "contactor", "plc"],

        description:
            "Copper busbars distribute electrical power uniformly throughout the control panel with low resistance and high current carrying capability.",

        specifications: [
            "Electrolytic Copper",
            "Tin Plated Optional",
            "High Conductivity",
            "Supports High Current",
            "Heat Resistant"
        ],

        applications: [
            "Power Distribution",
            "Industrial Panels",
            "Switchboards"
        ],

        brands: [
            "Luvata",
            "Precision Copper",
            "Local Fabricated"
        ]
    },

    {
        id: "plc",
        shortName: "PLC",
        title: "Programmable Logic Controller",
        subtitle: "Automation Controller",

        category: "Automation",
        side: "right",
        color: "#3b82f6",
        icon: "🖥️",

        x: 65,
        y: 31,

        connections: ["busbar", "relay", "terminal"],

        description:
            "The PLC acts as the brain of the automation system by monitoring inputs, executing logic and controlling outputs in real time.",

        specifications: [
            "Digital & Analog I/O",
            "Ethernet Communication",
            "Modbus / Profinet",
            "Expandable Modules",
            "Industrial Grade"
        ],

        applications: [
            "Factory Automation",
            "Water Treatment",
            "Packaging",
            "Automotive",
            "Process Industries"
        ],

        brands: [
            "Siemens",
            "Allen-Bradley",
            "Mitsubishi",
            "Delta",
            "Omron"
        ]
    },

    {
        id: "contactor",
        shortName: "CTR",
        title: "Magnetic Contactor",
        subtitle: "Motor Switching Device",

        category: "Motor Control",
        side: "left",
        color: "#22c55e",
        icon: "⚙️",

        x: 28,
        y: 54,

        connections: ["busbar", "relay"],

        description:
            "Contactors switch motors and heavy electrical loads safely using electromagnetic operation controlled by PLCs or relays.",

        specifications: [
            "AC-3 Rated",
            "Up to 800A",
            "Auxiliary Contacts",
            "DIN Rail Mounting",
            "Long Mechanical Life"
        ],

        applications: [
            "Motor Control",
            "Pump Panels",
            "Compressors",
            "Conveyors"
        ],

        brands: [
            "Schneider",
            "ABB",
            "Siemens",
            "L&T"
        ]
    },

    {
        id: "relay",
        shortName: "RLY",
        title: "Control Relay",
        subtitle: "Signal Switching",

        category: "Control",
        side: "right",
        color: "#8b5cf6",
        icon: "🔄",

        x: 69,
        y: 51,

        connections: ["contactor", "terminal"],

        description:
            "Relays isolate and switch low-power control signals for automation circuits and protective interlocking.",

        specifications: [
            "24VDC Coil",
            "Plug-in Type",
            "LED Status Indicator",
            "High Switching Life"
        ],

        applications: [
            "Automation",
            "Control Panels",
            "Interlocking"
        ],

        brands: [
            "Finder",
            "Omron",
            "Phoenix Contact",
            "Schneider"
        ]
    },

    {
        id: "terminal",
        shortName: "TB",
        title: "Terminal Block",
        subtitle: "Field Wiring Interface",

        category: "Wiring",
        side: "right",
        color: "#06b6d4",
        icon: "🔌",

        x: 69,
        y: 74,

        connections: ["relay", "plc"],

        description:
            "Terminal blocks provide organized, safe and maintainable field wiring connections between external devices and the control system.",

        specifications: [
            "DIN Rail Mount",
            "Spring / Screw Type",
            "High Insulation",
            "Numbered Markers"
        ],

        applications: [
            "Field Wiring",
            "Sensors",
            "Actuators",
            "Control Panels"
        ],

        brands: [
            "Phoenix Contact",
            "Weidmüller",
            "Elmex",
            "Connectwell"
        ]
    }
];