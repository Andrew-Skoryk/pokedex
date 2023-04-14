import React from 'react';
import { Pokemon } from 'pokenode-ts';
import PokemonTypeIcon from '../PokemonTypeIcon';
import { PokemonTypeString } from '../types/PokemonTypes';

type Props = {
  pokemon: Pokemon;
};

function PokemonCard({ pokemon }: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-5 border border-stone-700">
      <img
        src={pokemon.sprites.front_default!}
        alt={pokemon.name}
        className="object-fill w-5/6 h-auto mb-3 border border-stone-700"
      />
      <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-1 text-center">
        {pokemon.types.map(({ type }) => (
          <PokemonTypeIcon
            key={type.name}
            type={type.name as PokemonTypeString}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
