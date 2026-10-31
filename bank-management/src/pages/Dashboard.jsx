import { ArrowDownToLine, ArrowUpFromLine, ArrowRight, ShieldCheck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import BalanceCard from '../components/BalanceCard';
import StatCard from '../components/StatCard';
import TransactionList from '../components/TransactionList';
import { useBank } from '../context/BankContext';

export default function Dashboard() {
  const { balance, transactions, totalDeposited, totalWithdrawn, resetData } = useBank();
  return (
    <div className="page">
      <div className="welcome-row"><div><div className="eyebrow">OVERVIEW</div><h1>Good evening, Ahsan <span>✦</span></h1><p>Here’s what’s happening with your account today.</p></div><div className="secure-tag"><ShieldCheck size={16} /> Your account is protected</div></div>
      <div className="dashboard-grid">
        <div className="dashboard-main">
          <BalanceCard balance={balance} accountNumber="0048 2190 7631" />
          <div className="stats-grid">
            <StatCard title="Total deposited" value={totalDeposited} icon={ArrowDownToLine} tone="green" subtitle="All-time deposits" />
            <StatCard title="Total withdrawn" value={totalWithdrawn} icon={ArrowUpFromLine} tone="orange" subtitle="All-time withdrawals" />
          </div>
          <TransactionList transactions={transactions} limit={4} />
        </div>
        <aside className="dashboard-side">
          <section className="panel account-panel"><div className="panel-heading"><div><h2>Account details</h2><p>Your personal information</p></div></div><div className="account-person"><span className="avatar large">AH</span><div><strong>Ahsan Habib</strong><span>Personal account</span></div></div><div className="detail-line"><span>Account number</span><strong>0048 2190 7631</strong></div><div className="detail-line"><span>Account type</span><strong>Standard Savings</strong></div><div className="detail-line"><span>Account status</span><strong className="active-text">● Active</strong></div><div className="detail-line"><span>Branch</span><strong>Dhaka Main</strong></div></section>
          <section className="quick-actions"><h2>Quick actions</h2><Link to="/deposit" className="quick-action"><span className="quick-icon green"><ArrowDownToLine size={18} /></span><span><strong>Deposit money</strong><small>Add money to account</small></span><ArrowRight size={17} /></Link><Link to="/withdraw" className="quick-action"><span className="quick-icon orange"><ArrowUpFromLine size={18} /></span><span><strong>Withdraw money</strong><small>Take money out</small></span><ArrowRight size={17} /></Link></section>
          <button className="reset-btn" onClick={() => { if (window.confirm('Reset the demo account and transaction history?')) resetData(); }}><RotateCcw size={15} /> Reset demo data</button>
        </aside>
      </div>
    </div>
  );
}
