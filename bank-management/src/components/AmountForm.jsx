import { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, ArrowUpFromLine, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AmountForm({ mode, onSubmit, balance }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const inputRef = useRef(null);
  const isDeposit = mode === 'deposit';

  useEffect(() => { inputRef.current?.focus(); }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const value = Number(amount);
    if (!amount.trim() || !Number.isFinite(value) || value <= 0) {
      setMessage({ type: 'error', text: 'Enter an amount greater than zero.' });
      return;
    }
    if (!isDeposit && value > balance) {
      setMessage({ type: 'error', text: 'Insufficient balance. Please enter a smaller amount.' });
      return;
    }
    if (onSubmit(value)) {
      setMessage({ type: 'success', text: `৳ ${value.toLocaleString('en-BD')} ${isDeposit ? 'deposited' : 'withdrawn'} successfully.` });
      setAmount('');
    }
  }

  const Icon = isDeposit ? ArrowDownToLine : ArrowUpFromLine;
  return (
    <section className="form-card">
      <div className={`form-hero ${isDeposit ? 'deposit-hero' : 'withdraw-hero'}`}><span><Icon size={24} /></span><div><h2>{isDeposit ? 'Deposit money' : 'Withdraw money'}</h2><p>{isDeposit ? 'Add funds to your NovaBank account.' : 'Transfer funds out of your NovaBank account.'}</p></div></div>
      <form onSubmit={handleSubmit} className="amount-form">
        <label htmlFor="amount">Amount (BDT)</label>
        <div className="amount-input-wrap"><span>৳</span><input ref={inputRef} id="amount" type="number" min="0.01" step="0.01" placeholder="0.00" value={amount} onChange={(e) => { setAmount(e.target.value); setMessage(null); }} /></div>
        <small className="input-hint">{isDeposit ? 'Enter the amount you want to add.' : `Available balance: ৳ ${balance.toLocaleString('en-BD', { minimumFractionDigits: 2 })}`}</small>
        {message && <div className={`form-message ${message.type}`}>{message.type === 'success' ? <CheckCircle2 size={17} /> : <AlertCircle size={17} />}{message.text}</div>}
        <button className={`submit-btn ${isDeposit ? 'deposit-button' : 'withdraw-button'}`} type="submit"><Icon size={18} /> {isDeposit ? 'Deposit money' : 'Withdraw money'}</button>
      </form>
      <div className="security-note"><span className="security-dot" /> Secure demo transaction <span>·</span> No real money is moved</div>
    </section>
  );
}
