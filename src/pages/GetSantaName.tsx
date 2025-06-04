import PageLayout from "../components/PageLayout.tsx";
import Background from "../components/Background.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import {useNavigate} from "react-router-dom";
import {CenterContainer, StyledMainText, StyledSubText} from "../components/typography.ts";
import {useState} from "react";
import FadedUnderlineInput from "../components/textInput/FadedUnderlineInput.tsx";

function GetSantaName() {
  const navigate = useNavigate();
  const [santaName, setSantaName] = useState("");

  function handleNext() {
    navigate("/holiday-thing");
  }

  function handleSantaNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSantaName(e.target.value);
  }

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      <CenterContainer>
        <StyledMainText>
          {`당신은 어떠한 산타입니까?\n
          작성해주신 별명은 편지에\n
          "00 산타"라고 쓰여서 전송됩니다.`}
        </StyledMainText>
        <StyledSubText>
          {`추천 별명: 친절한 산타, 귀여운 산타`}
        </StyledSubText>
        <FadedUnderlineInput
          value={santaName}
          onChange={handleSantaNameChange}
          placeholder="산타의 이름을 입력하세요"
        />
        <NextBtn onClick={handleNext}/>
      </CenterContainer>
    </PageLayout>
  );
}
export default GetSantaName;
