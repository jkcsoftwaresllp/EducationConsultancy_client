import { useState } from 'react';
import styles from './Navbar.module.css';
import HoverTile from '../courseDetails/HoverTile';
import { createPortal } from 'react-dom';

///
const CoursesBox1 = ["Engineering Courses" ,"B.E/B.Tech","M.E/M.Tech","Ph.D.","Diploma Courses"]
const CoursesBox2 = ["Medical Courses","MBBS","MD","BAMS","BDS","MDS","MS"]
const CoursesBox3 = ["Management Courses","BBA","BMS","BBM","BHMCT","MHM"]
const CoursesBox4 = ["LAW Courses","B.A. LL.B.","LL.B.","LL.M.","B.Sc. LL.B"]

const EngineeringBox1 = ["Top Rank Colleges","Top Engineering Colleges","Top Private Engineering Colleges","Top IITs in India","Top NITs in India","Top Colleges in Bangalore"]
const EngineeringBox2 = ["College By Courses","Nursing Colleges","B.Optom Colleges","BPT Colleges","BPT Colleges","All College By Courses"]
const EngineeringBox3 = ["Popular Courses","B.E/B.Tech","M.E/M.Tech","Ph.D.","Diploma Courses","Distance Diploma Courses"]
const EngineeringBox4 = ["Popular Exams","NEET Exam","COMEDK","UPSEE","Jee Main","All Engineering Exams"]

const MedicalBox1 = ["Top Rank Colleges","IFIM Business School","Top Pharmacy Colleges in India","Top BAMS Colleges in India","Top BHMS Colleges in India"]
const MedicalBox2 = ["Popular Courses","MBBS","MD","MS","BAMS","BDS"]
const MedicalBox3 = ["Popular Exams","NEET UG","NEET PG","AIIMS PG","JIPMER PG","PGIMER Exam"]
const MedicalBox4 = ["College By City","Noida","Mumbai","Bangalore","Chennai","Pune"]

const ManagementBox1 = ["Top Rank Colleges", "IFIM Business School","IIM, Ahmedabad (IIMA)", "Indian School Of Business (ISB)","Indian Institute Of Management Bangalore (IIMB)","Indian Institute Of Management, Udaipur (IIMU)"]
const ManagementBox2 = ["Popular Courses", "BBA", "MBA", "BMS","BHMCT","MHM","EMBA"]
const ManagementBox3 = ["Popular Exams","NEET UG","NEET PG","AIIMS PG","JIPMER PG","PGIMER Exam"]
const ManagementBox4 = ["College By City","Noida","Mumbai","Bangalore","Chennai","Pune"]
////
function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['HOME', 'ABOUT US', 'EXAM', 'COURSES', 'ENGINEERING', 'MEDICAL', 'MANAGEMENT', 'LAW', 'CONTACT US'];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🎓</div>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>
      <div className={styles.links}>
        {links.map((link, index) => (
          <div key={link} className={styles.linkWrapper}>
            <a className={styles[`link${index}`]} href="#" key={link}>{link}</a>
            <div className={styles[`hoverBox${index}`]}>
              <div>
                {index === 3 && <HoverTile Box1={CoursesBox1} Box2={CoursesBox2} Box3={CoursesBox3} Box4={CoursesBox4} style={{ left: `-${620}px` }}  />}
                {index === 4 && <HoverTile Box1={EngineeringBox1} Box2={EngineeringBox2} Box3={EngineeringBox3} Box4={EngineeringBox4} style={{ left: `-${700}px` }}  />}
                {index === 5 && <HoverTile Box1={MedicalBox1}  Box2={MedicalBox2}  Box3={MedicalBox3}  Box4={MedicalBox4} style={{ left: `-${800}px` }}  />}
                {index === 6 && <HoverTile Box1={ManagementBox1} Box2={ManagementBox2} Box3={ManagementBox3} Box4={ManagementBox4} style={{ left: `-${900}px` }}  />}
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className={styles.sidebar}>
          {links.map((link) => (
            <a href="#" key={link}>{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
