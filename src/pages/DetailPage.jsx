import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const DetailPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  console.log(getPokemonById)
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);
    console.log(data)
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return <div>{pokemon.name}</div>;
};

export default DetailPage;
