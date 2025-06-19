import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TopBar from "./components/topBar/topBar";
import Navbar from "./components/navBar/navBar";
import { useState } from "react";

function App() {
  const [courseUrl, setCourseUrl] = useState("/");

  return (
    <>
      <TopBar
        address="5A, Bhagwati Sharan Enclave, Boring Road, Patna-1"
        phone="+91-097080 44044"
        email="info@admissionexperts.co.in"
      />
      <Navbar
        onCourseClick={(value) => {
          setCourseUrl(value);
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
