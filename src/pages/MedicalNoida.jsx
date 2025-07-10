import React from 'react'
import Header from '../components/courseDetails/Header'
import image from '../assets/hdr-bg.jpg';
import notFoundIcon from '../assets/notfound.jpg';

function MedicalNoida() {
    return (
        <div>
            <Header tittle={"Popular College"} subTittle={"Top Medical College in Mumbai"} BGimage={image} />
            <div>
                <img
                    src={notFoundIcon}
                    alt="Not Found"
                    style={{ display: "block", margin: "auto", maxWidth: "100%", height: "auto" }}
                />
            </div>
        </div>
    )
}

export default MedicalNoida
