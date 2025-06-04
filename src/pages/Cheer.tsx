import PageLayout from "../components/PageLayout.tsx";
import {CenterContainer, StyledMainText, StyledSubText} from "../components/typography.ts";
import Background from "../components/Background.tsx";

function Cheer() {
  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      <CenterContainer>
        <StyledMainText>
          {`응원의 한마디 작성해주세요.`}
        </StyledMainText>
        <StyledSubText>
          {`내년을 응원하는 한마디 부탁해요.`}
        </StyledSubText>
      </CenterContainer>
    </PageLayout>
  );
}
export default Cheer;
