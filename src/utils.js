export const extractPokemonData = (pokemonData) => {
  const { height, id } = pokemonData;
  const abilityNames = pokemonData.abilities.map((ability) => ability.ability.name);
  const types = pokemonData.types.map((type) => type.type.name);

  return {
    abilityNames,
    height,
    id,
    types,
  };
};
