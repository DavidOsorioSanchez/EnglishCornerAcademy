import { Route, Routes } from "react-router-dom";
import { Home, Content, Prices, Workers, Service, Login, Singup, Trabajadores } from "@/utils/magicValues";

import Perfiles from "@/layout/Perfiles";
import Layout from "@/layout/Layout";

import HomePage from "@/pages/Home";
import ContentPage from "@/pages/Content";
import PricesPage from "@/pages/Prices";
import WorkersPage from "@/pages/Workers";
import ServicePage from "@/pages/Service";
import LoginPage from "@/pages/auth/Login";
import SingupPage from "@/pages/auth/Singup";
import TrabajadoresPage from "@/pages/Trabajadores";
import NotFound from "@/pages/error/404NotFound";


export default function App() {
  return (
    <Routes>
      <Route path={Home} element={<Layout><HomePage /></Layout>} />
      <Route path={Content} element={<Layout><ContentPage /></Layout>} />
      <Route path={Prices} element={<Layout><PricesPage /></Layout>} />
      <Route path={Workers} element={<Layout><WorkersPage /></Layout>} />
      <Route path={Service} element={<Layout><ServicePage /></Layout>} />
      <Route path={Login} element={<Layout><LoginPage /></Layout>} />
      <Route path={Singup} element={<Layout><SingupPage /></Layout>} />
      <Route path={Trabajadores} element={<Perfiles><TrabajadoresPage /></Perfiles>} />
      <Route element={<NotFound />} path="*"/>
    </Routes>
  )
}


