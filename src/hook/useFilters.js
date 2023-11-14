import { useState } from "react";
import { useContext } from "react";
import { GalleryContext } from "../context/galleryContext";

const useFilters = () => {
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
  const { allPokemons } = useContext(GalleryContext);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

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
      // setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    } 
    // else {
    //   const filteredResults = filteredPokemons.filter(
    //     (pokemon) =>
    //       !pokemon.types.map((type) => type.type.name).includes(e.target.name)
    //   );
    //   setFilteredPokemons([...filteredResults]);
    // }

    return {typeSelected, filteredPokemons, handleCheckbox}
  };
};

export default useFilters;
