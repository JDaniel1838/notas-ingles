import "../../styles/HeroImages.css";

const HeroImage = ({ title, gradients, emoji, onSearch, valueInput }) => {
  return (
    <>
      <header className="w-100 div-hero hv-20">
        <div className="w-full h-full container mx-auto flex flex-col justify-evenly items-center">
          <h1 className="font-extrabold text-4xl sm:text-6xl text-center">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients.top} ${gradients.bottom}`}
            >
              {title}
            </span>
            <span>{emoji}</span>
          </h1>

          <form className="flex justify-center w-5/6 h-12">
            <input
              type="text"
              name="search"
              placeholder="Ingresa una palabra..."
              className="w-11/12 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
              value={valueInput}
              onChange={(e) => onSearch(e)}
            />
          </form>
        </div>
      </header>
    </>
  );
};

export default HeroImage;
