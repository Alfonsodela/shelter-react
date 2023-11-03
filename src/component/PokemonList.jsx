import { useContext } from "react";
import { GalleryContext } from "../context/galleryContext";
import CardPokemon from "./CardPokemon";



const PokemonList = () => {
  const { allPokemons } = useContext(GalleryContext);
  return (
    <>
      <div className='card-list-pokemon container'>
        {allPokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon}  />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
