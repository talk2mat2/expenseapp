import {mockExpenses} from '../mocks';
import {IEspenses} from '../types/expenses';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const connectWallet = async () => {
  // Simulate connecting to a Web3 wallet
  return new Promise(resolve =>
    setTimeout(() => resolve('Connected to Web3 wallet'), 1000),
  );
};

//function to simulate store to web sockets
export const storeExpenseOnBlockchain = async (expense: IEspenses) => {
  return new Promise(resolve =>
    setTimeout(
      () => resolve(`Stored expense: ${JSON.stringify(expense)}`),
      1000,
    ),
  );
};
// Function to Simulate retrieving from blockchain
export const retrieveExpensesFromBlockchain = async (): Promise<
  IEspenses[]
> => {
  let response = [];
  try {
    const storedExpenses = await AsyncStorage.getItem('expenses');
    if (storedExpenses) {
      response = JSON.parse(storedExpenses);
    }
  } catch (error) {
    console.error('Failed to load expenses', error);
  }

  return new Promise(resolve => setTimeout(() => resolve(response), 5000));
};
