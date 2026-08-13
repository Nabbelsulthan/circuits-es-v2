import project01_01 from "../../../assets/projects/1/01.jpeg";
import project01_02 from "../../../assets/projects/1/02.jpeg";
import project01_03 from "../../../assets/projects/1/03.jpeg";
import project01_04 from "../../../assets/projects/1/04.jpeg";
import project01_05 from "../../../assets/projects/1/05.jpeg";
import project01_06 from "../../../assets/projects/1/06.jpeg";
import project01_07 from "../../../assets/projects/1/07.jpeg";

import project02_01 from "../../../assets/projects/2/01.jpeg";
import project02_02 from "../../../assets/projects/2/02.jpeg";
import project02_03 from "../../../assets/projects/2/03.jpeg";
import project02_04 from "../../../assets/projects/2/04.jpeg";

const projects = [
    {
        id: "25t-industrial-press",
        number: "01",

        title: "Industrial Press",
        titleLine: "Control Panel",

        category: "INDUSTRIAL AUTOMATION",
        status: "COMPLETED",

        description:
            "A customized industrial control panel engineered for reliable machine operation, integrating motor control, protection, operator controls, indication and organized internal wiring.",

        application: "Machine Control",
        solution: "Control Panel",
        scope: "Engineering & Assembly",
        delivery: "Tested & Delivered",

        images: [
            project01_01,
            project01_02,
            project01_03,
            project01_04,
            project01_05,
            project01_06,
            project01_07,
        ],
    },

    {
        id: "project-02",
        number: "02",

        title: "Industrial MCC",
        titleLine: "Motor Control Panel",

        category: "MOTOR CONTROL",
        status: "COMPLETED",

        description:
            "Industrial motor control solution engineered for reliable operation.",

        application: "Motor Control",
        solution: "MCC Panel",
        scope: "Engineering & Assembly",
        delivery: "Tested & Delivered",

        images: [
            project02_01,
            project02_02,
            project02_03,
            project02_04,
        ],
    },
];

export default projects;