import React from 'react';
import { StylesConfig } from 'react-select';

type OptionType = {
  value: string;
  label: React.ReactNode;
};

const customStyles: StylesConfig<OptionType, false> = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#292524' : provided.color,
    paddingTop: '4px',
    paddingBottom: '4px',
  }),
};

export default customStyles;
