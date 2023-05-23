import React from "react";
import "../styles/HeroImages.css";

const HeroImage = () => {
  return (
    <>
      <header className="w-100 div-hero ">
        <div className="w-full h-full container mx-auto flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-7xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-300">
              MIS NOTAS DE INGLES
            </span>
            <span>📖</span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default HeroImage;
