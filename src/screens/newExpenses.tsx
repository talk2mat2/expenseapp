// screens/NewExpenses.js
import React, {useState, useContext} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {storeExpenseOnBlockchain} from '../helpers/web3.';
import {ExpenseContext} from '../context/expenseContext';
import {colors} from '../helpers/colors';
interface INewExpenses {
  navigation: NavigationProp<any>;
}

const NewExpenses = ({navigation}: INewExpenses) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const {addExpense} = useContext(ExpenseContext);

  const handleAddExpense = async () => {
    if (description && amount && category) {
      const newExpense = {
        id: Date.now().toString(),
        description,
        amount: parseFloat(amount),
        category,
      };
      await storeExpenseOnBlockchain(newExpense);
      addExpense!(newExpense);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={text => {
          if (isNaN(Number(text))) {
            return;
          }
          setAmount(text);
        }}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Button
        color={colors.color104}
        title="Add Expense"
        onPress={handleAddExpense}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default NewExpenses;
