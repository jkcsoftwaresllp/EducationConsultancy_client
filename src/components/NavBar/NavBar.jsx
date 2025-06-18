import { useState } from 'react';
import styles from './Navbar.module.css';
import HoverTile from '../courseDetails/HoverTile';
import { createPortal } from 'react-dom';

///
const CoursesBox1 = ["Engineering Courses" ,"B.E/B.Tech","M.E/M.Tech","Ph.D.","Diploma Courses"]
const CoursesBox2 = ["Medical Courses","MBBS","MD","BAMS","BDS","MDS","MS"]
const CoursesBox3 = ["Management Courses","BBA","BMS","BBM","BHMCT","MHM"]
const CoursesBox4 = ["LAW Courses","B.A. LL.B.","LL.B.","LL.M.","B.Sc. LL.B"]
////
const EngineeringBox1 = ["Top Rank Colleges","Top Engineering Colleges","Top Private Engineering Colleges","Top IITs in India","Top NITs in India","Top Colleges in Bangalore"]
const EngineeringBox2 = ["College By Courses","Nursing Colleges","B.Optom Colleges","BPT Colleges","BPT Colleges","All College By Courses"]
const EngineeringBox3 = ["Popular Courses","B.E/B.Tech","M.E/M.Tech","Ph.D.","Diploma Courses","Distance Diploma Courses"]
const EngineeringBox4 = ["Popular Exams","NEET Exam","COMEDK","UPSEE","Jee Main","All Engineering Exams"]

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
                {index === 0 && <HoverTile Box1={CoursesBox1} Box2={CoursesBox2} Box3={CoursesBox3} Box4={CoursesBox4} style={{ left: `-${320}px` }}  />}
                {index === 1 && <HoverTile Box1={EngineeringBox1} Box2={EngineeringBox2} Box3={EngineeringBox3} Box4={EngineeringBox4} style={{ left: `-${400}px` }}  />}
                {index === 2 && <HoverTile style={{ left: `-${500}px` }}  />}
                {index === 3 && <HoverTile style={{ left: `-${600}px` }}  />}
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
