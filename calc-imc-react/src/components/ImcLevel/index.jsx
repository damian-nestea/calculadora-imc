import React from "react";
import styles from "./ImcLevel.module.css";

const ImcLevel = ({ level }) => {
  return (
    <div className={styles.flexItem} style={{ backgroundColor: level.color}}>
      <h2 className={styles.titulo}>{level.level}</h2>
      
    </div>
  );
};

export default ImcLevel;
