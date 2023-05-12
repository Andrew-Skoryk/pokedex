import React from 'react';
import pokemonTypesArray from '../../types/PokemonTypes';
import PokemonTypeIcon from '../PokemonTypeIcon';

const options = [
  {
    value: '',
    label: 'All Types',
  },
  ...pokemonTypesArray.map((type) => ({
    value: type,
    label: (
      <div className="px-1">
        <PokemonTypeIcon type={type} />
      </div>
    ),
  })),
];

export default options;
