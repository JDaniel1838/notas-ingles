import React from "react";

const TopicCard = ({ title, urlTitle, classBackground }) => {
  return (
    <>
      <div
        className={`${classBackground} h-72 flex flex-col justify-center items-center rounded-lg `}
      >
        <span className="text-white text-6xl mb-2"></span>
        <a
          href={urlTitle}
          className="text-white text-3xl font-bold text-center"
        >
          {title}
        </a>
      </div>
    </>
  );
};

export default TopicCard;
