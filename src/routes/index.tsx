import { Routes, Route } from "react-router-dom";
import Intro from "../pages/Intro.tsx";
import Guide from "../pages/Guide.tsx";
import Warning from "../pages/Warning.tsx";
import GetUserMail from "../pages/GetUserMail.tsx";
import GetSantaName from "../pages/GetSantaName.tsx";
import HolidayThing from "../pages/HolidayThing.tsx";
import Cheer from "../pages/Cheer.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/warn" element={<Warning/>} />
      <Route path="/user-mail" element={<GetUserMail/>} />
      <Route path="/santa-name" element={<GetSantaName/>} />
      <Route path="/holiday-thing" element={<HolidayThing/>} />
      <Route path="/cheer" element={<Cheer/>} />
    </Routes>
  );
}

export default AppRoutes;
