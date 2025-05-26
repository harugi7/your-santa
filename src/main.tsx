import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes";
import MouseDiamondTrail from "./components/MouseDiamondTrail.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    <MouseDiamondTrail/>
  </StrictMode>,
)
