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
    "Aller à la salle", "Me cultiver", "Courir 10 km", "Aller à New York", "Boire plus d'eau",
    "Hang out with Cha", "Faire un max de blé", "Être - suce eptible", "Avoir mon S1", "Libérer de l'espace",
    "Corps de rêve", "Aller à Paris", "Être heureuse", "Lire des livres", "Vacances au soleil",
    "Créer mon business", "Nouveau Jellycat", "Faire des activités manuelles", "Avoir le NYTC", "Apprendre l'allemand",
    "Skin Care", "Avoir mon Master", "Cuisiner à la maison", "Baptiste <3", "Cheveux longs",
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
    if (email !== "lexane.delrue@gmail.com") return; // Vérification de l'adresse e-mail

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
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
          Bingo 2025 de Lexane
        </h1>

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
        <div className="grid grid-cols-5 gap-4 sm:gap-6 p-6 w-full max-w-6xl">
          {buttonTexts.map((text, i) => (
            <button
              key={i}
              className={`w-16 sm:w-24 h-16 sm:h-20 flex items-center justify-center text-center text-xs sm:text-xs font-medium border-2 ${
                selected.includes(i) ? "border-green-500 bg-green-500" : "border-gray-300 bg-primary"
              } rounded-lg cursor-pointer ${
                email !== "lexane.delrue@gmail.com" ? "cursor-not-allowed opacity-50" : "hover:shadow-md"
              } transition`}
              onClick={() => handleButtonClick(i)}
              disabled={email !== "lexane.delrue@gmail.com"}
            >
              <span className="text-white px-2">{text}</span>
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
