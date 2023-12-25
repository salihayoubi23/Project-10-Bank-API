import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../reducer/userSlice';

export default function UserHeader() {
  // États locaux pour gérer l'édition du nom et du prénom
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');

  // États locaux pour gérer les erreurs de validation
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  // Utilisation du Redux pour accéder à l'état global de l'utilisateur et au dispatch des actions
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // Gestionnaire de clic sur le bouton "Edit"
  const handleEditClick = () => {
    setIsEditing(true);
    // Pré-remplissage des champs avec les données actuelles
    setEditedFirstName(user.body.firstName);
    setEditedLastName(user.body.lastName);
  };

  // Gestionnaire de clic sur le bouton "Save"
  const handleSave = () => {
    // Vérification de la validité des données
    if (isDataValid()) {
      // Dispatch de l'action pour mettre à jour le profil de l'utilisateur
      dispatch(
        updateUserProfile({
          firstName: editedFirstName,
          lastName: editedLastName,
        })
      );
      // Désactivation du mode édition
      setIsEditing(false);
    }
  };

  // Gestionnaire de clic sur le bouton "Cancel"
  const handleCancel = () => {
    // Annulation de l'édition en restaurant les données actuelles
    setIsEditing(false);
    setEditedFirstName(user.body.firstName);
    setEditedLastName(user.body.lastName);
  };

  // Fonction pour vérifier la validité des données
  const isDataValid = () => {
    // Expression régulière pour vérifier si le prénom contient uniquement des lettres
    const firstNameRegex = /^[A-Za-z]+$/;
    // Expression régulière pour vérifier si le nom contient uniquement des lettres
    const lastNameRegex = /^[A-Za-z]+$/;

    // Vérification du prénom
    if (!firstNameRegex.test(editedFirstName)) {
      setFirstNameError('First Name must contain only letters');
      return false;
    } else {
      setFirstNameError('');
    }

    // Vérification du nom
    if (!lastNameRegex.test(editedLastName)) {
      setLastNameError('Last Name must contain only letters');
      return false;
    } else {
      setLastNameError('');
    }

    // Si toutes les vérifications passent, les données sont valides
    return true;
  };

  return (
    <header className="header">
      <h1>
        Welcome back<br />
        {!isEditing && `${user.body.firstName} ${user.body.lastName}`}
      </h1>
      {isEditing ? (
        <div>
          {/* Champ de saisie pour le prénom */}
          <input
            type="text"
            value={editedFirstName}
            onChange={(e) => {
              setEditedFirstName(e.target.value);
              setFirstNameError('');
            }}
            placeholder="First Name"
          />
          {/* Affichage de l'erreur du prénom, le cas échéant */}
          {firstNameError && <span style={{ color: 'red' }}>{firstNameError}</span>}

          {/* Champ de saisie pour le nom */}
          <input
            type="text"
            value={editedLastName}
            onChange={(e) => {
              setEditedLastName(e.target.value);
              setLastNameError('');
            }}
            placeholder="Last Name"
          />
          {/* Affichage de l'erreur du nom, le cas échéant */}
          {lastNameError && <span style={{ color: 'red' }}>{lastNameError}</span>}

          {/* Boutons Save et Cancel */}
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          {/* Bouton Edit pour activer le mode édition */}
          <button onClick={handleEditClick} className="edit-button">
            Edit Name
          </button>
        </div>
      )}
    </header>
  );
}
