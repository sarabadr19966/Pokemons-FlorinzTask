import axios from '../axios';
import { extractPokemonData } from '../utils';

const getPokemonList = () => (
  axios
    .get('/pokemon/?offset=0&limit=151')
    .then((res) => (res.data.results))

    .catch((err) => {
      console.log(err);
    })
);

const getPokemonDetails = (pokemonName) => (
  axios
    .get(`/pokemon/${pokemonName}`)
    .then((res) => extractPokemonData(res.data))
    .catch((err) => console.log(err))
);

const pokemonServices = {
  getPokemonList,
  getPokemonDetails,
};

export default pokemonServices;
