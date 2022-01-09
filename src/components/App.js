import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PokemonHome from './PokemonHome/PokemonHome';
import './App.css';
import PokemonDetails from './PokemonDetails/PokemonDetails';

function App() {
  return (
    <div className="App" data-test="AppComponent">
      {/*routing between pokemonhome and pokemondetails */}
      <Routes>
        <Route path="/pokemon" element={<PokemonHome />} />
        <Route path="/pokemon/*" element={<PokemonDetails />} />
        {/*prevent undefined urls*/}
        <Route path="/*" element={<Navigate to="/pokemon"/>} />
      </Routes>
    </div>
  );
}

export default App;
