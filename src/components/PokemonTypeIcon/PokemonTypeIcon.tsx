import React from 'react';
import { PokemonTypes } from '../../types/PokemonTypes';
import typeClasses from './stylesClasses';

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
