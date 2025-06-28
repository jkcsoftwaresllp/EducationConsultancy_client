import { BTech } from "../components/coursesRoutes/BTech";
import FormContainer from "../components/header/FormContainer";
import TittleContainer from "../components/header/TittleContainer";
import ContainerBody from "../components/main/ContainerBody";
import Tile from "../components/main/Tile";
import image1 from "../assets/first-img.jpg"
import Tile2 from "../components/main/Tile2";
import AutoSlider from "../components/main/TileSlider";
import MainBodyFormContainer from "../components/main/MainBodyFormContainer";
import { tileContent } from './helper/tileData'
import { tilesData } from './helper/tilesData'

function Home() {
  return <>
    <TittleContainer tittle={"Best Educational Consultancy in Patna"} subTittle={"Find Colleges, Courses & Exams that are Best for You"} discription={"450 + University   |4040 + Colleges   |   221 + Courses   | 861+ Sub Courses   | 100 + Exams"} />
    <FormContainer />
    <ContainerBody background={1} tittleWithWhite={"Select Your "} tittleWithColor={"Study Goal"} subheading={"Reset your research strategy with top admission consultancy in patna by browsing through our lists of top colleges, exams,courses and careers based on your area of interest!"} >
      {tilesData.map((tile, index) => (
        <Tile
          key={index}
          image={tile.image}
          tittle={tile.tittle}
          college={tile.college}
          courses={tile.courses}
        />
      ))}
    </ContainerBody>
    <ContainerBody tittleWithWhite={"Well-versed in all aspects of admissions through the Best Admission Consultancy in Patna"} subheading={"Reset your research strategy with top admission consultancy in patna by browsing through our lists of top colleges, exams, courses and careers based on your area of interest!"} >
      {tileContent.map((tile, index) => (
        <Tile2
          key={index}
          imageSrc={tile.imageSrc}
          title={tile.title}
          description={tile.description}
          onReadMore={() => alert(`Read more: ${tile.title}`)}
          onEnquiry={() => alert(`Enquiry for: ${tile.title}`)}
        />
      ))}
    </ContainerBody>
    <AutoSlider />
    <MainBodyFormContainer />
  </>;
}

export default Home;
