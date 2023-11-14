import { useContext } from "react";
import { GalleryContext } from "../context/galleryContext";
import CardPokemon from "./CardPokemon";
import Loader from "./Loader";

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(GalleryContext);
  return (
    <>
    {loading ? (
				<Loader />
			) : (
      <div className="card-list-pokemon container">
      {filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
        {allPokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      )}
    </>
  );

};

export default PokemonList;
