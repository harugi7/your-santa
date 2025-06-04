import PageLayout from "../components/PageLayout.tsx";
import {CenterContainer, StyledMainText, StyledSubText} from "../components/typography.ts";
import Background from "../components/Background.tsx";
import {useState} from "react";
import FadedUnderlineInput from "../components/textInput/FadedUnderlineInput.tsx";

function Cheer() {
  const [cheer, setCheer] = useState("");

  function handleCheerChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCheer(e.target.value);
  }

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
        <FadedUnderlineInput
          value={cheer}
          onChange={handleCheerChange}
          placeholder="희망을 입력하세요"
        />
      </CenterContainer>
    </PageLayout>
  );
}
export default Cheer;
