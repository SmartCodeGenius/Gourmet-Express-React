import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import PaginaNEncontrada from "./pages/PaginaNEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navbar/>}/>
        <Route index path="*" element={<PaginaNEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  );
}