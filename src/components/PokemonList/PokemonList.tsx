import React, { useMemo } from 'react';
import { Pokemon } from 'pokenode-ts';
import { InfiniteData } from 'react-query/';
import PokemonCard from '../PokemonCard';

type Props = {
  pokemonData: InfiniteData<Pokemon[]>;
  onSelectPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  filterType: string | null;
};

function PokemonList({ pokemonData, onSelectPokemon, filterType }: Props) {
  const pokemons = pokemonData.pages.flatMap((page) => page);

  const filteredPokemons = useMemo(() => {
    if (!filterType) return pokemons;

    return pokemons.filter((pokemon) =>
      pokemon.types.some((type) => type.type.name === filterType)
    );
  }, [pokemons, filterType]);

  if (filteredPokemons.length === 0) {
    return (
      <h2 className="flex flex-col p-4 text-2xl font-semibold text-rose-700 gap-y-3">
        No Pokemons Found
        <hr />
        <small>
          Please Load More or ty to change filter
          <br />
          Number of loaded Pokemons: {pokemons.length}
        </small>
      </h2>
    );
  }

  return (
    <>
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onSelectPokemon(pokemon)}
        />
      ))}
    </>
  );
}

export default PokemonList;
