import React from 'react';
import { mount } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Pokemon from './Pokemon';
import { findByTestAttr, storeFactory } from '../../../../../testUtils';

const setup = (props = {}) => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <BrowserRouter>
        <Pokemon {...props} />
      </BrowserRouter>
    </Provider>,
  );
};

describe('components >> PokemonHome >> PokemonList >> Pokemon', () => {
  test('should render Pokemon without error', () => {
    const wrapper = setup();
    const pokemon = findByTestAttr(wrapper, 'Pokemon');
    expect(pokemon.length).toBe(1);
    wrapper.unmount();
  });
});
