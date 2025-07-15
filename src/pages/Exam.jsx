import React from 'react'
import image from '../assets/exam0.jpg'
import Header from '../components/courseDetails/Header'
import ContainerBody from '../components/main/ContainerBody'
import Tile3 from '../components/main/Tile3'
import { tile3Data1 } from './helper/tile3Data1'

function Exam() {
    return (
        <div>
            <Header tittle={"Popular Exam"} subTittle={"Entrance Exams In India -EXAMS 2025-2026 , DATES, APPLICATION FORM & ALERTS"} BGimage={image} />
            <ContainerBody background={1} tittleWithWhite={"Entrance Exams"} tittleWithColor={" In India"} >
                {tile3Data1.map((tile3Data, index) => (
                    <Tile3 tittle={tile3Data.tittle} buttons={tile3Data.buttons} key={index} />
                ))}
            </ContainerBody>

        </div>
    )
}

export default Exam
