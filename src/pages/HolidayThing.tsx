import PageLayout from "../components/PageLayout.tsx";
import {useNavigate} from "react-router-dom";
import Background from "../components/Background.tsx";
import NextBtn from "../components/button/NextBtn.tsx";

function HolidayThing() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/cheer");
  }

  return(
    <PageLayout backgroundOpacity={0.6}>
      <Background/>
      연말에 뭘 하면서 보내니?
      <NextBtn onClick={handleNext}/>
    </PageLayout>
  );
}
export default HolidayThing;
