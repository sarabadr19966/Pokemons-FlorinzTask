import React from 'react';
import './PokemonHeader.css';
import logo from '../../../images/logo.png';

function PokemonHeader() {
  return (
    <div className="PokemonHeader" data-test="PokemonHeader">
      <img src={logo} className="Logo" />
      <h3>Generation 1</h3>
      <span>151 Pokemons</span>
    </div>
  );
}

export default PokemonHeader;
