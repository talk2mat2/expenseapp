import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IEspenses, IExpensesContext} from '../types/expenses';

export const ExpenseContext = createContext<IExpensesContext>({});

interface IExpenseProviderProps {
  children: ReactNode;
}

export const ExpenseProvider = ({children}: IExpenseProviderProps) => {
  const [expenses, setExpenses] = useState<IEspenses[]>([]);

 

  const addExpense = async (expense: IEspenses) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    try {
      await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    } catch (error) {
      console.error('Failed to save expense', error);
    }
  };

  return (
    <ExpenseContext.Provider value={{expenses, addExpense, setExpenses}}>
      {children}
    </ExpenseContext.Provider>
  );
};
