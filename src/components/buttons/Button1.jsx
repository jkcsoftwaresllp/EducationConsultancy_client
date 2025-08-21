import React from "react";
import styles from "./styles/Button1.module.css";
import { useFormContext } from "../../context/FormContext.jsx";
import { useNavigate } from "react-router-dom";

function Button1({ text, color, path }) {
  const { setShowForm } = useFormContext();
  const navigate = useNavigate(); // ✅ correct way

  const handleClick = () => {
    if (path) {
      // if it's an internal route, navigate
      if (path.startsWith("/")) {
        navigate(path);
      } else {
        // if it's an external link, open in new tab
        window.open(path, "_blank");
      }
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className={styles.Box}>
      <button
        style={{
          background: color === "red" ? "var(--button1-bg)" : "var(--button2-bg)",
        }}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button1;
