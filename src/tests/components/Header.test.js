import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('render Header currectly', () => {
  const wrapper = shallow(<Header/>);

  expect(wrapper).toMatchSnapshot()
  // const renderer = new ShallowRenderer();
  // renderer.render(<Header/>)
  // const result = renderer.getRenderOutput();
  // expect(result).toMatchSnapshot()
})