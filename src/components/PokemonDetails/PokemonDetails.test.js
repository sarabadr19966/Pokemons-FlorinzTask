import React from 'react';
import { mount } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import { findByTestAttr, storeFactory } from '../../../testUtils';

const setup = (props = {}) => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <BrowserRouter>
        <PokemonDetails {...props} />
      </BrowserRouter>
    </Provider>,
  );
};

describe('components >> PokemonDetails', () => {
  test('should render PokemonDetails without error', () => {
    const wrapper = setup();
    const pokemonDetails = findByTestAttr(wrapper, 'PokemonDetails');
    expect(pokemonDetails.length).toBe(1);
    wrapper.unmount();
  });
});
