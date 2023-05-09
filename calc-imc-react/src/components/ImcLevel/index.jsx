import React from "react";
import styles from "./ImcLevel.module.css";
import happyIcon from "../../assets/happy.png"
import sadIcon from "../../assets/sad.png"

const ImcLevel = ({ level }) => {
  return (
    <div className={styles.flexItem} style={{ backgroundColor: level.color}}>
      <img className={styles.icone} src={level.icon === 'happy' ? happyIcon : sadIcon } />
      <h2 className={styles.titulo}>{level.level}</h2>
      <p className={styles.descricao}>IMC entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}</strong>.</p>
    </div>
  );
};

export default ImcLevel;
