import React from 'react'
import Tile from '../components/main/Tile'
import image1 from '../assets/first-img.jpg';
import { engineeringCollegesData } from './helper/engineeringCollegesData'
import Header from '../components/courseDetails/Header'
import image from '../assets/hdr-bg.jpg';

function EngineeringColleges() {

    return (
        <div>
            <Header tittle={"Management Colleges"} subTittle={"Top Management College etc..."} BGimage={image} />
            { engineeringCollegesData.map((para, index) => (
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

export default EngineeringColleges
