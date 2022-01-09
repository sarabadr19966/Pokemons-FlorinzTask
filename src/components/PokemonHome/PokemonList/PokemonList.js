import React from 'react';
import './PokemonList.css';
import { useSelector } from 'react-redux';
import Pokemon from './Pokemon/Pokemon';

function PokemonList() {
  //get the pokemon by searching
  const filteredPokemonList = useSelector((state) => state.filteredPokemonList);

  return (
    <div className="PokemonList" data-test="PokemonList">
      {filteredPokemonList
        .map((pok) => <Pokemon key={pok.name} name={pok.name} />)}
    </div>
  );
}

export default PokemonList;
