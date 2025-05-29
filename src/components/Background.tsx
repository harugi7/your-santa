import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import bgImage from '../assets/background_your_santa.jpg';
import Snow from "./Snowfall.tsx";

function Background(){
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${-5 - x}vw, ${-5 - y}vh)`;
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BackgroundWrapper ref={bgRef} $bg={bgImage}>
      <CenterCircle/>
      <Snow/>
    </BackgroundWrapper>);
}

export default Background;


const BackgroundWrapper = styled.div<{ $bg: string }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 110vw;
    height: 110vh;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    transform: translate(-5vw, -5vh);
    transition: transform 0.1s ease-out;
    z-index: -1;
    pointer-events: none;
`;

const CenterCircle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px; 
  height: 700px;
  border-radius: 50%;
    background: radial-gradient(
            circle,
            rgba(27, 42, 65, 1) 0%,   
            rgba(27, 42, 65, 0) 70%  
    );  z-index: 10;    
  pointer-events: none;
`;
