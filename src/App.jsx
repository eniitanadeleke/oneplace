import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ActionBar from "./components/ActionBar/ActionBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WhatWeBuild from "./pages/WhatWeBuild/WhatWeBuild";
import Spaces from "./pages/Spaces/Spaces";
import Appointments from "./pages/Appointments/Appointments";
import Studios from "./pages/Studios/Studios";
import Partner from "./pages/Partner/Partner";
import Contact from "./pages/Contact/Contact";

export default function App(){
  const { pathname } = useLocation();
  return <>
    <Navbar/>
    <ScrollToTop/>
    <div className="route" key={pathname}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/what-we-build" element={<WhatWeBuild/>}/>
        <Route path="/spaces" element={<Spaces/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/studios" element={<Studios/>}/>
        <Route path="/partner" element={<Partner/>}/>
        <Route path="/enquire" element={<Contact/>}/>
        <Route path="/contact" element={<Navigate to="/enquire" replace/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
    <Footer/>
    <ActionBar/>
  </>;
}
