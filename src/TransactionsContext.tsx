import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction{
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

// interface TransactionInput{
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransaction(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction);
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}