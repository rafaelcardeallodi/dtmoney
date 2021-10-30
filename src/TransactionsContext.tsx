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
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider(props: TransactionsProviderProps){
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransaction(response.data.transactions))
  }, [])

  return(
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>
  );
}