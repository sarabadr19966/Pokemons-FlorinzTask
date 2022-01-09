import React from 'react';
import { mount } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import PokemonList from './PokemonList';
import { findByTestAttr, storeFactory } from '../../../../testUtils';

const setup = (props = {}) => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <PokemonList {...props} />
    </Provider>,
  );
};

describe('components >> PokemonHome >> PokemonList', () => {
  test('should render PokemonList without error', () => {
    const wrapper = setup();
    const pokemonList = findByTestAttr(wrapper, 'PokemonList');
    expect(pokemonList.length).toBe(1);
    wrapper.unmount();
  });
});
