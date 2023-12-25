import React, { useState } from 'react';

import AccountCard from './AccountCard';

function AccountsOverview() {
  // Utilisation du state pour stocker les données des comptes
  const [accountData, setAccountData] = useState([
    {
      id: 'checking-x8349',
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance"
    },
    {
      id: 'savings-x6712',
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance"
    },
    {
      id: 'credit-card-x8349',
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance"
    }
  ]);

  return (
    <div className="accounts-overview">
      {accountData.map((account) => (
        <AccountCard
          key={account.id}  // Utilisation de l'ID comme clé
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </div>
  );
}

export default AccountsOverview;
