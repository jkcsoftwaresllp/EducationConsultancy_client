import React from "react";
import styles from "./styles/HoverTile.module.css";

function TileBox({ items, onClick, label }) {
  if (!items || items.length === 0) return null;

  const [title, ...listItems] = items;

  return (
    <div className={styles.box}>
      <h1>{title}</h1>
      <ul>
        {listItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              onClick(`${label}/${item}`); // /medical/aiims-pg
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className={styles.BottomButton}>VIEW MORE COURSES</button>
    </div>
  );
}

export function HoverTile({ label, boxes = [], style, onClick }) {
  return (
    <div className={styles.container} style={{ ...style }}>
      {boxes.map((box, index) => (
        <TileBox key={index} items={box} onClick={onClick} label={label} />
      ))}
    </div>
  );
}
