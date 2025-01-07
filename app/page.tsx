"use client";

import Wrapper from "./components/Wrapper";

export default function CouplePage() {
  return (
    <Wrapper>
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-center px-4">
        {/* Image */}
        <img
          src="couple.jpg"
          alt="Couple"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6"
        />
        {/* Phrase */}
        <p className="text-lg text-primary font-medium">
          Veuillez sélectionner dans la barre de navigation le bingo à consulter.
        </p>
      </div>
    </Wrapper>
  );
}
