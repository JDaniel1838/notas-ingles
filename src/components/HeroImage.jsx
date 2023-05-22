import React from "react";
import "../styles/HeroImages.css";

const HeroImage = () => {
  return (
    <>
      <header className="w-100 h-40 hero-bg-blue ">
        <div className="w-full h-full container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-white">
            MIS NOTAS DE INGLES 📖
          </h1>
        </div>
      </header>
    </>
  );
};

export default HeroImage;
