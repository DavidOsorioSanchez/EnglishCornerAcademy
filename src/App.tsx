import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Login, Singup, Trabajadores } from "@/utils/magicValues";

import Perfiles from "@/layout/Perfiles";
import Auth from "@/layout/auth";
import LandingPage from "@/layout/LandingPage";

import HomePage from "@/pages/Home";
import LoginPage from "@/pages/auth/Login";
import SingupPage from "@/pages/auth/Singup";
import TrabajadoresPage from "@/pages/Trabajadores";
import NotFound from "@/pages/error/404NotFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Home} element={<LandingPage><HomePage /></LandingPage>} />
        <Route path={Login} element={<Auth><LoginPage /></Auth>} />
        <Route path={Singup} element={<Auth><SingupPage /></Auth>} />
        <Route path={Trabajadores} element={<Perfiles><TrabajadoresPage /></Perfiles>} />
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </BrowserRouter>
  )
}


