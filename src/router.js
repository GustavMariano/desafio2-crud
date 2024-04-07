import Home from "./pages/home";
import Clientes from "./pages/clientes";
import Login from "./pages/login";

import Menu from "./components/menu";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Router(){
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
};