import React from "react";
import styles from "./PokeCard.module.scss";

const PokeCard = ({ name, image }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={image} className={styles.img} />
        <h4 className={styles.title}>{name}</h4>
      </div>
    </>
  );
};

export default PokeCard;
