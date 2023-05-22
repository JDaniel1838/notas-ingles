import React from "react";
import "../styles/BackgroundGradients.css";
import { TbShirtFilled } from "react-icons/tb";

const ListNotes = () => {
  return (
    <section className="my-8 w-full h-auto grid grid-cols-2 gap-4">
      <div className="bg-adjetives h-72 flex flex-col justify-center items-center rounded-lg shadow-lg  shadow-zinc-500/40">
        <span className="text-white text-6xl mb-2">
          <TbShirtFilled />
        </span>
        <a href="/adjetivos" className="text-white text-3xl font-bold">
          Adjetivos
        </a>
      </div>
    </section>
  );
};

export default ListNotes;
