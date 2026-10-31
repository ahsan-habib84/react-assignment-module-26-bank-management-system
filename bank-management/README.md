# NovaBank — Bank Management System

A frontend-only bank management practice project built with React and Vite. It simulates a bank account; it does not connect to a real bank or transfer real money.

## Features
- Dashboard with account details, current balance, total deposits and withdrawals
- Deposit and withdraw forms with validation
- Transaction history with transaction dates and type-specific styling
- React Router navigation
- Reusable components and Context API
- Persists account data in `localStorage`
- Responsive layout

## Requirements
- Node.js 18+ (recommended)
- npm

## Installation
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── BalanceCard.jsx
│   ├── StatCard.jsx
│   ├── TransactionItem.jsx
│   ├── TransactionList.jsx
│   └── AmountForm.jsx
├── context/
│   └── BankContext.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Deposit.jsx
│   ├── Withdraw.jsx
│   └── Transactions.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Demo account
- Account holder: Ahsan Habib
- Account number: 0048 2190 7631
- Starting balance: ৳ 125,000.00

Use the Reset demo data button in the dashboard to restore the starting data.
