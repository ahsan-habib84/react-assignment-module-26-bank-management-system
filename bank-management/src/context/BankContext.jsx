import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const BankContext = createContext(null);
const STORAGE_KEY = 'novabank-demo-v1';

const initialData = {
  balance: 125000,
  transactions: [
    { id: 't-1', type: 'deposit', amount: 25000, date: '2026-10-27T10:30:00.000Z' },
    { id: 't-2', type: 'withdraw', amount: 5000, date: '2026-10-25T14:15:00.000Z' },
    { id: 't-3', type: 'deposit', amount: 15000, date: '2026-10-22T08:00:00.000Z' },
  ],
};

export function BankProvider({ children }) {
  const [bankData, setBankData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialData;
    } catch {
      return initialData;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bankData));
  }, [bankData]);

  const totalDeposited = bankData.transactions
    .filter((item) => item.type === 'deposit')
    .reduce((sum, item) => sum + item.amount, 0);
  const totalWithdrawn = bankData.transactions
    .filter((item) => item.type === 'withdraw')
    .reduce((sum, item) => sum + item.amount, 0);

  function deposit(amount) {
    setBankData((current) => ({
      ...current,
      balance: current.balance + amount,
      transactions: [{ id: crypto.randomUUID(), type: 'deposit', amount, date: new Date().toISOString() }, ...current.transactions],
    }));
  }

  function withdraw(amount) {
    if (amount > bankData.balance) return false;
    setBankData((current) => ({
      ...current,
      balance: current.balance - amount,
      transactions: [{ id: crypto.randomUUID(), type: 'withdraw', amount, date: new Date().toISOString() }, ...current.transactions],
    }));
    return true;
  }

  function resetData() {
    setBankData(initialData);
  }

  const value = useMemo(() => ({
    ...bankData, totalDeposited, totalWithdrawn, deposit, withdraw, resetData,
  }), [bankData, totalDeposited, totalWithdrawn]);

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
}

export function useBank() {
  const context = useContext(BankContext);
  if (!context) throw new Error('useBank must be used inside BankProvider');
  return context;
}
