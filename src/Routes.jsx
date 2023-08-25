import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaNEncontrada from "./pages/PaginaNEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PaginaInicial/>}/>
        <Route index path="*" element={<PaginaNEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  );
}