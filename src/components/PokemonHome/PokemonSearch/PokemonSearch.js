import React from 'react';
import './PokemonSearch.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, clearSearchTerm } from '../../../state/actionCreators/pokemon-action';

function PokemonSearch() {
  const dispatch = useDispatch();
  //get the search term
  const searchTerm = useSelector((state) => state.searchTerm);
  //get filtered pokemon by search
  const filteredPokemonList = useSelector((state) => state.filteredPokemonList);

  const handleSearchOnChange = (e) => {
    //dispatch action to set search term on changing 
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClearButtonOnClick = (e) => {
    //dispatch action to clear search term 
    e.preventDefault();
    dispatch(clearSearchTerm());
  };

  return (
    <div className="SearchInput" data-test="PokemonSearch">
      <input value={searchTerm} type="text" placeholder="search..." onChange={handleSearchOnChange} />
      <div style={{ visibility: searchTerm ? 'visible' : 'hidden' }} className="searchResults">
        <p>{`${filteredPokemonList.length} ${filteredPokemonList.length === 1 ? 'result' : 'results'}`}</p>
        <a href="#" className="clear" onClick={handleClearButtonOnClick}>Clear</a>
      </div>
    </div>
  );
}

export default PokemonSearch;
