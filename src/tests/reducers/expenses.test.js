import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([])
})

test('remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[2].id
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1]])
})

test('not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('add expense', () => {
  const expense = {
    id: '4',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, action.expense])
})

test('edit expense', () => {
  const updates = {
    id: '4',
    description: 'Link',
    note: '',
    amount: 195,
    createdAt: 0
  }

  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1], action.updates])
})

test('not edit expense if id not found', () => {
  const updates = {
    id: '3',
    description: 'Link',
    note: '',
    amount: 195,
    createdAt: 0
  }

  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses)
})