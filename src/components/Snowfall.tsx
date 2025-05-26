import styled, { keyframes } from "styled-components";

const fall = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
`;

const Snowflake = styled.div<{ size: number }>`
    position: absolute;
    top: -10px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.3) 60%,
            rgba(255, 255, 255, 0) 100%
    );
    border-radius: 50%;
    animation: ${fall} ${({ size }) => 5 + 15 * (10 - size) / 10}s linear infinite;
    opacity: 0.8;
    pointer-events: none;
`;

const SnowContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 999;
`;

const Snow = () => {
  const snowflakes = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.floor(Math.random() * 6 + 4);
    return (
      <Snowflake
        key={i}
        size={size}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      />
    );
  });

  return <SnowContainer>{snowflakes}</SnowContainer>;
};

export default Snow;
