import PageLayout from "../components/PageLayout.tsx";
import styled from "styled-components";
import Snowfall from "../components/Snowfall.tsx";
import '../styles/fonts/fonts.css';
import StartBtn from "../components/startBtn/StartBtn.tsx";

function Intro() {

  return (
    <PageLayout>
      <StyledTitleDiv>
        <StyledMiniTitle>SANTA&apos;S</StyledMiniTitle>
        <StyledMainTitle>MAGICAL</StyledMainTitle>
        <StyledMainTitle>MAILROOM</StyledMainTitle>
      </StyledTitleDiv>
      <StartBtn/>
      <Dome />
      <Snowfall/>
    </PageLayout>
  );
}
export default Intro;

const StyledTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledMiniTitle = styled.div`
  font-family: 'HARRYP', sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: white;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMainTitle = styled.div`
  font-family: 'HARRYP', sans-serif;
  font-size: 110px;
  font-weight: bold;
  color: white;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dome = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 400px;
    height: 600px;
    background: linear-gradient(
            to bottom,
            rgba(48, 111, 215, 0.85) 0%,
            rgba(27, 42, 65, 0) 100%
    );
    border-radius: 200px 200px 0 0;
    box-shadow: 0 0 20px 5px rgba(30, 50, 80, 0.7);
    z-index: 1;
    cursor: default;
`;
