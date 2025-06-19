import TopBar from "../components/topBar/topBar";
import Navbar from "../components/navBar/navBar";
import { useState } from "react";
// import {HoverTile} from '../components/courseDetails/HoverTile';

function Home() {

  const [courseUrl, setCourseUrl] = useState("/")

  return (
    <>
      <TopBar
        address="5A, Bhagwati Sharan Enclave, Boring Road, Patna-1"
        phone="+91-097080 44044"
        email="info@admissionexperts.co.in"
      />
      <Navbar
        onCourseClick={(value) => {
          console.log(value);
        }}
      />
    </>
  );
}

export default Home;
