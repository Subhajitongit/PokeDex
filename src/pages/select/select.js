import React from "react";
import styles from "./select.module.scss";

const Select = () => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h2 className={styles.title}>Where do you want to go?</h2>
        <div className={styles.btnHolder}>
          <a className={styles.btnAll} href='/all'>See all pokemons</a>
          <a className={styles.btnDex} href='/search'>Search for a pokemon</a>
        </div>
      </div>
    </div>
  );
};

export default Select;
