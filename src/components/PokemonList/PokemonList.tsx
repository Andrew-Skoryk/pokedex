import React from 'react';
import usePokemons from '../../hooks/usePokemons';
import PokemonCard from '../PokemonCard';

function PokemonList() {
  const { data, isLoading, isError } = usePokemons(0, 12);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error occurred</div>;
  }

  return (
    <section className="grid grid-cols-3 col-span-3 xl:gap-6">
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      <button
        type="button"
        className="col-span-3 py-5 text-2xl font-semibold bg-blue-600 text-slate-50 rounded-2xl"
      >
        Load More
      </button>
    </section>
  );
}

export default PokemonList;
