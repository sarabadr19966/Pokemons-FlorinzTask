import React from 'react';
import { mount } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import PokemonSearch from './PokemonSearch';
import { findByTestAttr, storeFactory } from '../../../../testUtils';

const setup = (props = {}) => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <PokemonSearch {...props} />
    </Provider>,
  );
};

describe('components >> PokemonHome >> PokemonSearch', () => {
  test('should render PokemonSearch without error', () => {
    const wrapper = setup();
    const pokemonSearch = findByTestAttr(wrapper, 'PokemonSearch');
    expect(pokemonSearch.length).toBe(1);
    wrapper.unmount();
  });
});
