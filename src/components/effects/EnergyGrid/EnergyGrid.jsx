


import { useRef, useEffect } from "react";
import "./EnergyGrid.css";

export default function EnergyGrid() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width;
        let height;
        let animation;

        const mouse = {
            x: -9999,
            y: -9999
        };

        const spacing = 70;

        function resize() {

            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

        }

        resize();

        window.addEventListener("resize", resize);

        window.addEventListener("mousemove", e => {

            mouse.x = e.clientX;
            mouse.y = e.clientY;

        });

        function draw(time) {

            ctx.clearRect(0,0,width,height);

            ctx.fillStyle="#04111E";
            ctx.fillRect(0,0,width,height);

            for(let y=0;y<height;y+=spacing){

                for(let x=0;x<width;x+=spacing){

                    let dx=x-mouse.x;
                    let dy=y-mouse.y;

                    let d=Math.sqrt(dx*dx+dy*dy);

                    let glow=Math.max(0,1-d/180);

                    let pulse=(Math.sin(time*0.001+x*0.02+y*0.02)+1)/2;

                    ctx.strokeStyle=`rgba(0,150,255,${0.05+glow*0.25})`;

                    ctx.lineWidth=1;

                    if(x+spacing<width){

                        ctx.beginPath();

                        ctx.moveTo(x,y);

                        ctx.lineTo(x+spacing,y);

                        ctx.stroke();

                    }

                    if(y+spacing<height){

                        ctx.beginPath();

                        ctx.moveTo(x,y);

                        ctx.lineTo(x,y+spacing);

                        ctx.stroke();

                    }

                    ctx.beginPath();

                    ctx.arc(x,y,2+glow*1.5,0,Math.PI*2);

                    ctx.fillStyle=`rgba(80,220,255,${0.25+pulse*0.35+glow*0.4})`;

                    ctx.shadowBlur=15+glow*20;

                    ctx.shadowColor="#00BFFF";

                    ctx.fill();

                }

            }

            animation=requestAnimationFrame(draw);

        }

        draw(0);

        return()=>{

            cancelAnimationFrame(animation);

            window.removeEventListener("resize",resize);

        }

    },[]);

    return <canvas className="energy-grid" ref={canvasRef}/>;

}