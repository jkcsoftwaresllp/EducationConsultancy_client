import { useState } from 'react';
import styles from './Navbar.module.css';

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
        {links.map((link) => (
          <a href="#" key={link}>{link}</a>
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
