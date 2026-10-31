import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export default function TransactionItem({ transaction }) {
  const isDeposit = transaction.type === 'deposit';
  const date = new Date(transaction.date);
  return (
    <div className="transaction-row">
      <div className={`transaction-icon ${isDeposit ? 'deposit-tone' : 'withdraw-tone'}`}>
        {isDeposit ? <ArrowDownLeft size={19} /> : <ArrowUpRight size={19} />}
      </div>
      <div className="transaction-description"><strong>{isDeposit ? 'Money deposited' : 'Money withdrawn'}</strong><span>{date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} · {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span></div>
      <strong className={`transaction-amount ${isDeposit ? 'positive' : 'negative'}`}>{isDeposit ? '+' : '−'} ৳ {new Intl.NumberFormat('en-BD', { minimumFractionDigits: 2 }).format(transaction.amount)}</strong>
    </div>
  );
}
