import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AmountForm from '../components/AmountForm';
import { useBank } from '../context/BankContext';

export default function Withdraw() {
  const { withdraw, balance } = useBank();

  return <div className="page narrow-page">
    <div className="breadcrumb">
      <Link to="/">Dashboard</Link>
      <ChevronRight size={14} /><span>Withdraw</span>
      </div>
      <div className="page-heading">
        <div className="eyebrow">ACCOUNT SERVICES</div>
        <h1>Withdraw money</h1>
        <p>Withdraw funds from your available account balance.</p>
      </div>
      <AmountForm mode="withdraw" balance={balance} onSubmit={withdraw} />
    </div>;
}
