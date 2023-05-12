import React from 'react';
import Select from 'react-select';
import options from './options';
import customStyles from './customStyles';

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
      className="w-4/5 mb-2 cursor-pointer md:w-2/5"
      styles={customStyles}
    />
  );
}

export default React.memo(SelectType);
