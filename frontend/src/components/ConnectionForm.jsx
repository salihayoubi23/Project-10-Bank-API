import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { loginUser, fetchUserProfile, setEmail, setPassword, setError } from '../reducer/userSlice';
import ConnectionFields from './ConnectionFields';
import { useNavigate } from 'react-router-dom';

// Composant principal pour le formulaire de connexion
export default function ConnectionForm() {
  const dispatch = useDispatch(); // Utilisation du hook useDispatch pour envoyer des actions Redux
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la navigation dans l'application
  const { email, password, error, user } = useSelector((state) => state.auth); // Utilisation du hook useSelector pour accéder à l'état Redux

  // Effet secondaire pour rediriger l'utilisateur s'il est connecté ou en cas d'erreur
  useEffect(() => {
    if (user) {
      navigate('/user'); // Redirection vers la page utilisateur si l'utilisateur est connecté
    }
  }, [user, error, navigate]); // Dépendances de l'effet secondaire

  // Gestionnaire de changement d'e-mail
  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value)); // Dispatch de l'action setEmail avec la nouvelle valeur de l'e-mail
  };

  // Gestionnaire de changement de mot de passe
  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value)); // Dispatch de l'action setPassword avec la nouvelle valeur du mot de passe
  };

  // Gestionnaire de configuration d'erreur
  const handleErrorSet = (error) => {
    dispatch(setError(error)); // Dispatch de l'action setError avec le message d'erreur
  };

  // Gestionnaire de soumission du formulaire
 // Gestionnaire de soumission du formulaire
const handleSubmit = async (e) => {
  e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

  try {
    const loginAction = await dispatch(loginUser({ email, password, navigate }));
    
    if (loginAction.error) {
      // Gestion des erreurs de loginUser
      handleErrorSet(loginAction.payload.message);
    } else {
      // Si la connexion réussit, dispatch fetchUserProfile avec le token
      const userProfileAction = await dispatch(fetchUserProfile(loginAction.payload.body.token));

      if (userProfileAction.error) {
        // Gestion des erreurs de fetchUserProfile
        handleErrorSet(userProfileAction.payload.message);
      }
    }
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    handleErrorSet("Erreur lors de la connexion. Veuillez réessayer.");
  }
};

  // Rendu du composant
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {/* Utilisation du composant ConnectionFields pour gérer les champs du formulaire */}
          <ConnectionFields
            email={email}
            onEmailChange={handleEmailChange}
            password={password}
            onPasswordChange={handlePasswordChange}
            error={error}
            onErrorSet={handleErrorSet}
          />
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
          {error && <p className="error-message">{error}</p>} {/* Affichage du message d'erreur s'il y en a un */}
        </form>
      </section>
    </main>
  );
}
