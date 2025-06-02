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
          {`누군가의 산타가 되어\n
          연말을 따뜻하게\n
          만들어주세요`}
        </StyledMainText>
        <StyledSubText>
          {`만들어주신 편지는 이 프로젝트에 참여하신 분께\n
            크리스마스에 랜덤으로 메일로 전송됩니다.\n
            또한 작성자분께도 산타가 찾아올거랍니다!`}
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
  font-size: 18px;
  font-weight: 300;
  font-family: sans-serif;
  white-space: pre-line;
  line-height: 16px;
`;
