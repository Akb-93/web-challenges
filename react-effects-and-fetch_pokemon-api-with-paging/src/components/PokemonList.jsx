import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const limit = 20;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setHasPrev(offset > 0);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  return (
    <main>
      {hasPrev && (
        <button type="button" onClick={handlePrevPage}>
          Previous Page
        </button>
      )}

      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}