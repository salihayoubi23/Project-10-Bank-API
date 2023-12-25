import React from "react";
import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";

// Composant représentant une section de fonctionnalités avec des icônes, des titres et du contenu
export default function Features() {
  // Données représentant chaque fonctionnalité
  const featuresData = [
    {
      className: "feature-icon",
      src: IconChat,
      alt: "Chat Icon",
      title: "You are our #1 priority",
      content:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      className: "feature-icon",
      src: IconMoney,
      alt: "Money Icon",
      title: "More savings means higher rates",
      content:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      className: "feature-icon",
      src: IconSecurity,
      alt: "Security Icon",
      title: "Security you can trust",
      content:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    // Section contenant les fonctionnalités
    <section className="features">
      {/* Titre de la section (peut être masqué visuellement) */}
      <h2 className="sr-only">Features</h2>

      {/* Mapping des données pour afficher chaque fonctionnalité */}
      {featuresData.map(({ src, alt, className, title, content }, index) => (
        // Div représentant une fonctionnalité
        <div className="feature-item" key={title}>
          {/* Icône de la fonctionnalité */}
          <img src={src} alt={alt} className={className} />

          {/* Titre de la fonctionnalité */}
          <h3 className="feature-item-title">{title}</h3>

          {/* Contenu de la fonctionnalité */}
          <p>{content}</p>
        </div>
      ))}
    </section>
  );
}
