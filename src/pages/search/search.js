import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import styles from "./search.module.scss";

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokedata, setPokedata] = useState({});

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (search) => {
    if (search) {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      if (data) {
        setPokedata({
          name: data.species.name,
          src: data.sprites.front_default,
        });
      } else {
        setPokedata({
          name: "Not available",
          src: " data.sprites.front_default",
        });
      }
    }
  };

  return (
    <div className={styles.background}>
      <h1 className={styles.heading}>PokeDex</h1>
      <div className={styles.searchBox}>
        <input
          placeholder="Search..."
          name="search"
          onChange={(e) => handleChange(e)}
          className={styles.search}
        />
        <button
          className={styles.btn}
          onClick={() => {
            handleSubmit(search.toLowerCase());
            setSearch("");
          }}
        >
          Search
        </button>
      </div>
      {pokedata.src ? (
        <div className={styles.pokecard}>
          <img className={styles.image} src={pokedata.src} />
          <h2 className={styles.name}>{pokedata.name}</h2>
        </div>
      ) : (
        <h4>Search about your favourite pokemon right now!</h4>
      )}
    </div>
  );
};

export default Search;
