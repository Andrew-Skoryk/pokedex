import React from 'react';
import usePokemons from '../../hooks/usePokemons';

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
        <div
          key={pokemon.id}
          className="flex flex-col items-center justify-center p-5 border border-stone-700"
        >
          <img
            src={pokemon.sprites.front_default!}
            alt={pokemon.name}
            className="object-fill w-5/6 h-auto mb-3 border border-stone-700"
          />
          <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-1 text-center">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-2 py-1 bg-blue-400 rounded-md"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
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
