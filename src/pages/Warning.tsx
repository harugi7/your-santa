import PageLayout from "../components/PageLayout.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import Background from "../components/Background.tsx";
import {useNavigate} from "react-router-dom";
import {CenterContainer, StyledMainText, StyledSubText} from "../components/typography.ts";

function Warning() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/user-mail");
  }

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      <CenterContainer>
        <StyledMainText>
          {`남을 비하하는 말을 할 경우에 내년에\n
          실패만 하는 한 해가 될 것입니다.`}
        </StyledMainText>
        <StyledSubText>
          {`하지만 착하고 좋은 마음으로 다른 사람들에게 희망을 준다면\n
            내년이 행복한 한 해가 될 것입니다.`}
        </StyledSubText>
        <NextBtn onClick={handleNext}/>
      </CenterContainer>
    </PageLayout>
  );
}
export default Warning;
