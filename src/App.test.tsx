import React from 'react';
import { createMemoryHistory } from 'history'
import { Router, MemoryRouter  } from 'react-router';
import { Link } from 'react-router-dom'
import { shallow, mount,  } from 'enzyme';
import { render, fireEvent , } from '@testing-library/react'
import {NoMatch} from './pages/404';
import Login from './pages/login/LoginForm';
import App from './App';
import { Layer, Stage } from 'react-konva'
import { expect } from 'chai'
import Konva from 'konva'




describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});

test('have 2 links', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Link)).toHaveLength(2)
})

test('invalid path should redirect to 404', () => {
  const history = createMemoryHistory()
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/404asdasd' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(NoMatch)).toHaveLength(1);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(1);
  expect(wrapper.find(NoMatch)).toHaveLength(0);
});