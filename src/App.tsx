import { Route, Routes } from "react-router-dom";
import { Home, Login, Singup, Trabajadores, Calendario } from "@/utils/magicValues";

import Perfiles from "@/layout/Perfiles";
import Auth from "@/layout/auth";
import LandingPage from "@/layout/LandingPage";
import Layout from "@/layout/Layout";

import HomePage from "@/pages/Home";
import LoginPage from "@/pages/auth/Login";
import SingupPage from "@/pages/auth/Singup";
import TrabajadoresPage from "@/pages/Trabajadores";
import CalendarPage from "@/pages/private/Calendar";
import NotFound from "@/pages/error/404NotFound";
import ProtectedRoutes from "@/core/guards/ProtectedRoutes";


export default function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path={Home} element={<LandingPage><HomePage /></LandingPage>} />
        <Route path={Login} element={<Auth><LoginPage /></Auth>} />
        <Route path={Singup} element={<Auth><SingupPage /></Auth>} />
        <Route path={Trabajadores} element={<Perfiles><TrabajadoresPage /></Perfiles>} />
        <Route element={<ProtectedRoutes />}>
          <Route path={Calendario}  element={<Layout><CalendarPage /></Layout>} />
        </Route>
        
        <Route element={<NotFound />} path="*"/>
      </Routes>
    // </BrowserRouter>
  )
}


