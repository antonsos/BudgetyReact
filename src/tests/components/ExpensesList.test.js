import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('render ExpensesList with expenses', () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot()
})

test('render ExpensesList with no expenses', () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);

  expect(wrapper).toMatchSnapshot()
})