import React from "react";
import styles from "./Result.module.css";
import happyIcon from "../../assets/happy.png";
import sadIcon from "../../assets/sad.png";

const Result = ({ level, setResultToShow, setHeightInput, setWeightInput }) => {
  return (
    <div className={styles.flexItem} style={{ backgroundColor: level.color }}>
      <img
        className={styles.icone}
        src={level.icon === "happy" ? happyIcon : sadIcon}
      />
      <h2 className={styles.titulo}>{level.level}</h2>
      <p className={styles.resultImc}>
        Seu IMC é de <strong>{level.currentImc}!</strong>
      </p>
      <p className={styles.descricao}>
        IMC entre <strong>{level.imc[0]}</strong> e{" "}
        <strong>{level.imc[1]}</strong>.
      </p>
      <button
        className={styles.botao}
        onClick={() => {
          setResultToShow(null);
          setHeightInput("");
          setWeightInput("");
        }}
      >
        Novo cálculo
      </button>
    </div>
  );
};

export default Result;
