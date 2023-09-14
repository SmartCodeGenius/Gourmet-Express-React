import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Planos from "./pages/Planos";
import QuemSomos from "./pages/QuemSomos";
import Suporte from "./pages/Suporte";
import PaginaNEncontrada from "./pages/PaginaNEncontrada";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index path="/" element={<PaginaInicial/>}/>
        <Route path="/planos" element={<Planos/>}/>
        <Route path="/quemsomos" element={<QuemSomos/>}/>
        <Route path="/suporte" element={<Suporte/>}/>
        <Route path="*" element={<PaginaNEncontrada/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}