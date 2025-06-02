import PageLayout from "../components/PageLayout.tsx";
import NextBtn from "../components/button/NextBtn.tsx";
import Background from "../components/Background.tsx";
import {useNavigate} from "react-router-dom";

function Warning() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/user-mail");
  }

  return (
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      이상한 말하면 바보.
      <NextBtn onClick={handleNext}/>
    </PageLayout>
  );
}
export default Warning;
