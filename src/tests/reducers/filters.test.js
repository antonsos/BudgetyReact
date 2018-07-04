import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('default filter value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('sort to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

  expect(state.sortBy).toEqual('amount')
})

test('sort to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)

  expect(state.sortBy).toEqual('date')
})

test('sort by text filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const action = { type: 'SET_TEXT_FILTER', text: 'mo' }
  const state = filtersReducer(currentState, action)

  expect(state.text).toEqual('mo')
})

test('start data filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const action = { type: 'SET_START_DATE', startDate: moment(3) }
  const state = filtersReducer(currentState, action)

  expect(state.startDate).toEqual(moment(3))
})

test('end data filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const action = { type: 'SET_END_DATE', endDate: moment(3) }
  const state = filtersReducer(currentState, action)

  expect(state.endDate).toEqual(moment(3))
})