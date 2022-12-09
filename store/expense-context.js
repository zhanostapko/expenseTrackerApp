import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 29.99,
    date: new Date('2022-11-19'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2022-06-15'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 19.99,
    date: new Date('2021-11-10'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 9.99,
    date: new Date('2021-07-13'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  return (
    <ExpensesContextProvider.Provider>
      {children}
    </ExpensesContextProvider.Provider>
  );
};

export default ExpensesContextProvider;
