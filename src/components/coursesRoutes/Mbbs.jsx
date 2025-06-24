import React from 'react'
import image from '../../assets/hdr-bg.jpg'
import Header from '../courseDetails/Header'
import ParaTiles from '../courseDetails/ParaTiles'
import Table from '../courseDetails/Table'
import CareerInfoTile from '../courseDetails/CareerInfoTile'

function Mbbs() {



    const data1 = [
        ["26 May, 2023 : ", "Expected Cut off of NEET 2023, Check Here"],
        ["08 May, 2023 : ", "IPU CET 2023 Expected to be Held From May 30 to June 15; Check Official Notice Here"],
        ["15 March, 2023 : ", "Teerthanker Mahaveer University Admission 2023 Open for UG, PG, Diploma and Integrated Programmes; Check Details Here"]
    ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    return (
        <div>
            <Header tittle={"Diploma In Information Technology"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"MBBS in India"} headingSize={"24px"} />
            <ParaTiles heading={"What is Bachelor of Medicine, Bachelor of Surgery [MBBS]?"} para={`MBBS course in India can be completed in 5.5 years. It includes 4.5 years of academic education and 1 year of mandatory internship. Students who have completed 12th with Physics, Chemistry, and Biology as the mandatory subjects are eligible to apply for the MBBS course. Moreover, students need to undertake certain medical examinations to get admission in one of the universities.`} headingSize={"15px"} />
            <ParaTiles para={`The number of Indian students who undertake medical examination keeps on increasing each year. According to reports, the number of students appearing for NEET increase every year. Figures reveal the tough competition that Indian medical aspirants have to face to get into the medical colleges.`} />
            <ParaTiles para={`In India, there is a lot of competition for MBBS seats in government medical colleges due to the subsidised fee structure. The average or minimum fee for MBBS course in government medical colleges is around INR 10,000 per annum. Students with top NEET ranks have chances to get admission in government medical colleges. Apart from government MBBS colleges, there are a number of top private MBBS colleges in India that offer good quality education to students. However, the minimum fee structure of private MBBS colleges in India is around Rs. 4,00,000.`} />
            <ParaTiles heading={"Bachelor of Medicine, Bachelor of Surgery [MBBS] - Latest Notifications"} headingSize={"15px"} />
            <CareerInfoTile data={data1} headingColor={1} />
            <ParaTiles para={`MBBS has been abbreviated from the Latin word Medicinae Baccalaureus Baccalaureus Chirurgiae. It is a combination of 2 advanced medical undergraduate programs called Bachelor of Medicine and Bachelor of Surgery.  `} />
            <ParaTiles heading={"Check Out: Full Form of Medical Courses"} para={"MBBS Admission takes place through the NEET exam. Students must be above 17 years of age and have studied Physics, Chemistry, Mathematics, and Biology as compulsory subjects in class 12 in order to qualify for the NEET Exam. Colleges start calling students according to their NEET scores. Students need to clear the NEET cut off to take admission to a college. "} headingSize={"15px"} />




                {/* 
            <ParaTiles heading={" "} para={" "} headingSize={"15px"} /> */}
                {/*              
            <ParaTiles heading={" "} headingSize={"15px"} /> */}
                {/* <ParaTiles para={``}  /> */}
            
        </div>
    )
}

export default Mbbs
