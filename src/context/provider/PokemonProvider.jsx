import { useEffect, useState } from "react";
import { PokemonContext } from "../PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

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
    setLoading(false);
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

  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  // [e.target.name]: e.target.checked  agrega o actualiza la propiedad name con el valor checked.
  // Esto se hace para asegurarse de que no se pierdan las propiedades existentes y
  // solo se modifique la propiedad específica que corresponde al campo del formulario.
  const [filteredPokemons, setFilteredPokemons] = useState({});

  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.checked)
      );

      console.log(filteredResults);
      setFilteredPokemons([...filteredResults]);
      console.log([...filteredResults])
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        getPokemonById,
        loading,
        active,
        setActive,
        filteredPokemons,
        handleCheckbox,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
