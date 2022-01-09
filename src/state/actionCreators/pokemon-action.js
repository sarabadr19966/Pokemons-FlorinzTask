import pokemonActionTypes from '../actionTypes/pokemon-action-types';
import pokemonServices from '../../services/pokemon-service';

export function getPokemonList() {
  return (dispatch) => {
    function request() { return { type: pokemonActionTypes.GET_POKEMON_LIST_REQUEST }; }
    function success(pokemonList) { return { type: pokemonActionTypes.GET_POKEMON_LIST_SUCCESS, pokemonList }; }
    function failure() { return { type: pokemonActionTypes.GET_POKEMON_LIST_FAILURE }; }

    dispatch(request());
    return pokemonServices.getPokemonList()
      .then(
        (pokemonList) => {
          dispatch(success(pokemonList));
        },
        (error) => {
          dispatch(failure(error.toString()));
        },
      );
  };
}

export function getPokemonDetails(pokemonName) {
  return (dispatch) => {
    function request() { return { type: pokemonActionTypes.GET_POKEMON_DETAILS_REQUEST }; }
    function success(pokemonDetails) { return { type: pokemonActionTypes.GET_POKEMON_DETAILS_SUCCESS, pokemonDetails }; }
    function failure() { return { type: pokemonActionTypes.GET_POKEMON_DETAILS_FAILURE }; }

    dispatch(request());
    return pokemonServices.getPokemonDetails(pokemonName)
      .then(
        (pokemonDetails) => {
          dispatch(success(pokemonDetails));
        },
        (error) => {
          dispatch(failure(error.toString()));
        },
      );
  };
}

export function setPokemonName(pokemonName) {
  return ({ type: pokemonActionTypes.SET_SELECTED_POKEMON_NAME, pokemonName });
}

export function setSearchTerm(searchTerm) {
  return ({ type: pokemonActionTypes.SET_SEARCH_TERM, searchTerm });
}

export function clearSelectedPokemonData() {
  return ({ type: pokemonActionTypes.CLEAR_SELECTED_POKEMON_DATA });
}

export function clearSearchTerm() {
  return ({ type: pokemonActionTypes.CLEAR_SEARCH_TERM });
}
