"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Wrapper from "../components/Wrapper";

export default function Home() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress as string;

  // État pour gérer les boutons sélectionnés
  const [selected, setSelected] = useState<number[]>([]);

  // Textes des boutons (modifiables)
  const buttonTexts = [
    "Obtenir le CFA 1", "Continuer le football en club", "Ecouter des podcasts et pas du Naps", "Rester avec Lexane mon coeur de beurre", "Mettre en route agence INGERIM",
    "Limiter au max le visionnage VF", "Développer mon réseau professionnel", "Apprendre à cuisiner...un peu", "Réussir mon double diplôme", "Mieux se saper comme jamais",
    "Développer une appli mobile perso", "Emmener Lex à Paris", "Trouver une bonne suite à mon alternance", "Economiser 250 euros par mois", "Suivi occasionnel d’une newsletter finance",
    "Manger plus sainement", "Développer un outil de gestion de projet web", "Préparer les USA", "Gérer mon alternance", "Moins boire dans l’excès",
    "Ne pas lâcher l’allemand", "Rejoindre un autre club de foot en France", "Créer une appli web perso ", "Le summer body inchallaaaah", "Mettre à jour mon image pro",
  ];

  // Charger les données sauvegardées au démarrage
  useEffect(() => {
    const savedSelections = localStorage.getItem("selectedButtons");
    if (savedSelections) {
      setSelected(JSON.parse(savedSelections));
    }
  }, []);

  // Gestion du clic sur un bouton
  const handleButtonClick = (index: number) => {
    if (email !== "dutoit.baptiste@gmail.com") return; // Vérification de l'adresse e-mail

    const updatedSelection = selected.includes(index)
      ? selected.filter((i) => i !== index)
      : [...selected, index];

    setSelected(updatedSelection);

    // Sauvegarder dans localStorage
    localStorage.setItem("selectedButtons", JSON.stringify(updatedSelection));
  };

  // Calcul du pourcentage
  const percentage = Math.round((selected.length / buttonTexts.length) * 100);

  return (
    <Wrapper>
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bingo 2025 de Baptiste</h1>

        {/* Barre d'avancement */}
        <div className="w-full max-w-3xl mb-10">
          <p className="text-center text-gray-700 mb-2 font-medium">
            Progression : {percentage}%
          </p>
          <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Grille de boutons */}
        <div className="grid grid-cols-5 gap-y-10 p-6 w-full max-w-6xl">
          {buttonTexts.map((text, i) => (
            <button
              key={i}
              className={`w-24 h-20 flex items-center justify-center text-center text-sm font-medium border-2 ${
                selected.includes(i) ? "border-green-500 bg-green-500" : "border-gray-300 bg-primary"
              } rounded-lg cursor-pointer ${
                email !== "dutoit.baptiste@gmail.com" ? "cursor-not-allowed opacity-50" : "hover:shadow-md"
              } transition`}
              onClick={() => handleButtonClick(i)}
              disabled={email !== "dutoit.baptiste@gmail.com"}
            >
              <span className="text-white px-2">{text}</span>
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
