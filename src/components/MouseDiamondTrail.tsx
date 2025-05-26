import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

type Diamond = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export default function MouseDiamondTrail() {
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);
  const idRef = useRef(0);
  const lastGeneratedTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      if (now - lastGeneratedTime.current < 50) return;
      lastGeneratedTime.current = now;

      const size = Math.random() * 12 + 8;

      const newDiamond: Diamond = {
        id: idRef.current++,
        x: e.clientX,
        y: e.clientY,
        size,
      };

      setDiamonds((prev) => [...prev, newDiamond]);

      setTimeout(() => {
        setDiamonds((prev) => prev.filter((d) => d.id !== newDiamond.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {diamonds.map((diamond) => (
        <Diamond
          key={diamond.id}
          style={{
            left: diamond.x,
            top: diamond.y,
            fontSize: `${diamond.size}px`,
          }}
        >
          ✱
        </Diamond>
      ))}
    </>
  );
}

const sparkle = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
    }
`;

const Diamond = styled.div`
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    color: white;
    transform: translate(-50%, -50%);
    animation: ${sparkle} 0.6s ease-out forwards;
`;
