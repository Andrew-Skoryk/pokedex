import React from 'react';
import { Pokemon } from 'pokenode-ts';
import PokemonTypeIcon from '../PokemonTypeIcon';
import { PokemonTypes } from '../types/PokemonTypes';

type Props = {
  pokemon: Pokemon;
  onClick: () => void;
};

function PokemonCard({ pokemon, onClick }: Props) {
  return (
    <button
      type="button"
      className="flex flex-col items-center w-full p-1 border md:p-2 border-stone-700"
      onClick={onClick}
    >
      <img
        src={pokemon.sprites.front_default!}
        alt={pokemon.name}
        className="w-full mb-2 border border-stone-700 aspect-square"
      />

      <h3 className="mb-1.5 text-sm font-semibold capitalize">
        {pokemon.name}
      </h3>

      <div className="grid w-full grid-rows-4 gap-1 text-center lg:gap-3 md:grid-cols-2 md:grid-rows-2 md:gap-2">
        {pokemon.types.map(({ type }) => (
          <PokemonTypeIcon key={type.name} type={type.name as PokemonTypes} />
        ))}
      </div>
    </button>
  );
}

export default PokemonCard;
