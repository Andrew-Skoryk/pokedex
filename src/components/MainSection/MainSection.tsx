import React, { useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import usePokemons from '../../hooks/usePokemons';
import Loader from '../Loader/Loader';
import pokemonTypesArray from '../types/PokemonTypes';
import PokemonDetails from '../PokemonDetails';
import PokemonList from '../PokemonList';

function MainSection() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
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

  if (isLoading) return <Loader gridPosition="col-span-5" />;

  const isErrorOccurred = !data && !isLoading;

  if (isErrorOccurred || isError) {
    return (
      <h2 className="col-span-5 p-8 m-auto text-4xl font-semibold text-rose-700">
        Error occurred
        <hr />
        <small>Please try again</small>
      </h2>
    );
  }

  return (
    <>
      <div className="flex flex-col grid-cols-3 lg:col-span-5">
        <select
          value={filterType || ''}
          onChange={(e) => setFilterType(e.target.value || null)}
          className="mb-2 outline-none"
        >
          <option value="">All Types</option>
          {pokemonTypesArray.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <section className="grid gap-2 lg:gap-4">
          <PokemonList
            pokemonData={data!}
            onSelectPokemon={setSelectedPokemon}
            filterType={filterType}
          />

          {isFetchingNextPage && <Loader gridPosition="col-span-3 pb-48" />}

          <button
            type="button"
            className="col-span-3 py-2 text-lg font-semibold transition-colors duration-300 bg-blue-600 h-min text-slate-50 rounded-xl focus:outline-none hover:bg-blue-700 active:bg-blue-800"
            onClick={handleLoadMore}
            disabled={!hasNextPage}
          >
            Load More
          </button>
        </section>
      </div>

      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
    </>
  );
}

export default MainSection;
