import { Link } from 'react-router-dom';
import { ChevronRight, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';
import TransactionList from '../components/TransactionList';
import { useBank } from '../context/BankContext';

export default function Transactions() {
  const { transactions, totalDeposited, totalWithdrawn } = useBank();

  return <div className="page">
    <div className="breadcrumb">
      <Link to="/">Dashboard</Link>
      <ChevronRight size={14} /><span>Transactions</span>
      </div><div className="page-heading">
        <div className="eyebrow">ACCOUNT ACTIVITY</div>
        <h1>Transaction history</h1>
        <p>Review all deposits and withdrawals made on this demo account.</p>
        </div>
        <div className="history-summary">
          <div><span className="mini-summary-icon green"><ArrowDownToLine size={17} /></span><span>Total deposits<strong>৳ {totalDeposited.toLocaleString('en-BD', { minimumFractionDigits: 2 })}</strong></span>
          </div>
          <div>
            <span className="mini-summary-icon orange"><ArrowUpFromLine size={17} /></span><span>Total withdrawals<strong>৳ {totalWithdrawn.toLocaleString('en-BD', { minimumFractionDigits: 2 })}</strong></span>
            </div>
            </div>
            <TransactionList transactions={transactions} />
      </div>;
}
