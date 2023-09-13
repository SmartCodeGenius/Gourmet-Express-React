import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaNEncontrada from "./pages/PaginaNEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PaginaInicial/>}/>
        <Route index path="/planos" element={<PaginaInicial/>}/>
        <Route index path="/quemsomos" element={<PaginaInicial/>}/>
        <Route index path="/suporte" element={<PaginaInicial/>}/>
        <Route path="*" element={<PaginaNEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  );
}