import React from "react";

// Composant représentant la section héroïque
export default function Hero() {
  // Données du contenu héroïque, chaque élément représentant un morceau de contenu
  const heroContentData = [
    {
      className: "sr-only", // Classe pour masquer visuellement
      type: "h2", // Type d'élément HTML
      content: "Promoted Content", // Contenu textuel
    },
    {
      className: "subtitle",
      type: "p",
      content: "No fees.",
    },
    {
      className: "subtitle",
      type: "p",
      content: "No minimum deposit.",
    },
    {
      className: "subtitle",
      type: "p",
      content: "High interest rates.",
    },
    {
      className: "text",
      type: "p",
      content: "Open a savings account with Argent Bank today!",
    },
  ];

  // Rendu du composant
  return (
    <div className="hero">
      {/* Section contenant le contenu héroïque */}
      <section className="hero-content">
        {/* Mapping des données pour afficher chaque élément du contenu */}
        {heroContentData.map((item, index) => {
          // Dynamiquement choisir le type d'élément (h2, p, etc.)
          const Element = item.type;
          return (
            <Element key={index} className={item.className}>{item.content}</Element>
          );
        })}
      </section>
    </div>
  );
}
