import styled, {keyframes} from "styled-components";
import {useEffect, useState} from "react";

export default function IntroBtn() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isHovered) {
      timer = setTimeout(() => {
        setIsExpanded(true);
      }, 1100);
    } else {
      setIsExpanded(false);
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);


  return (
    <StyledStartBtn
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isExpanded={isExpanded}
      isHovered={isHovered}
    >
      START THE MAGIC
    </StyledStartBtn>
  )
}

const crissCrossLeft = keyframes`
  0% {
    left: -20px;
    transform: translate(-50%, -50%) scale(1);
    opacity: 100%;
  }
  100% {
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
      opacity: 100%;
  }
`;

const crissCrossRight = keyframes`
  0% {
    right: -20px;
    transform: translate(50%, -50%) scale(1);
  }
  100% {
    right: 50%;
    transform: translate(50%, -50%) scale(1.5);
  }
`;

const expandFromCenter = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(20);
  }
`;

const StyledStartBtn = styled.button<{ isExpanded: boolean; isHovered: boolean }>`
    position: relative;
    width: 200px;
    height: 70px;
    margin: 20px;
    border: none;
    border-radius: 40px;
    background-color: ${({ isExpanded }) => (isExpanded ? "#fff" : "#ffffff10")};
    color: ${({ isExpanded }) => (isExpanded ? "#000000" : "#fff")};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.3s ease, color 1.6s ease;
    z-index: 2;

    &:hover {
        background-color: ${({ isExpanded }) => (isExpanded ? "#fff" : "#ffffff20")};
        color: ${({ isExpanded }) => (isExpanded ? "#000" : "rgba(0, 0, 0, 0.7)")};
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        z-index: -1;
        transition: none;
        display: ${({ isExpanded }) => (isExpanded ? "none" : "block")};
    }

    &::before {
        left: -20px;
        transform: translate(-50%, -50%);
        display: block;
    }

    &::after {
        right: -20px;
        transform: translate(50%, -50%);
        ${({ isExpanded }) =>
    isExpanded
      ? `
          right: 50%;
          transform: translate(50%, -50%) scale(20);
          transition: none;
        `
      : ''}
    }

    &:hover::before {
        animation: ${crissCrossLeft} 0.8s both alternate, ${expandFromCenter} 0.8s 0.8s forwards;
    }

    &:hover::after {
        animation: ${({ isExpanded }) => (isExpanded ? 'none' : crissCrossRight)} 0.8s both alternate;
    }
`;
