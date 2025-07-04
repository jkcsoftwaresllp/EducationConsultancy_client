import { Routes, Route, useNavigate, Navigate, Form } from "react-router-dom";
import Home from "./pages/home";
import TopBar from "./components/topBar/topBar";
import Navbar from "./components/navBar/navBar";
import { useEffect, useState } from "react";
import { BTech } from "./components/coursesRoutes/BTech";
import { MTech } from "./components/coursesRoutes/MTech";
import Phd from "./components/coursesRoutes/Phd";
import DiplomaCourses from "./components/coursesRoutes/DiplomaCourses";
import Mbbs from "./components/coursesRoutes/Mbbs";
import Md from "./components/coursesRoutes/Md";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EnquiryForm from "./pages/EnquiryForm";
import Footer from "./components/footer/footer";
import styles from './App.module.css'
import Exam from "./pages/Exam";
import Bams from "./components/coursesRoutes/Bams";
import Bds from "./components/coursesRoutes/Bds";
import Ms from "./components/coursesRoutes/Ms";

function App() {
  const [courseUrl, setCourseUrl] = useState("");
  console.log(courseUrl);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(courseUrl);
  }, [courseUrl]);

  const toKebabCase = (str) => {
    return str
      .toLowerCase()
      .replace(/\./g, "") // remove all dots
      .replace(/[\/\s]+/g, "-") // replace slashes and spaces with hyphen
      .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
  };
  return (
    <>
      <div className={styles.main} >
        <div className={styles.navbar} >
          <TopBar
            address="511, 5 Floor,Ashiana tower, Exhibition Rd, near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001"
            phone="+91 93043 65563"
            email="info@thecareeezone.co.in"
          />
          <Navbar
            onCourseClick={(value) => {
              const kebabValue = toKebabCase(value);
              if (kebabValue === "courses" || kebabValue === "engineering" || kebabValue === "medical" || kebabValue === "management") {
                setCourseUrl(courseUrl)
              } else {
                kebabValue === "home"
                  ? setCourseUrl(`/`)
                  : setCourseUrl(`/${kebabValue}`);
              }
            }}
          />
        </div>
        <EnquiryForm />
        <div className={styles.body}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses-be-btech" element={<BTech />} />
            <Route path="/courses-me-mtech" element={<MTech />} />
            <Route path="/courses-phd" element={<Phd />} />
            <Route path="/courses-diploma-courses" element={<DiplomaCourses />} />
            <Route path="/courses-mbbs" element={<Mbbs />} />
            <Route path="/courses-md" element={<Md />} />
            <Route path="/courses-bams" element={<Bams />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/courses-bds" element={<Bds/>} />
            <Route path="/courses-ms" element={<Ms/>} />
            <Route path="/exam" element={<Exam/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
