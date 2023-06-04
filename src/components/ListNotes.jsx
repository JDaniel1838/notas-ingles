import "../styles/ListNotes.css";

const ListNotes = () => {
  return (
    <section className="list-notes my-20 w-full h-auto grid grid-cols-2 gap-4 sm:gap-9 container mx-auto px-4 sm:px-8">
      <div className="bg-adjetives h-72 flex flex-col justify-center items-center rounded-lg hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50">
        <span className="text-white text-6xl mb-2"></span>
        <a href="/temas" className="text-white text-3xl font-bold">
          Notas
        </a>
      </div>

      <div className="bg-vocabulary h-72 flex flex-col justify-center items-center rounded-lg hover:bg-blue-500 shadow-lg hover:shadow-blue-500/50">
        <span className="text-white text-6xl mb-2"></span>
        <a href="/vocabulario" className="text-white text-3xl font-bold">
          Vocabulario
        </a>
      </div>
    </section>
  );
};

export default ListNotes;
