import PageLayout from "../components/PageLayout.tsx";
import styled from "styled-components";

function Intro() {
  return (
    <PageLayout>
      <StyledTitle>너의 산타</StyledTitle>
      <Dome />
    </PageLayout>
  );
}
export default Intro;

const StyledTitle = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: white;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Dome = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 300px;
    height: 400px;
    background: linear-gradient(
            to bottom,
            rgba(100, 140, 180, 0.85) 0%,
            rgba(27, 42, 65, 0) 100%
    );
    border-radius: 150px 150px 0 0;
    box-shadow: 0 0 20px 5px rgba(30, 50, 80, 0.7);
    z-index: 1;
    cursor: default;
`;
