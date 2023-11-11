import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "./CardPokemon";

const PokemonList = () => {
  const { allPokemons } = useContext(PokemonContext);
  console.log(allPokemons)

  return (
    <div className="card-list-pokemon container">
      {allPokemons.map((pokemon) => {
        <CardPokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
