import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Content from "@/pages/Content";
import Prices from "@/pages/Prices";
import Workers from "@/pages/Workers";
import Service from "@/pages/Service";
import Login from "@/pages/auth/Login";
import Singup from "@/pages/auth/Singup";
import AlejandroOsorio from "@/pages/workers/AlejandroOsorio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contect" element={<Content />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/services" element={<Service />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/singup" element={<Singup />} />
      <Route path="workers/alejandro-osorio" element={<AlejandroOsorio />} />
    </Routes>
  )
}



