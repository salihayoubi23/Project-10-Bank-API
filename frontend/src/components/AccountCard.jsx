import React from 'react';

// Composant fonctionnel AccountCard avec des props (title, amount, description)
function AccountCard({ title, amount, description }) {
  return (
    // Section représentant le compte
    <section className="account">
      {/* Première partie du contenu du compte */}
      <div className="account-content-wrapper">
        {/* Titre du compte */}
        <h3 className="account-title">{title}</h3>
        {/* Montant du compte */}
        <p className="account-amount">{amount}</p>
        {/* Description du montant (peut-être une devise) */}
        <p className="account-amount-description">{description}</p>
      </div>
      {/* Deuxième partie du contenu du compte, avec une classe "cta" (call-to-action) */}
      <div className="account-content-wrapper cta">
        {/* Bouton pour afficher les transactions du compte */}
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

// Exportation du composant AccountCard pour une utilisation ailleurs dans l'application
export default AccountCard;
