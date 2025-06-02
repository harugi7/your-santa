import PageLayout from "../components/PageLayout.tsx";
import Background from "../components/Background.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import {useNavigate} from "react-router-dom";

function GetSantaName() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/holiday-thing");
  }

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      너는 어떠한 산타니? 00한 산타라고 들어간다.
      <NextBtn onClick={handleNext}/>
    </PageLayout>
  );
}
export default GetSantaName;
