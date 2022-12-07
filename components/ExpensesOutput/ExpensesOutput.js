import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
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
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
