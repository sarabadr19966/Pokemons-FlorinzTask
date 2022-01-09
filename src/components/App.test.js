import React from 'react';
import { mount } from 'enzyme';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { findByTestAttr, storeFactory } from '../../testUtils';

const setup = (props = {}) => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>

      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    </Provider>,
  );
};

describe('App', () => {
  test('should render App without error', () => {
    const wrapper = setup();
    const conponent = findByTestAttr(wrapper, 'AppComponent');
    expect(conponent.length).toBe(1);
    wrapper.unmount();
  });
});
