import React from "react";
import "../styles/HeroImages.css";
import { SITE_TITLE } from "../consts";

const HeroImage = ({ title, gradients }) => {
  return (
    <>
      <section className="w-100 div-hero hv-50">
        <div className="w-full h-full container mx-auto flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-7xl text-center">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-t ${gradients.top} ${gradients.bottom}`}
            >
              {title}
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroImage;
