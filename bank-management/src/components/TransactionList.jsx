import { History } from 'lucide-react';
import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions, limit }) {
  const items = limit ? transactions.slice(0, limit) : transactions;
  return (
    <section className="panel transaction-panel">
      <div className="panel-heading"><div><h2>Recent transactions</h2><p>Your latest account activity</p></div><span className="panel-heading-icon"><History size={19} /></span></div>
      {items.length ? <div className="transaction-list">{items.map((item) => <TransactionItem key={item.id} transaction={item} />)}</div> :
        <div className="empty-state"><History size={28} /><strong>No transactions yet</strong><span>Your deposits and withdrawals will appear here.</span></div>}
    </section>
  );
}
