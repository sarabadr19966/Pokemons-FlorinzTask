import React from 'react';
import { mount } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import PokemonHome from './PokemonHome';
import { findByTestAttr, storeFactory } from '../../../testUtils';

const setup = (props = {}) => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <PokemonHome {...props} />
    </Provider>,
  );
};

describe('components >> PokemonHome', () => {
  test('should render PokemonHome without error', () => {
    const wrapper = setup();
    const pokemonHome = findByTestAttr(wrapper, 'PokemonHome');
    expect(pokemonHome.length).toBe(1);
    wrapper.unmount();
  });
});
