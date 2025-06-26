import { Route, Routes } from "react-router-dom";

import Perfiles from "@/layout/Perfiles";
import Layout from "@/layout/Layout";

import Home from "@/pages/Home";
import Content from "@/pages/Content";
import Prices from "@/pages/Prices";
import Workers from "@/pages/Workers";
import Service from "@/pages/Service";
import Login from "@/pages/auth/Login";
import Singup from "@/pages/auth/Singup";
import Trabajadores from "@/pages/Trabajadores";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/contect" element={<Layout><Content /></Layout>} />
      <Route path="/prices" element={<Layout><Prices /></Layout>} />
      <Route path="/workers" element={<Layout><Workers /></Layout>} />
      <Route path="/services" element={<Layout><Service /></Layout>} />
      <Route path="auth/login" element={<Layout><Login /></Layout>} />
      <Route path="auth/singup" element={<Layout><Singup /></Layout>} />
      <Route path="workers/:id" element={<Perfiles><Trabajadores /></Perfiles>} />
    </Routes>
  )
}


