import React from 'react';
import { PokemonTypeString } from '../types/PokemonTypes';

const typeColors: Record<PokemonTypeString, string> = {
  fire: 'red',
  electric: 'yellow',
  grass: 'green',
  poison: 'purple',
  water: 'blue',
  ground: 'brown',
  rock: 'gray',
  psychic: 'pink',
  ice: 'lightblue',
  dragon: 'indigo',
  dark: 'gray',
  fairy: 'rose',
  normal: 'warmgray',
  bug: 'lime',
  ghost: 'coolgray',
  steel: 'cyan',
  fighting: 'orange',
  flying: 'sky',
};

type Props = {
  type: PokemonTypeString;
};

function PokemonTypeIcon({ type }: Props) {
  const color = typeColors[type];
  const colorClasses = `bg-${color}-400 from-${color}-200 border-${color}-500`;

  return (
    <span
      className={`px-2 py-1 capitalize rounded-md border-2 bg-gradient-to-b ${colorClasses}`}
    >
      {type}
    </span>
  );
}

export default React.memo(PokemonTypeIcon);
