import pokemonActionTypes from '../actionTypes/pokemon-action-types';

const initialState = {
  pokemonList: [],
  filteredPokemonList: [],
  selectedPokemonName: null,
  selectedPokemonDetails: null,
  searchTerm: '',
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch the pokemonlist 
    case pokemonActionTypes.GET_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        pokemonList: action.pokemonList,
        filteredPokemonList: state.searchTerm ? state.filteredPokemonList : action.pokemonList,
      };
    }
    // fetch the details of selected pokemon
    case pokemonActionTypes.GET_POKEMON_DETAILS_SUCCESS: {
      return {
        ...state,
        selectedPokemonDetails: action.pokemonDetails,
      };
    }
    // set the name of the pokemon clicked
    case pokemonActionTypes.SET_SELECTED_POKEMON_NAME: {
      return {
        ...state,
        selectedPokemonName: action.pokemonName,
      };
    }
    // set the search term and filtered pokemons
    case pokemonActionTypes.SET_SEARCH_TERM: {
      let newFilteredPokemonList = null;
      if (action.searchTerm) {
        newFilteredPokemonList = state.pokemonList.filter((pokemon) => {
          if (pokemon.name.includes(action.searchTerm.toLowerCase())) {
            return pokemon;
          }
        });
      }

      return {
        ...state,
        searchTerm: action.searchTerm,
        filteredPokemonList: newFilteredPokemonList || state.pokemonList,
      };
    }
    //clear the details data of pokemon selected
    case pokemonActionTypes.CLEAR_SELECTED_POKEMON_DATA: {
      return {
        ...state,
        selectedPokemonName: null,
        selectedPokemonDetails: null,
      };
    }
    // clear the search term and set filteredPokemons to all pokemons
    case pokemonActionTypes.CLEAR_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: '',
        filteredPokemonList: state.pokemonList,
      };
    }
    default: return state;
  }
};

export default pokemonReducer;
