import { useEffect } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {

    useEffect(() => {

        const createNode = (x, y) => {

            const node = document.createElement("span");

            node.className = "cursor-node";

            node.style.left = `${x}px`;
            node.style.top = `${y}px`;

            document.body.appendChild(node);

            setTimeout(() => {

                node.remove();

            }, 650);

        };

        let lastX = 0;
        let lastY = 0;

        const handleMove = (e) => {

            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;

            if (Math.sqrt(dx * dx + dy * dy) < 18) return;

            createNode(e.clientX, e.clientY);

            lastX = e.clientX;
            lastY = e.clientY;

        };

        window.addEventListener("mousemove", handleMove);

        return () =>
            window.removeEventListener("mousemove", handleMove);

    }, []);

    return null;

};

export default CursorTrail;


