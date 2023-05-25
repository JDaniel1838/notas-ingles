import React from "react";
import "../styles/HeroImages.css";

const HeroImage = ({ title, gradients, emoji }) => {
  return (
    <>
      <header className="w-100 div-hero hv-50">
        <div className="w-full h-full container mx-auto flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-7xl text-center">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients.top} ${gradients.bottom}`}
            >
              {title}
            </span>
            <span>{emoji}</span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default HeroImage;
