import React from 'react';
import Select, { StylesConfig } from 'react-select';
import pokemonTypesArray from '../types/PokemonTypes';
import PokemonTypeIcon from '../PokemonTypeIcon';

type OptionType = {
  value: string;
  label: React.ReactNode;
};

const customStyles: StylesConfig<OptionType, false> = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#292524' : provided.color,
  }),
};

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

type Props = {
  filterType: string | null;
  setFilterType: React.Dispatch<React.SetStateAction<string | null>>;
};

function SelectType({ filterType, setFilterType }: Props) {
  return (
    <Select
      value={options.find((option) => option.value === filterType) || null}
      onChange={(option) => setFilterType(option ? option.value : null)}
      options={options}
      isSearchable
      className="w-2/5 mb-2 cursor-pointer"
      styles={customStyles}
    />
  );
}

export default React.memo(SelectType);
