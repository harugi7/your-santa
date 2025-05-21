import { Routes, Route } from "react-router-dom";
import Intro from "../pages/Intro.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}

export default AppRoutes;
