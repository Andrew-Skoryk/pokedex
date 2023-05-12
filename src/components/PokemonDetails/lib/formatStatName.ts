function formatStatName(statName: string) {
  switch (statName) {
    case 'special-attack':
      return 'SP Attack';
    case 'special-defense':
      return 'SP Defense';
    default:
      return statName;
  }
}

export default formatStatName;
