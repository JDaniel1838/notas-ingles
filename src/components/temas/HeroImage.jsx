import "../../styles/Topics.css";

const HeroImage = ({ title }) => {
  return (
    <div className="hv-30 flex justify-center items-center hero-image-topic">
      <h1 className="text-5xl font-black text-white uppercase ">{title}</h1>
    </div>
  );
};

export default HeroImage;
