import PageLayout from "../components/PageLayout.tsx";
import Background from "../components/Background.tsx";
import styled from "styled-components";
import StartBtn from "../components/button/StartBtn.tsx";

function Guide() {

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      <CenterContainer>
        <StyledMainText>
          {`Send a REAL letter\n
          from Santa, powered\n
          by blabla magic`}
        </StyledMainText>
        <StyledSubText>
          {`Answer three simple questions and\n
          Santa will craft your letter to\n
          download and print.`}
        </StyledSubText>
        <StartBtn/>
      </CenterContainer>
    </PageLayout>
  );
}
export default Guide;

const CenterContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;
`;

const StyledMainText = styled.div`
    color: white;
    font-size: 48px;
    font-family: Georgia, serif;
    white-space: pre-line;
    line-height: 32px;
`;

const StyledSubText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  font-weight: 300;
  font-family: sans-serif;
  white-space: pre-line;
  line-height: 16px;
`;
