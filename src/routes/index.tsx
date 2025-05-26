import { Routes, Route } from "react-router-dom";
import Intro from "../pages/Intro.tsx";
import Guide from "../pages/Guide.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
  );
}

export default AppRoutes;
