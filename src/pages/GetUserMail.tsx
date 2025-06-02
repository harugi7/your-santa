import PageLayout from "../components/PageLayout.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import Background from "../components/Background.tsx";
import {useNavigate} from "react-router-dom";

function GetUserMail() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/santa-name");
  }

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      니 메일 주라~
      <NextBtn onClick={handleNext}/>
    </PageLayout>
  );
}
export default GetUserMail;
