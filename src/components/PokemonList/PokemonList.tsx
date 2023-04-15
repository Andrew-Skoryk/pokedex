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
