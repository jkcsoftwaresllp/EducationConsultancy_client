import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/home";
import TopBar from "./components/topBar/topBar";
import Navbar from "./components/navBar/navBar";
import { useEffect, useState } from "react";
import { BTech } from "./components/coursesRoutes/BTech";
import {MTech} from "./components/coursesRoutes/MTech";
import Phd from "./components/coursesRoutes/Phd";
import DiplomaCourses from "./components/coursesRoutes/DiplomaCourses";
import Mbbs from "./components/coursesRoutes/Mbbs";

function App() {
  const [courseUrl, setCourseUrl] = useState("/");
  console.log(courseUrl)
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(courseUrl)
  },[courseUrl])

  const toKebabCase = (str) => {
  return str
    .toLowerCase()
    .replace(/\./g, '')           // remove all dots
    .replace(/[\/\s]+/g, '-')     // replace slashes and spaces with hyphen
    .replace(/^-+|-+$/g, '');     // remove leading/trailing hyphens
};
  return (
    <>
      <TopBar
        address="5A, Bhagwati Sharan Enclave, Boring Road, Patna-1"
        phone="+91-097080 44044"
        email="info@admissionexperts.co.in"
      />
      <Navbar
        onCourseClick={(value) => {
          const kebabValue = toKebabCase(value);
          setCourseUrl(`/${kebabValue}`);
        }}
      />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-be-btech" element={<BTech/>} />
        <Route path="/courses-me-mtech" element={<MTech/>} />
        <Route path="/courses-phd" element={<Phd/>} />
        <Route path="/courses-diploma-courses" element={<DiplomaCourses/>} />
        <Route path="/courses-mbbs" element={<Mbbs/>} />
        
      </Routes>
    </>
  );
}

export default App;
