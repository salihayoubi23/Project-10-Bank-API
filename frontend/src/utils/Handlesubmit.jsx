// Importe la fonction loginUser depuis le fichier 'LoginUser'
import { loginUser } from './LoginUser';

// Fonction pour gérer la soumission du formulaire de connexion
export const HandleSubmit = async (email, password, setError, navigate) => {
  try {
    // Validation des entrées
    if (!email || !password) {
      throw new Error("Veuillez saisir une adresse e-mail et un mot de passe.");
    }

    // Appelle la fonction loginUser pour effectuer la connexion
    const data = await loginUser(email, password);

    // Si la connexion réussit, redirige l'utilisateur vers la page "/User"
    navigate("/User");
  } catch (error) {
    // En cas d'échec de la connexion, gère l'erreur en utilisant la fonction setError
    setError(error.message || "Erreur lors de la connexion. Veuillez réessayer.");
  }
};