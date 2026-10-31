import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AmountForm from '../components/AmountForm';
import { useBank } from '../context/BankContext';

export default function Deposit() {
  const { deposit, balance } = useBank();
  return <div className="page narrow-page">
    <div className="breadcrumb">
      <Link to="/">Dashboard</Link>
      <ChevronRight size={14} /><span>Deposit</span>
      </div>
      <div className="page-heading">
        <div className="eyebrow">ACCOUNT SERVICES</div>
        <h1>Deposit money</h1>
        <p>Securely add money to your simulated bank account.</p>
        </div><AmountForm mode="deposit" balance={balance} onSubmit={(amount) => { deposit(amount); return true; }} />
    </div>;
}
