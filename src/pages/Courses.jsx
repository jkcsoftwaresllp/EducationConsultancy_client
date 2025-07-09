import React from 'react'
import styles from './styles/Courses.module.css'
import Header from '../components/courseDetails/Header'
import image from '../assets/hdr-bg.jpg'
import ContainerBody from '../components/main/ContainerBody'
import Tile from '../components/main/Tile'
import { coursesTileData } from './helper/coursesTileData'

function Courses() {
    return (
        <div>
            <Header BGimage={image} tittle={"Courses & Fees Structure"} subTittle={"Approved by : UGC, AICTE, BCI, PCI, NCTE, ICAR"} />
            <ContainerBody tittleWithWhite={"Select Your"} tittleWithColor={"Study Goal"} subheading={"Reset your research strategy by browsing through our lists of top colleges, exams,courses and careers based on your area of interest!"} >
                {coursesTileData.map((tile, index) => (
                    <Tile
                        key={index}
                        border={1}
                        image={tile.image}
                        tittle={tile.title}
                        college={tile.college}
                        courses={tile.courses}
                    />
                ))}
            </ContainerBody>
        </div>
    )
}

export default Courses
