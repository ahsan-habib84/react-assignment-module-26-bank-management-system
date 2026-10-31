import { Eye, EyeOff, Wallet } from 'lucide-react';
import { useState } from 'react';

const money = (value) => new Intl.NumberFormat('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

export default function BalanceCard({ balance, accountNumber }) {
  const [visible, setVisible] = useState(true);
  return (
    <section className="balance-card">
      <div className="balance-card-top">
        <div className="balance-label"><span className="balance-icon"><Wallet size={18} /></span> Available balance</div>
        <button className="visibility-btn" onClick={() => setVisible((v) => !v)} aria-label={visible ? 'Hide balance' : 'Show balance'}>
          {visible ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
      <div className="balance-amount">{visible ? `৳ ${money(balance)}` : '৳ ••••••••'}</div>
      <div className="balance-card-bottom"><span>Account number</span><strong>{accountNumber}</strong><span className="card-status"><i /> Active account</span></div>
      <div className="card-decoration card-decoration-one" /><div className="card-decoration card-decoration-two" />
    </section>
  );
}
