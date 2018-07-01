import React from 'react';
import ExpensesList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpensesFilter />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
