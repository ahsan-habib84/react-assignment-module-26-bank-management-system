import { NavLink } from 'react-router-dom';
import { Landmark, LayoutDashboard, ArrowDownToLine, ArrowUpFromLine, History } from 'lucide-react';

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/deposit', label: 'Deposit', icon: ArrowDownToLine },
  { to: '/withdraw', label: 'Withdraw', icon: ArrowUpFromLine },
  { to: '/transactions', label: 'Transactions', icon: History },
];

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark"><Landmark size={22} /></span>
          <span>nova<span className="brand-light">bank</span><small>PERSONAL BANKING</small></span>
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={17} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="profile-chip"><span className="avatar">AH</span><span className="profile-name">Ahsan Habib</span></div>
      </div>
    </header>
  );
}
