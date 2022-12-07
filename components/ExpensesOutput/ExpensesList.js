import { FlatList, StyleSheet, Text } from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  const renderItemHandler = (itemData) => {
    return <ExpenseItem {...itemData.item} />;
  };
  return (
    <FlatList
      data={expenses}
      renderItem={renderItemHandler}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
