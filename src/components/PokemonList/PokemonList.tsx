import React from 'react';
import { Pokemon } from 'pokenode-ts';
import usePokemons from '../../hooks/usePokemons';
import PokemonCard from '../PokemonCard';
import Loader from '../Loader/Loader';

type Props = {
  onSelectPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
};

function PokemonList({ onSelectPokemon }: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
  } = usePokemons(12);

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <Loader gridPosition="col-span-5" />;
  }

  if (isError || !data) {
    return <h2>Error occurred</h2>;
  }
  const pokemons = data.pages.flatMap((page) => page);

  return (
    <section className="grid h-full grid-cols-3 col-span-5 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onSelectPokemon(pokemon)}
        />
      ))}

      {isFetchingNextPage && <Loader gridPosition="col-span-3" />}

      <button
        type="button"
        className="col-span-3 py-2 text-lg font-semibold transition-colors duration-300 bg-blue-600 h-min text-slate-50 rounded-xl focus:outline-none hover:bg-blue-700 active:bg-blue-800"
        onClick={handleLoadMore}
        disabled={!hasNextPage}
      >
        Load More
      </button>
    </section>
  );
}

export default PokemonList;
