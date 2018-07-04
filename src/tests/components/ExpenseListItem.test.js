import React from 'react';
import { shallow } from 'enzyme';
import ExpensesListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('render ExpensesList with expense', () => {
  const wrapper = shallow(<ExpensesListItem key={expenses[0].id} {...expenses[0]} />);

  expect(wrapper).toMatchSnapshot()
})

test('render ExpensesList with no expense', () => {
  const wrapper = shallow(<ExpensesListItem key={undefined} {...[]} />);

  expect(wrapper).toMatchSnapshot()
})