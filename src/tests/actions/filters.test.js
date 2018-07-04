import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('ection start date object', () => {
  const action = setStartDate(moment(0))

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('ection end date object', () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('ection sort text object', () => {

  const text = 'Anton';

  const action = setTextFilter(text)

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Anton'
  })
})

test('ection sort text object', () => {
  const action = setTextFilter()

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('ection sort by date object', () => {
  const action = sortByDate()

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('ection sort by amount object', () => {
  const action = sortByAmount()

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})