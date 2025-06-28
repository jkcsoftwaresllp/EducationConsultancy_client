import React from 'react'
import image from '../../assets/hdr-bg.jpg'
import Header from '../courseDetails/Header'
import ParaTiles from '../courseDetails/ParaTiles'
import Table from '../courseDetails/Table'
import CareerInfoTile from '../courseDetails/CareerInfoTile'
import graph from '../../assets/graph.png'  
import styles from './styles/Md.module.css'

function Md() {



    const data1 = [
        ["Highlights", ""],
        [
            "Degree",
            "Masters"
        ],
        [
            "Full Form",
            "Doctorate of Medicine in Pathology"
        ],
        [
            "Duration",
            "3 Years"
        ],
        [
            "Age",
            "No age limit as such"
        ],
        [
            "Minimum Percentage",
            "50%"
        ],
        [
            "Average Fees",
            "INR 42,000 - 12.3 LPA"
        ],
        [
            "Similar Options of Study",
            "MD (Anatomy), MD (Microbiology), MD (Community Medicine), MD (Psychiatry) etc"
        ],
        [
            "Average Salary",
            "INR 10 LPA [Source:Glassdoor]"
        ],
        [
            "Employment Roles",
            "Pathologist, Discovery Breeder, Research Assistant, Professor/Associate Professor - Pathology, Business Dev Executive - Pathology, Lab Technician, OP Guest Relationship Executive, Pathology Code etc"
        ],
        [
            "Opportunities",
            "Non-Profit Organizations, Nursing Homes, Government, and Private Hospitals and Clinics, Academic Institutions, Private Clinics, Government Agencies, AIIMS, Apollo, Fortis, Max, BLK Hospital"
        ]
    ]
    const data2 = [
        [
            "SI.No.",
            "Name of the College"
        ],
        [
            "1",
            "All India Institute of Medical Sciences"
        ],
        [
            "2",
            "Jawaharlal Institute of Postgraduate Medical Education and Research"
        ],
        [
            "3",
            "Kasturba Medical College"
        ],
        [
            "4",
            "St. John's Medical College"
        ],
        [
            "5",
            "Stanley Medical College"
        ],
        [
            "6",
            "Saveetha Institute of Medical and Technical Sciences"
        ],
        [
            "7",
            "Amrita Vishwa Vidyapeetham"
        ],
        [
            "8",
            "Aligarh Muslim University"
        ],
        [
            "9",
            "Sri Balaji Vidyapeeth University"
        ],
        [
            "10",
            "Post Graduate Institute of Medical Education and Research"
        ]
    ]
    const data3 = [
        ["College Names	", "Fees"],
        [
            "Grant Medical College",
            "INR 50,000"
        ],
        [
            "SETH GS Medical College",
            "INR 67,000"
        ],
        [
            "Lokmanya Tilak Municipal Medical College",
            "INR 98,000"
        ],
        [
            "TATA Memorial Centre",
            "INR 2,70,000"
        ],
        [
            "Topiwala National College",
            "INR 85,500"
        ]
    ]
    const data4 = [
        ["College Names	", "Fees"],
        [
        "AIIMS",
        "INR 3000"
      ],
      [
        "Maulana Azad Medical College",
        "INR 10,000"
      ],
      [
        "Jamia Hamdard University",
        "INR 2,60,000"
      ],
      [
        "UCMS Delhi",
        "INR 50,000"
      ],
      [
        "Lady Hardinge Medical College",
        "INR 20,000"
      ]
    ]
    const data5 = [
        ["College Names	", "Fees"],
        [
        "KMC",
        "INR"
      ],
      [
        "IPGMER",
        "INR"
      ],
      [
        "R G Kar Medical College",
        "INR"
      ],
      [
        "Nilratan Sircar",
        "INR"
      ],
      [
        "CNMC",
        "INR"
      ]
    ]
    const data6 = [
        ["College Names	", "Fees"],
        [
        "St. John’s Medical College",
        "INR 9,10,000"
      ],
      [
        "Ramaiah Medical College",
        "INR 1,15,000"
      ],
      [
        "BMCRI",
        "INR 1,10,000"
      ],
      [
        "BRAMC",
        "INR 1,15,000"
      ],
      [
        "KIMS",
        "INR 2,00,000"
      ]
    ]
    const data7 = [
        ["College Names	", "Fees"],
        [
        "Dr DY Patil VIdhyapeeth",
        "INR 3,30,000"
      ],
      [
        "Maharashtra Institute of Medical Education",
        "INR 8,00,000"
      ],
      [
        "SKNMCGH",
        "INR 10,60,000"
      ],
      [
        "Bharati Bidhyapeeth Deemed University",
        "INR 4,00,000"
      ]
    ]
    const data8 = [
        [
        "College Name",
        "Fees Per Annum"
      ],
      [
        "Bharati Vidyapeeth Deemed University, Pune",
        "INR 4 Lakhs"
      ],
      [
        "St. John’s Medical College, Bangalore",
        "INR 9 Lakhs"
      ],
      [
        "Jamia Hamdard University, Delhi",
        "INR 3 Lakhs"
      ],
      [
        "Lokmanya Tilak Municipal Medical College, Mumbai",
        "INR 1 Lakhs"
      ],
      [
        "Maharashtra Institute of Medical Education, Pune",
        "INR 8 LPA"
      ]
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
    // const data = [
    //     [
    // ]
    // const data = [
    //     [
    // ]
    return (
        <div>
            <Header tittle={"Doctor Of Medicine In Pathology (MD - Pathology)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About MD - Patholog"} para={`MD Pathology is a postgraduate degree in medicine and diagnostics/ the study of disease. The eligibility for this course is MBBS Degree from an institution recognized by the Medical Council of India (MCI) with minimum aggregate marks as required by the institute.`} headingSize={"24px"} />
            <ParaTiles para={`This specialty addresses the main 3 components of disease – cause, mechanism of development or origin, consequences of changes.`} />
            <ParaTiles para={`The branch deals with diagnostic, testing and treatment methods using genetic technologies, thus underpinning the concept of patient care and prevention of diseases. Physicians practicing pathology are called pathologists.`} />
            <ParaTiles para={`They generally work with other doctors, scientists, and health professionals in hospitals and clinics to diagnose, treat and prevent diseases.`} />
            <ParaTiles para={`The process of pathology is quite simple, mapping the overall response of the body to any foreign influence, i.e. antigen or disease. Subsequently, this knowledge is used to diagnose and treat illnesses.`} />
            <ParaTiles para={`Pathologists compare the normal structure and function (cell count, blood) of a human body to the abnormal structure and function observed when a person is not well.`} />
            <ParaTiles heading={"What is MD Pathology All About?"} para={`An MD Pathology duration is a three-year-old doctorate course that focuses on developing the skills and techniques of a pathology student. An MD Pathology is a medical science and technology domain that correlates with pathology principles. The MD Pathology course is an advanced version of the medical field with a demanding vision. This course is mainly one of the core branches of medical science. The technological advancement in this field is also developing day by day.`} headingSize={"15px"} />
            <ParaTiles heading={"What Does an MD Pathology Post Graduate Do?"} para={`MD Pathology doctorate holds a Ph.D. degree in Pathology, a good career option. The MD in Pathology degree can open the door to many new and exciting jobs. A career in dental science means that aspirants can make a career in the medical field. Here are some qualities which an MD Pathology doctorate does.`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Top 10 MD Pathology Colleges in India"} para={`Top MD Pathology colleges in India and abroad offer courses in doctorate degrees to students interested in learning applications related to science. Some of the very best colleges for MD Pathology colleges in India are as follows:`} headingSize={"15px"} />
            <ParaTiles heading={"Top MD Pathology Colleges in India"} headingSize={"15px"} />
            <Table LeftcellWidth={'5%'} RightcellWidth={'90%'} tableData={data2} />
            <ParaTiles heading={"Top MD Pathology Colleges in Indian States"} para={`There are numerous reputed colleges in India which offer MD in Pathology degree or post graduation in pathology courses. Here we have mentioned some of them.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} heading={"Mumbai"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} heading={"Delhi"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} heading={"Kolkata"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} heading={"Bangalore"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} heading={"Pune"} />
            <ParaTiles heading={"Scope"} para={`Career opportunities in the field of pathology abound since there are multiple specialties in pathology, and a postgraduate can choose to specialize in any of the areas such as histopathology, cytopathology, clinical pathology, and immunohistochemical techniques, and work under the supervision of some of the best pathologists.`} headingSize={"15px"} />
            <ParaTiles para={`They may even set up their own private clinics known as diagnostic laboratories. Pathologists are lucratively recruited in the private/ corporate sectors/ hospitals and are paid in the range of INR 60 to 80,000 per month.`} />
            <ParaTiles para={`Typically, pathologists function in 3 broad areas- as diagnosticians in hospitals; investigators or researchers in medical laboratories, and as teachers in colleges and universities.`} />
            <ParaTiles para={`Successful postgraduates of the discipline work as Specialists in any of the sub-branches of pathology such as surgical pathology, clinical pathology, anatomical pathology, veterinary pathology, molecular pathology, plant pathology, and forensic pathology.`} />
            <ParaTiles para={`They may also choose to work as consultants to doctors or medical examiners. Employment opportunities for experienced professionals in this field are also open in universities, laboratories, and hospitals.`} />
            <ParaTiles para={`They are employed in areas of public health, law enforcement, government agencies, among other fields. Additionally, they may even step into research and pursue a Ph. D in any specialized branch of pathology.`} />
            <ParaTiles para={`As a fresh postgraduate, pathologists earn about INR 8000 to Rs.12000 monthly. With experience, the salary increases to INR15,000 to 22,000 monthly. In private hospitals, they may earn about INR 3,00,000 to 3,50,000 yearly in the beginning.`} />
            <ParaTiles heading={"Fee Structure"} para={`MD Pathology Fees structure ranges from INR 1 - 12 LPA. The fee for the course may vary depending upon the facilities and amenities provided at the college/university and the level of education offered.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} heading={"MD Pathology Fee Structure"} />           
            <img className={styles.graph} src={graph} alt="" />
            
            

        </div>
    )
}

export default Md
