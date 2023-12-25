import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducer/userSlice'; // Importation de l'action de déconnexion depuis le slice Redux
import { Link } from 'react-router-dom'; // Importation du composant de lien fourni par react-router-dom
import BankLogo from "../assets/argentBankLogo.png"; // Importation du logo de la banque
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation du composant FontAwesomeIcon pour utiliser des icônes
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes utilisées

// Définition du composant de navigation
const Nav = () => {
  const dispatch = useDispatch(); // Hook useDispatch pour envoyer des actions Redux
  const isAuthenticated = useSelector((state) => state.auth.user != null); // Sélecteur pour vérifier si l'utilisateur est authentifié

  const handleSignOut = () => {
    dispatch(logout()); // Fonction de gestion du clic sur "Sign Out" qui déclenche l'action de déconnexion
  };
  
  const user = useSelector((state) => state.auth.user); // Sélecteur pour obtenir les informations sur l'utilisateur depuis le store Redux

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={BankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <FontAwesomeIcon icon={faUserCircle} /> {/* Icône représentant l'utilisateur */}
        {isAuthenticated ? ( // Si l'utilisateur est authentifié
          <>
            <Link to="/user" className="main-nav-item">{user.body.firstName}</Link> {/* Lien vers le profil de l'utilisateur */}
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> {/* Icône de flèche vers la droite */}
            <Link to="/" onClick={handleSignOut} className="main-nav-item">Sign Out</Link> {/* Lien pour déclencher la déconnexion */}
          </>
        ) : (
           <Link to="/login" className="main-nav-item">
          {/* Lien vers la page de connexion si l'utilisateur n'est pas authentifié */}
          Sign In
        </Link>
        
        )}
      </div>
    </nav>
  );
};

export default Nav; // Exportation du composant de navigation
