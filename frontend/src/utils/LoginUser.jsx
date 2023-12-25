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

    const data = await response.json();

    if (response.ok) {
      const responseBody = data?.body;

      if (responseBody && responseBody.token) {
        localStorage.setItem('authToken', responseBody.token);
        return data;
      } else {
        throw new Error("Réponse de connexion invalide. Veuillez réessayer.");
      }
    } else {
      // Si les identifiants sont incorrects, affiche un message d'alerte
      if (response.status === 401) {
        alert("Identifiants incorrects. Veuillez réessayer.");
      }

      throw new Error(data.message || "Erreur lors de la connexion");
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
