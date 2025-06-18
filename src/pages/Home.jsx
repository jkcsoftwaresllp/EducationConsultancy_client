import TopBar from '../components/topBar/topBar';
import Navbar from '../components/navBar/navBar';
import HoverTile from '../components/courseDetails/HoverTile';

function Home() {
  return (
    <>
      <TopBar
        address="5A, Bhagwati Sharan Enclave, Boring Road, Patna-1"
        phone="+91-097080 44044"
        email="info@admissionexperts.co.in"
      />
      <Navbar />
      {/* <HoverTile/> */}
      {/* Other home content goes here */}
    </>
  );
}

export default Home;
