import './App.css'
import FormContainer from './components/header/FormContainer'
import TittleContainer from './components/header/TittleContainer'
import ContainerBody from './components/main/ContainerBody'
import Tile from './components/main/tile'
import firstImage from './assets/first-img.jpg'

function App() {

  return (
    <div>
      {/* Education Consultancy */}
      <TittleContainer tittle={"Best Educational Consultancy in Patna"} subTittle={"Find Colleges, Courses & Exams that are Best for You"} discription={"450 + University   |4040 + Colleges   |   221 + Courses   | 861+ Sub Courses   | 100 + Exams"} />
      <FormContainer />
      <ContainerBody background={1} tittleWithWhite={"Select Your "} tittleWithColor={"Study Goal"} subheading={"Reset your research strategy with top admission consultancy in patna by browsing through our lists of top colleges, exams,courses and careers based on your area of interest!"} >
      <Tile image={firstImage} tittle={"Engineering"} college={"450"} courses={"B.Tech | M.Tech | Diploma | Bachelors+Masters"} />
      <Tile image={firstImage} tittle={"Engineering"} college={"450"} courses={"B.Tech | M.Tech | Diploma | Bachelors+Masters"} />
      <Tile image={firstImage} tittle={"Engineering"} college={"450"} courses={"B.Tech | M.Tech | Diploma | Bachelors+Masters"} />
    </ContainerBody>
    </div >
  )
}

export default App
