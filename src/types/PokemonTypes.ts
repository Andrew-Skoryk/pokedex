const pokemonTypesArray = [
  'fire',
  'electric',
  'grass',
  'poison',
  'water',
  'ground',
  'rock',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'normal',
  'bug',
  'ghost',
  'steel',
  'fighting',
  'flying',
] as const;

export type PokemonTypes = (typeof pokemonTypesArray)[number];
export default pokemonTypesArray;
