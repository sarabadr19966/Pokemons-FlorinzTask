import React from 'react';
import './Pokemon.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import { setPokemonName } from '../../../../state/actionCreators/pokemon-action';

function Pokemon({ name }) {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const navigate = useNavigate();
  //on pokemon click handler
  const getPokemonName = (name) => {
    //dispatch an action to set the name of pokemon clicked
    dispatch(setPokemonName(name));
    //navigate to details of pokemon clickd
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="Pokemon" onClick={() => getPokemonName(name)} data-test="Pokemon">
      <div className="PokemonImg">
        <img
          src={
            `https://img.pokemondb.net/sprites/black-white/anim/normal/${
              name
            }.gif`
          }
        />
      </div>
      {/* highlight the search term in the pokemoon name */}
      <Highlighter
        highlightClassName="markColor"
        searchWords={[searchTerm]}
        autoEscape
        textToHighlight={name}
      />
    </div>
  );
}

export default Pokemon;
