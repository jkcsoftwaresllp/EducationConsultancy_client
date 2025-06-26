import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { HoverTile } from "../courseDetails/HoverTile";
import { menuLinks } from "./styles/helper/menuLink";

function Navbar({ onCourseClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🎓</div>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={styles.links}>
        {menuLinks.map(({ label, boxes, offset }, index) => (


          <div key={label} className={styles.linkWrapper}>
            <a
              className={styles[`link${index}`]}
              onClick={(e) => {
                e.preventDefault(); // prevents # navigation
                onCourseClick(label); // this will trigger navigate via App
              }}
              // href={label === "ABOUT US" ? `/${label.toLowerCase().replace(/\s+/g, '-')}` : "/"  }
              href="#"
            >
              {label}
            </a>
            {boxes && (
              <div className={styles[`hoverBox${index}`]}>
                <HoverTile
                  label={label}
                  boxes={boxes}
                  style={{ left: `${offset}px` }}
                  onClick={onCourseClick}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {open && (
        <div className={styles.sidebar}>
          {menuLinks.map(({ label }) => (
            <a href="#" key={label}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
