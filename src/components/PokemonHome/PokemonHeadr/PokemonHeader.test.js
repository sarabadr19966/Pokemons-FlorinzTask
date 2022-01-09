import React from 'react';
import { shallow } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import PokemonHeader from './PokemonHeader';

const setup = (props = {}) => shallow(<PokemonHeader {...props} />);

describe('components >> PokemonHome >> PokemonHeader', () => {
  test('should render PokemonHeader without error', () => {
    const wrapper = setup();
    expect(wrapper.find('[data-test="PokemonHeader"]').length).toBe(1);
    wrapper.unmount();
  });
});
