import React, { useState, useEffect, useRef } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import clsx from "clsx";
import useLazyLoad from "../../utils/useLazyLoad";
import styles from "./all.module.scss";

const NUM_PER_PAGE = 9;
const TOTAL = 9;

const All = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const triggerRef = useRef(null);

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      const data2 = pokemons.slice(
        ((currentPage - 1) % TOTAL) * NUM_PER_PAGE,
        NUM_PER_PAGE * (currentPage % TOTAL)
      );
      resolve(data2);
    });
  };

  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  const api = "https://pokeapi.co/api/v2/pokemon?limit=89";

  const getAllPokemons = async () => {
    const res = await fetch(api);
    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((currentList) => [...currentList, data]);
        pokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    setLoaded(true);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className={styles.background}>
      <h1 className={styles.heading}>All Pokemons</h1>
      <p>With lazy loading</p>
      {loaded ? (
        <div className={styles.body}>
          {data.map((pokemonStats, index) => (
            <div key={index} className={styles.all}>
              <PokeCard
                name={pokemonStats.name}
                image={pokemonStats.sprites.other.dream_world.front_default}
              />
            </div>
          ))}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
      <div
        ref={triggerRef}
        className={clsx("trigger", { visible: loading })}
      ></div>
    </div>
  );
};

export default All;
