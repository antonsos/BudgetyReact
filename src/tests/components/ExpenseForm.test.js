import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot()
})

test('render ExpenseForm first expense', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

  expect(wrapper).toMatchSnapshot()
})

test('render error ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('description on input', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  
  expect(wrapper.state('description')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('note value on textarea', () => {
  const value = 'New note value'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  
  expect(wrapper.state('note')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  
  expect(wrapper.state('amount')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('if in valid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  
  expect(wrapper.state('amount')).toBe('')
  expect(wrapper).toMatchSnapshot()
})

test('onSubmit form', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  })
})

// test('new date change', () => {
//   const now = moment();
//   const wrapper = shallow(<ExpenseForm />);

//   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//   expect(wrapper.state('createdAt')).toEqual(now);
// })

// test('should set calendar focus on change', () => {
//   const focused = true;
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//   expect(wrapper.state('calendarFocused')).toBe(focused);
// });