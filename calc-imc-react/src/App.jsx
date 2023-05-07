import React, { useState } from "react";
import styles from "./App.module.css";
import Logo from "./assets/logo.png";

const App = () => {
  const [heightInput, setHeightInput] = useState(0);
  const [weightInput, setWeightInput] = useState(0);

  const handleCalculateIMC = () => {
    if (heightInput && weightInput) {
    } else {
      alert("Digite todos os campos!");
    }
  };
  return (
    <div className={styles.mainAppContainer}>
      <header className={styles.headerContainer}>
        <img src={Logo} />
      </header>
      <main>
        <section className={styles.leftSideContainer}>
          <h1>Calculadora de IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <p>
            Que tal descobrir o seu IMC? Coloque seus dados na calculadora!.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 183 (em centímetros)."
            value={heightInput > 0 ? heightInput : ""}
            onChange={(e) => {
              setHeightInput(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 80.3 (em kg)."
            value={weightInput > 0 ? weightInput : ""}
            onChange={(e) => {
              setWeightInput(e.target.value);
            }}
          />
          <button onClick={handleCalculateIMC}>Calcular</button>
        </section>
        <section className={styles.rightSideContainer}>Right</section>
      </main>
    </div>
  );
};

export default App;
