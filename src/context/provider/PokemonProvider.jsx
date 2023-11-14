import { useEffect, useState } from "react";
import { PokemonContext } from "../PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState([0]);

  const getPokemons = async (limit = 60) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseUrl}pokemon/?limit=${limit}&offset=${offset}"`
    );
    const data = await res.json();

    const promisesPokemons = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const allPokemons = await Promise.all(promisesPokemons);
    setAllPokemons([...allPokemons]);
    console.log(allPokemons);
  };

  const getPokemonById = async (id) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemons, getPokemonById }}>
      {children}
    </PokemonContext.Provider>
  );
};
