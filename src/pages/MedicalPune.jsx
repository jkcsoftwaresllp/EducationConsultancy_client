import React from 'react'
import Tile from '../components/main/Tile'
import image1 from '../assets/first-img.jpg';
import { medicalPuneData } from './helper/medicalPuneData'
import Header from '../components/courseDetails/Header'
import image from '../assets/hdr-bg.jpg';

function MedicalPune() {
    return (
        <div>
             <Header tittle={"Popular College"} subTittle={"Top Medical College in Tamil Nadu"} BGimage={image} />
            {medicalPuneData.map((para, index) => (
                console.log(para[0].title),
                < Tile
                    key={index}
                    width={"lg"}
                    paras={para}
                    border={1}
                    image={para[0].image}
                    tittle={para[0].title}
                    buttonLabel={"View Details"}
                    buttonColor={"green"} />
            ))
            }
        </div>
    )
}

export default MedicalPune
