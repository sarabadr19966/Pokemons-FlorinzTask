import React, { useEffect } from 'react';
import './PokemonDetails.css';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails, clearSelectedPokemonData } from '../../state/actionCreators/pokemon-action';

function PokemonDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPokemonDetails = useSelector((state) => state.selectedPokemonDetails);
  const selectedPokemonName = useSelector((state) => state.selectedPokemonName);

  useEffect(() => {
    //get the name of the clicked pokemon
    if (selectedPokemonName) {
      //dispatch action to get the details of the selected pokemon
      dispatch(getPokemonDetails(selectedPokemonName));
    }
  }, [selectedPokemonName]);

  useEffect(() => () => {
    //clear the details data of selected component
    dispatch(clearSelectedPokemonData());
  }, []);

  const close = (e) => {
    //clos the details page and go back to home page
    e.preventDefault();
    navigate('/pokemon');
  };

  return (
    //show pokemon details if is fetched  if not show the loading...
    <div data-test="PokemonDetails">
      {selectedPokemonDetails ? (
        <div className="PokemonDetails">
          <a href="#" className="close" onClick={close} data-test="close" />
          <div className="PokemonLogo">
            <img alt={selectedPokemonName}
              src={
            `https://img.pokemondb.net/sprites/black-white/anim/normal/${
              selectedPokemonName
            }.gif`
          }
            />
            <p>{selectedPokemonName}</p>
          </div>

          <div className="PokemonCharacteristics">
            <p>
              ID:
              {selectedPokemonDetails.id}
            </p>
            <p>
              Type:
              {selectedPokemonDetails.types[selectedPokemonDetails.types.length - 1]}
            </p>
            <p>
              Height:
              {selectedPokemonDetails.height}
            </p>
            <div>
              <p>Abilities</p>
              <ul>
                {selectedPokemonDetails.abilityNames.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="Loader">
          <Loader color="gray" type="ThreeDots" />
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
