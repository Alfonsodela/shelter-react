import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GalleryContext } from "../context/galleryContext";
import CardPokemon from "../component/CardPokemon";

const SearchPage = () => {
  const pokemonsRendered = useFilterAndRenderUsers();

  return (
    <div className="container">
      <div className="card-list-pokemon container">{pokemonsRendered}</div>
    </div>
  );
};

const useFilterAndRenderUsers = () => {
  const location = useLocation();

  const { allPokemons } = useContext(GalleryContext);
  console.log(allPokemons);

  const pokemonsFilterByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  console.log(pokemonsFilterByName);

  const pokemonsRendered = pokemonsFilterByName.map((pokemon) => (
    <CardPokemon pokemon={pokemon} key={pokemon.id} />
  ));

  return pokemonsRendered;
};

export default SearchPage;
