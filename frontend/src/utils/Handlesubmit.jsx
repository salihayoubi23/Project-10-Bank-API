export async function loginUser(userName, password) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userName,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const responseBody = data?.body;

      if (responseBody) {
        const token = responseBody?.token;

        if (token !== undefined) {
          return data;
        } else {
          throw new Error("Réponse de connexion invalide. Veuillez réessayer.");
        }
      } else {
        throw new Error("Réponse de connexion invalide. Veuillez réessayer.");
      }
    } else {
      const errorData = await response.json();

      // Si les identifiants sont incorrects, affiche un message d'alerte
      if (response.status === 401) {
        throw new Error("Identifiants incorrects. Veuillez réessayer.");
      }

      throw new Error(errorData.message || "Erreur lors de la connexion");
    }
  } catch (error) {
    console.error("Erreur lors de la requête:", error);

    // Si une erreur se produit, renvoie un objet d'erreur avec un message
    return {
      error: true,
      message: error.message || "Erreur lors de la connexion",
    };
  }
}
