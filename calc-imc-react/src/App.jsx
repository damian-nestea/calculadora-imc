import React, { useState } from "react";
import styles from "./App.module.css";
import Logo from "./assets/logo.png";
import { imcLevels, calculateImc } from "./helpers/imc";
import ImcLevel from "./components/ImcLevel";
import Result from "./components/Result";

const App = () => {
  const [heightInput, setHeightInput] = useState(0);
  const [weightInput, setWeightInput] = useState(0);
  const [resultToShow, setResultToShow] = useState(null);
  const imc = calculateImc(heightInput, weightInput);

  const handleCalculateIMC = (e) => {
    e.preventDefault();
    if (heightInput && weightInput) {
      if (
        heightInput > 0 &&
        heightInput < 260 &&
        weightInput > 0 &&
        weightInput < 300
      ) {
        if (imc != null) {
          if (imc.currentImc > 0 && imc.currentImc <= 99) {
            setResultToShow(imc);
          }
        } else {
          setHeightInput(0);
          setWeightInput(0);
          alert("Verifique se os dados estão corretos!");
        }
      } else {
        setHeightInput(0);
        setWeightInput(0);
        alert("Digite os campos corretamente!");
      }
    } else {
      alert("Digite os campos requeridos!");
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
          <form>
            <input
              type="text"
              placeholder="Digite a sua altura. Ex: 183 (em centímetros)."
              value={heightInput > 0 ? heightInput : ""}
              pattern="^\d*[1-9]\d*$"
              required
              onChange={(e) => {
                setHeightInput(Number(e.target.value));
              }}
              disabled={resultToShow ? true : false}
            />
            <input
              type="number"
              placeholder="Digite o seu peso. Ex: 80.3 (em kg) (máx. 2 casas decimais)"
              value={weightInput > 0 ? weightInput : ""}
              pattern="^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$"
              required
              onChange={(e) => {
                setWeightInput(Number(e.target.value));
              }}
              disabled={resultToShow ? true : false}
            />
            <button
              onClick={handleCalculateIMC}
              disabled={resultToShow ? true : false}
            >
              Calcular
            </button>
          </form>
        </section>
        <section className={styles.rightSideContainer}>
          {!resultToShow &&
            imcLevels.map((level, index) => {
              return <ImcLevel key={index} level={level} />;
            })}
          {resultToShow && (
            <Result
              level={resultToShow}
              setResultToShow={setResultToShow}
              setHeightInput={setHeightInput}
              setWeightInput={setWeightInput}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
