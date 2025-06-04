import PageLayout from "../components/PageLayout.tsx";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import {CenterContainer, StyledMainText, StyledSubText} from "../components/typography.ts";

function HolidayThing() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/cheer");
  }

  return(
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      <CenterContainer>
        <StyledMainText>
          {`당신은 주로\n 
          연말을 어떻게 보내시나요?\n
         행복하게 연말을 보내는 팁을\n 
         공유해주세요.`}
        </StyledMainText>
        <StyledSubText>
          {`"나는 ~ 연말을 보내."라는 형식으로 편지가 작성됩니다.`}
        </StyledSubText>
        <NextBtn onClick={handleNext}/>
      </CenterContainer>
    </PageLayout>
  );
}
export default HolidayThing;
