import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('test 1', () => {
    expect(wrapper).not.toBeNull;
    expect(wrapper.text()).toEqual('neha jio mere laal');
  })
})