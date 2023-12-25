import React from 'react';
import PropTypes from 'prop-types';

// Le composant ConnectionFields est une fonction React qui prend des propriétés (props) en argument.
export default function ConnectionFields({
  email,                // La valeur de l'e-mail, passée en propriété.
  onEmailChange,        // La fonction pour gérer le changement de l'e-mail.
  password,             // La valeur du mot de passe, passée en propriété.
  onPasswordChange,     // La fonction pour gérer le changement du mot de passe.
  rememberMe,           // La valeur du champ "Remember Me" (se souvenir de moi), passée en propriété.
  onRememberMeChange,   // La fonction pour gérer le changement du champ "Remember Me".
}) {
  // Un tableau d'objets représentant les champs du formulaire avec leurs propriétés.
  const formFields = [
    {
      className: "input-wrapper",  // Classe CSS pour le wrapper du champ d'e-mail.
      label: "Email",              // Libellé du champ d'e-mail.
      type: "email",               // Type du champ (e-mail).
      id: "email",                 // ID unique du champ d'e-mail.
      value: email,                // Valeur du champ d'e-mail.
      onChange: onEmailChange,     // Fonction à appeler lorsqu'il y a un changement dans le champ d'e-mail.
    },
    {
      className: "input-wrapper",  // Classe CSS pour le wrapper du champ de mot de passe.
      label: "Password",           // Libellé du champ de mot de passe.
      type: "password",            // Type du champ (mot de passe).
      id: "password",              // ID unique du champ de mot de passe.
      value: password,             // Valeur du champ de mot de passe.
      onChange: onPasswordChange,  // Fonction à appeler lorsqu'il y a un changement dans le champ de mot de passe.
    },
    {
      className: "input-remember", // Classe CSS pour le wrapper du champ "Remember Me".
      label: "Remember me",        // Libellé du champ "Remember Me".
      type: "checkbox",            // Type du champ (case à cocher).
      id: "remember-me",           // ID unique du champ "Remember Me".
      value: rememberMe,           // Valeur du champ "Remember Me".
      onChange: onRememberMeChange, // Fonction à appeler lorsqu'il y a un changement dans le champ "Remember Me".
    },
  ];

  // Le rendu JSX du composant.
  return (
    <div className="input-fields">
      {/* Utilisation de la méthode map pour itérer sur chaque champ du formulaire et les afficher. */}
      {formFields.map((field) => (
        <div className={field.className} key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          {/* Utilisation d'un élément input pour afficher le champ, avec des attributs dynamiques. */}
          <input
            type={field.type}
            id={field.id}
            value={field.value}
            onChange={field.onChange}
            {...(field.type === 'checkbox' ? { checked: field.value } : {})}
          />
        </div>
      ))}
    </div>
  );
}

// Définition des types des propriétés attendues par le composant à des fins de validation.
ConnectionFields.propTypes = {
  email: PropTypes.string.isRequired,            // L'e-mail doit être une chaîne non vide et obligatoire.
  onEmailChange: PropTypes.func.isRequired,      // La fonction de changement d'e-mail doit être une fonction obligatoire.
  password: PropTypes.string.isRequired,         // Le mot de passe doit être une chaîne non vide et obligatoire.
  onPasswordChange: PropTypes.func.isRequired,   // La fonction de changement de mot de passe doit être une fonction obligatoire.
  rememberMe: PropTypes.bool.isRequired,         // La valeur "Remember Me" doit être un booléen obligatoire.
  onRememberMeChange: PropTypes.func.isRequired, // La fonction de changement de "Remember Me" doit être une fonction obligatoire.
};
