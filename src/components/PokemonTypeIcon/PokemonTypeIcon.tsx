import React from 'react';
import { PokemonTypes } from '../types/PokemonTypes';

const typeClasses: Record<PokemonTypes, string> = {
  fire: 'bg-red-400 from-red-100 border-red-500',
  electric: 'bg-yellow-400 from-yellow-100 border-yellow-500',
  grass: 'bg-green-400 from-green-100 border-green-500',
  poison: 'bg-purple-400 from-purple-100 border-purple-500',
  water: 'bg-blue-400 from-blue-100 border-blue-500',
  ground: 'bg-orange-600 from-orange-400 border-orange-600',
  rock: 'bg-zinc-500 from-zinc-200 border-zinc-600',
  psychic: 'bg-pink-400 from-pink-100 border-pink-500',
  ice: 'bg-blue-200 from-blue-50 border-blue-300',
  dragon: 'bg-indigo-400 from-indigo-100 border-indigo-500',
  dark: 'bg-stone-800 from-stone-500 border-stone-900 text-stone-50',
  fairy: 'bg-rose-400 from-rose-100 border-rose-500',
  normal: 'bg-neutral-400 from-neutral-100 border-neutral-500',
  bug: 'bg-lime-400 from-lime-100 border-lime-500',
  ghost: 'bg-fuchsia-200 from-fuchsia-50 border-fuchsia-300',
  steel: 'bg-cyan-400 from-cyan-100 border-cyan-500',
  fighting: 'bg-fuchsia-400 from-fuchsia-100 border-fuchsia-500',
  flying: 'bg-sky-400 from-sky-100 border-sky-500',
};

type Props = {
  type: PokemonTypes;
};

function PokemonTypeIcon({ type }: Props) {
  const colorClasses = typeClasses[type];

  return (
    <span
      className={`capitalize text-sm px-1 lg:-m-1 rounded-md tracking-tight border-2 bg-gradient-to-b ${colorClasses}`}
    >
      {type}
    </span>
  );
}

export default React.memo(PokemonTypeIcon);
