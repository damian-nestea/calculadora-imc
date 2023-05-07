import React from "react";
import styles from "./App.module.css";
import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className={styles.mainAppContainer}>
      <header className={styles.headerContainer}>
        <img src={Logo} />
      </header>
      <main>
        <section className={styles.leftSideContainer}>Left</section>
        <section className={styles.rightSideContainer}>Right</section>
      </main>
    </div>
  );
};

export default App;
