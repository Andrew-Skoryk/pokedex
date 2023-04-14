import React from 'react';
import { Pokemon } from 'pokenode-ts';
import PokemonTypeIcon from '../PokemonTypeIcon';
import { PokemonTypeString } from '../types/PokemonTypes';

type Props = {
  pokemon: Pokemon;
  onClick: () => void;
};

function PokemonCard({ pokemon, onClick }: Props) {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center p-2 border border-stone-700"
      onClick={onClick}
    >
      <img
        src={pokemon.sprites.front_default!}
        alt={pokemon.name}
        className="w-full h-auto mb-2 border border-stone-700"
      />

      <h3 className="mb-1.5 text-sm font-semibold capitalize">
        {pokemon.name}
      </h3>

      <div className="grid w-full grid-cols-2 grid-rows-2 gap-3 text-center">
        {pokemon.types.map(({ type }) => (
          <PokemonTypeIcon
            key={type.name}
            type={type.name as PokemonTypeString}
          />
        ))}
      </div>
    </button>
  );
}

export default PokemonCard;
