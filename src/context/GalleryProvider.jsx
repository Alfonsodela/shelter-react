import { useEffect, useState } from "react";
import { GalleryContext } from "./galleryContext";
// import { useForm } from "../hook/useForm";

export const GalleryProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemon, setGlobalPokemon] = useState([]);
  const [offSet, setOffSet] = useState(0);

  // const { valueSearch, onInputChange, onResetForm } = useForm({
  //   valueSearch: "",
  // });

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // Fetch by 50 pokemon
  const getAllPokemon = async (limit = 60) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offSet}`
    );
    const data = await res.json();

    const promisesPokemon = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const allPokemons = await Promise.all(promisesPokemon);

    setAllPokemons([...allPokemons]);
    console.log([...allPokemons]);
    setLoading(false);
  };

  // Fetch by total of pokemon
  // const getGlobalPokemon = async () => {
  //   const baseUrl = "https://pokeapi.co/api/v2/";
  //   const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`);
  //   const data = await res.json();

  //   const promisesPokemon = data.results.map(async (pokemon) => {
  //     const res = await fetch(pokemon.url);
  //     const data = await res.json();
  //     return data;
  //   });

  //   const results = await Promise.all(promisesPokemon);
  //   setGlobalPokemon(results);
  //   setLoading(false);
  //   // console.log(results);
  // };

  // Fetch by id
  const getPokemonById = async (id) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  // useEffect(() => {
  //   getGlobalPokemon();
  // }, []);

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

  const [filteredPokemons, setfilteredPokemons] = useState([]);

  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );

      console.log(filteredResults)
      setfilteredPokemons([...filteredPokemons, ...filteredResults]);
    } 
    // else {
    //   const filteredResults = filteredPokemons.filter(
    //     (pokemon) =>
    //       !pokemon.types.map((type) => type.type.name).includes(e.target.name)
    //   );
    //   setfilteredPokemons([...filteredResults]);
    // }
  };

  return (
    <GalleryContext.Provider
      value={{
        allPokemons,
        globalPokemon,
        getPokemonById,
        active,
        setActive,
        filteredPokemons,
        handleCheckbox,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
