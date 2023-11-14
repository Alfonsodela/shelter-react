import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../component/CardPokemon";

const SearchPage = () => {
  const pokemonsRendered = useFilteredAndRenderedPokemons();

  return (
    <div className="container">
      <div className="card-list-pokemon container">{pokemonsRendered}</div>
    </div>
  );
};

const useFilteredAndRenderedPokemons = () => {
  const location = useLocation();

  const { allPokemons } = useContext(PokemonContext);
  console.log(allPokemons);

  const pokemonsFilterByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  console.log(pokemonsFilterByName);

  const pokemonsRendered = pokemonsFilterByName.map((pokemon) => (
    <CardPokemon key={pokemon.id} pokemon={pokemon} />
  ));

  return pokemonsRendered;
};

export default SearchPage;
