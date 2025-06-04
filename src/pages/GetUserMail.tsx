import PageLayout from "../components/PageLayout.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import Background from "../components/Background.tsx";
import {useNavigate} from "react-router-dom";
import {CenterContainer, StyledMainText, StyledSubText} from "../components/typography.ts";
import FadedUnderlineInput from "../components/textInput/FadedUnderlineInput.tsx";
import {useState} from "react";

function GetUserMail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleNext() {
    navigate("/santa-name");
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      <CenterContainer>
        <StyledMainText>
          {`산타가 길을 잃지 않고\n
          찾아갈 수 있도록\n
          메일을 작성해주세요.`}
        </StyledMainText>
        <StyledSubText>
          {`산타는 크리스마스에 찾아올 것입니다.`}
        </StyledSubText>
        <FadedUnderlineInput
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일 주소를 입력하세요"
        />
        <NextBtn onClick={handleNext}/>
      </CenterContainer>
    </PageLayout>
  );
}
export default GetUserMail;
