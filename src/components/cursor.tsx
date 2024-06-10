'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/cursor.css";
import { useRef } from "react";
import clamp from "@/util/clamp";

export default function Cursor() {


  const ball = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useGSAP(()=> {
    
    if(ball.current === null || cursor.current === null) return;

    let mouse = { x: 0, y: 0 }; 
    let pos = { x: 0, y: 0 }; 
    let ratio = .08; // .1
    
	  let threshold = 20
	  let maxBlur = 5
    let lastX
    let lastY

    // tween lite
    gsap.to(ball.current,  { xPercent: -50, yPercent: -50 });
    gsap.ticker.fps(60);
    
    const updatePositions = ()=> {
      lastX =  pos.x
			lastY =  pos.y

      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;

      const deltaX = pos.x - lastX
		  const deltaY = pos.y - lastY

      const theta = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      
      const vX = clamp(Math.abs(deltaX) / threshold, 0, 1)
      const vY = clamp(Math.abs(deltaY) / threshold, 0, 1)
      const velocity = (vX + vY) * 0.4

      // tween lite
      gsap.to(ball.current, { x: pos.x, y: pos.y, scaleX: `1`, rotation: theta.toFixed(),'-webkit-filter':'blur('+(velocity * maxBlur)+'px)'});
      gsap.to(cursor.current, { x: mouse.x, y: mouse.y});
    };

    
    gsap.ticker.add(updatePositions);

    const mouseMove = (e: any)=> {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", mouseMove);
    
    return ()=> {
      gsap.ticker.remove(updatePositions);
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [cursor, ball]); 

  return <>
    <div id="cursor" ref={cursor}></div>
    <div id="ball" ref={ball}></div>
  </>
}
