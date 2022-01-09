import React, { useState, useEffect } from 'react';
import './PokemonHome.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import PokemonHeader from './PokemonHeadr/PokemonHeader';
import PokemonList from './PokemonList/PokemonList';
import { getPokemonList } from '../../state/actionCreators/pokemon-action';

import PokemonSearch from './PokemonSearch/PokemonSearch';

function PokemonHome() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  //get the pokemonList value from store
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    //dispatch action to get the pokemon list
    dispatch(getPokemonList());
  }, []);

  useEffect(() => {
    if (pokemonList.length) {
      setLoading(false);
    }
  }, [pokemonList]);

  return (
    //show PokemonHome if pokemonList fetched and loading... if not
    <div className="PokemonHome" data-test="PokemonHome">
      {loading ? (
        <div className="Loader">
          <Loader color="gray" type="ThreeDots" />
        </div>
      ) : (
        <>
          <PokemonHeader />
          <PokemonSearch />
          <PokemonList />
        </>
      )}
    </div>
  );
}

export default PokemonHome;
