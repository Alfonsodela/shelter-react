import { useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);


//   Fetch with 500 pokemons
  const getAllPokemons = async (limit = 50) => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    const res = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    
    const promises = data.results.map( async pokemon => {
        const res = await fetch(pokemon.url)
        const data = await res.json();
        return data;
        
    })
    const fetchPromises = await Promise.all(promises)
    console.log(fetchPromises)
    setAllPokemons([...fetchPromises])
    setLoading(false)
    
  };

//   Fetch with id pokemon
const getPokemonById = async (id) => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const res = await fetch(`${baseUrl}pokemon/${id}`);
    const data = await res.json();
    console.log(data)
}

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{allPokemons, getPokemonById}}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
