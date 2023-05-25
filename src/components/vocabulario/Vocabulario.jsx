import HeroImageSearch from "./HeroImageSearch";
import { useState } from "react";

const items = [
  {
    id: "777",
    english: "Happy Monday",
    spanish: "Feliz Lunes",
    emoji: "💙",
  },
  {
    id: "778",
    english: "A Beautiful Girl",
    spanish: "Una Niña linda",
    emoji: "🌺",
  },
  {
    id: "749",
    english: "Monday",
    spanish: "Lunes",
    emoji: "🌞",
  },
  {
    id: "750",
    english: "Tuesday",
    spanish: "Martes",
    emoji: "🌟",
  },
  {
    id: "751",
    english: "Wednesday",
    spanish: "Miércoles",
    emoji: "🌈",
  },
  {
    id: "752",
    english: "Thursday",
    spanish: "Jueves",
    emoji: "🌺",
  },
  {
    id: "753",
    english: "Friday",
    spanish: "Viernes",
    emoji: "🎉",
  },
  {
    id: "754",
    english: "Saturday",
    spanish: "Sábado",
    emoji: "🌼",
  },
  {
    id: "755",
    english: "Sunday",
    spanish: "Domingo",
    emoji: "☀️",
  },
  {
    id: "756",
    english: "January",
    spanish: "Enero",
    emoji: "❄️",
  },
  {
    id: "757",
    english: "February",
    spanish: "Febrero",
    emoji: "💘",
  },
  {
    id: "758",
    english: "March",
    spanish: "Marzo",
    emoji: "🌷",
  },
  {
    id: "759",
    english: "April",
    spanish: "Abril",
    emoji: "🌼",
  },
  {
    id: "760",
    english: "May",
    spanish: "Mayo",
    emoji: "🌸",
  },
  {
    id: "761",
    english: "June",
    spanish: "Junio",
    emoji: "☀️",
  },
  {
    id: "762",
    english: "July",
    spanish: "Julio",
    emoji: "🌞",
  },
  {
    id: "763",
    english: "August",
    spanish: "Agosto",
    emoji: "🌻",
  },
  {
    id: "764",
    english: "September",
    spanish: "Septiembre",
    emoji: "🍂",
  },
  {
    id: "765",
    english: "October",
    spanish: "Octubre",
    emoji: "🍁",
  },
  {
    id: "766",
    english: "November",
    spanish: "Noviembre",
    emoji: "🦃",
  },
  {
    id: "767",
    english: "December",
    spanish: "Diciembre",
    emoji: "🎄",
  },
  {
    id: "779",
    english: "the",
    spanish: "el, la, los, las",
    emoji: "🌍",
  },
  {
    id: "780",
    english: "be",
    spanish: "ser, estar",
    emoji: "🌟",
  },
  {
    id: "781",
    english: "to",
    spanish: "a, para",
    emoji: "✨",
  },
  {
    id: "782",
    english: "of",
    spanish: "de",
    emoji: "🔑",
  },
  {
    id: "783",
    english: "and",
    spanish: "y",
    emoji: "💫",
  },
  {
    id: "784",
    english: "a",
    spanish: "un, una",
    emoji: "🌼",
  },
  {
    id: "785",
    english: "in",
    spanish: "en",
    emoji: "🌈",
  },
  {
    id: "786",
    english: "that",
    spanish: "ese, eso, aquello",
    emoji: "🌟",
  },
  {
    id: "787",
    english: "have",
    spanish: "tener, haber",
    emoji: "🌺",
  },
  {
    id: "788",
    english: "I",
    spanish: "yo",
    emoji: "🌞",
  },
  {
    id: "789",
    english: "it",
    spanish: "lo, la, ello",
    emoji: "🌟",
  },
  {
    id: "790",
    english: "for",
    spanish: "para, por",
    emoji: "💫",
  },
  {
    id: "791",
    english: "not",
    spanish: "no",
    emoji: "❌",
  },
  {
    id: "792",
    english: "on",
    spanish: "en, sobre",
    emoji: "🔛",
  },
  {
    id: "793",
    english: "with",
    spanish: "con",
    emoji: "🔗",
  },
  {
    id: "794",
    english: "he",
    spanish: "él",
    emoji: "🌟",
  },
  {
    id: "795",
    english: "as",
    spanish: "como",
    emoji: "🔑",
  },
  {
    id: "796",
    english: "you",
    spanish: "tú",
    emoji: "🌟",
  },
  {
    id: "797",
    english: "do",
    spanish: "hacer",
    emoji: "🔧",
  },
  {
    id: "798",
    english: "at",
    spanish: "en, a",
    emoji: "📍",
  },
  {
    id: "799",
    english: "this",
    spanish: "este, esta, esto",
    emoji: "🌍",
  },
  {
    id: "800",
    english: "but",
    spanish: "pero",
    emoji: "❌",
  },
  {
    id: "801",
    english: "his",
    spanish: "su (de él)",
    emoji: "🌟",
  },
  {
    id: "802",
    english: "by",
    spanish: "por",
    emoji: "➡️",
  },
  {
    id: "803",
    english: "from",
    spanish: "desde",
    emoji: "🌍",
  },
  {
    id: "804",
    english: "they",
    spanish: "ellos",
    emoji: "🌟",
  },
  {
    id: "805",
    english: "we",
    spanish: "nosotros",
    emoji: "🌈",
  },
  {
    id: "806",
    english: "say",
    spanish: "decir",
    emoji: "💬",
  },
  {
    id: "807",
    english: "her",
    spanish: "su (de ella)",
    emoji: "🌟",
  },
  {
    id: "808",
    english: "or",
    spanish: "o",
    emoji: "🌟",
  },
  {
    id: "809",
    english: "an",
    spanish: "un, una",
    emoji: "🌟",
  },
  {
    id: "810",
    english: "will",
    spanish: "voluntad",
    emoji: "🌟",
  },
  {
    id: "811",
    english: "my",
    spanish: "mi",
    emoji: "🌟",
  },
  {
    id: "812",
    english: "one",
    spanish: "uno",
    emoji: "1️⃣",
  },
  {
    id: "813",
    english: "all",
    spanish: "todos",
    emoji: "🌟",
  },
  {
    id: "814",
    english: "would",
    spanish: "haría",
    emoji: "🌟",
  },
  {
    id: "815",
    english: "there",
    spanish: "allí, ahí",
    emoji: "🌟",
  },
  {
    id: "816",
    english: "their",
    spanish: "su (de ellos)",
    emoji: "🌟",
  },
  {
    id: "817",
    english: "what",
    spanish: "qué",
    emoji: "❓",
  },
  {
    id: "818",
    english: "so",
    spanish: "así, tan",
    emoji: "🌟",
  },
  {
    id: "819",
    english: "up",
    spanish: "arriba",
    emoji: "⬆️",
  },
  {
    id: "820",
    english: "out",
    spanish: "fuera",
    emoji: "🌟",
  },
  {
    id: "821",
    english: "if",
    spanish: "si",
    emoji: "🌟",
  },
  {
    id: "822",
    english: "about",
    spanish: "acerca de",
    emoji: "🌍",
  },
  {
    id: "823",
    english: "who",
    spanish: "quién",
    emoji: "🌟",
  },
  {
    id: "824",
    english: "get",
    spanish: "obtener",
    emoji: "🌟",
  },
  {
    id: "825",
    english: "which",
    spanish: "cuál",
    emoji: "🌟",
  },
  {
    id: "826",
    english: "go",
    spanish: "ir",
    emoji: "🚶",
  },
  {
    id: "827",
    english: "me",
    spanish: "yo",
    emoji: "🌟",
  },
  {
    id: "828",
    english: "when",
    spanish: "cuándo",
    emoji: "⏰",
  },
  {
    id: "829",
    english: "make",
    spanish: "hacer",
    emoji: "🔧",
  },
  {
    id: "830",
    english: "can",
    spanish: "poder",
    emoji: "🌟",
  },
  {
    id: "831",
    english: "like",
    spanish: "gustar",
    emoji: "👍",
  },
  {
    id: "832",
    english: "time",
    spanish: "tiempo",
    emoji: "⌛",
  },
  {
    id: "833",
    english: "no",
    spanish: "no",
    emoji: "❌",
  },
  {
    id: "834",
    english: "just",
    spanish: "solo, justo",
    emoji: "🌟",
  },
  {
    id: "835",
    english: "him",
    spanish: "él",
    emoji: "🌟",
  },
  {
    id: "836",
    english: "know",
    spanish: "saber, conocer",
    emoji: "🧠",
  },
  {
    id: "837",
    english: "take",
    spanish: "tomar",
    emoji: "🌟",
  },
  {
    id: "838",
    english: "people",
    spanish: "personas",
    emoji: "🌟",
  },
  {
    id: "839",
    english: "into",
    spanish: "dentro de",
    emoji: "🌍",
  },
  {
    id: "840",
    english: "year",
    spanish: "año",
    emoji: "📅",
  },
  {
    id: "841",
    english: "your",
    spanish: "tu, tus",
    emoji: "🌟",
  },
  {
    id: "842",
    english: "good",
    spanish: "bueno",
    emoji: "👍",
  },
  {
    id: "843",
    english: "some",
    spanish: "algunos",
    emoji: "🌟",
  },
  {
    id: "844",
    english: "could",
    spanish: "podría",
    emoji: "🌟",
  },
  {
    id: "845",
    english: "them",
    spanish: "ellos",
    emoji: "🌟",
  },
  {
    id: "846",
    english: "see",
    spanish: "ver",
    emoji: "👀",
  },
  {
    id: "847",
    english: "other",
    spanish: "otro",
    emoji: "🌟",
  },
  {
    id: "848",
    english: "than",
    spanish: "que, más que",
    emoji: "🌟",
  },
  {
    id: "849",
    english: "then",
    spanish: "entonces",
    emoji: "🌟",
  },
  {
    id: "850",
    english: "now",
    spanish: "ahora",
    emoji: "⌛",
  },
  {
    id: "851",
    english: "look",
    spanish: "mirar",
    emoji: "👀",
  },
  {
    id: "852",
    english: "only",
    spanish: "sólo",
    emoji: "🌟",
  },
  {
    id: "853",
    english: "come",
    spanish: "venir",
    emoji: "🚶",
  },
  {
    id: "854",
    english: "its",
    spanish: "su (de algo)",
    emoji: "🌟",
  },
  {
    id: "855",
    english: "over",
    spanish: "encima de",
    emoji: "⬆️",
  },
  {
    id: "856",
    english: "think",
    spanish: "pensar",
    emoji: "💭",
  },
  {
    id: "857",
    english: "also",
    spanish: "también",
    emoji: "🌟",
  },
  {
    id: "858",
    english: "back",
    spanish: "atrás",
    emoji: "🔙",
  },
  {
    id: "859",
    english: "after",
    spanish: "después",
    emoji: "🌟",
  },
  {
    id: "860",
    english: "use",
    spanish: "usar",
    emoji: "🔧",
  },
  {
    id: "861",
    english: "two",
    spanish: "dos",
    emoji: "2️⃣",
  },
  {
    id: "862",
    english: "how",
    spanish: "cómo",
    emoji: "❓",
  },
  {
    id: "863",
    english: "our",
    spanish: "nuestro",
    emoji: "🌟",
  },
  {
    id: "864",
    english: "work",
    spanish: "trabajo",
    emoji: "💼",
  },
  {
    id: "865",
    english: "first",
    spanish: "primero",
    emoji: "🥇",
  },
  {
    id: "866",
    english: "well",
    spanish: "bien",
    emoji: "🌟",
  },
  {
    id: "867",
    english: "way",
    spanish: "camino",
    emoji: "🛣️",
  },
  {
    id: "868",
    english: "even",
    spanish: "incluso",
    emoji: "🌟",
  },
  {
    id: "869",
    english: "new",
    spanish: "nuevo",
    emoji: "🆕",
  },
  {
    id: "870",
    english: "want",
    spanish: "querer",
    emoji: "💭",
  },
  {
    id: "871",
    english: "because",
    spanish: "porque",
    emoji: "🌟",
  },
  {
    id: "872",
    english: "any",
    spanish: "cualquier",
    emoji: "🌟",
  },
  {
    id: "873",
    english: "these",
    spanish: "estos, estas",
    emoji: "🌍",
  },
  {
    id: "874",
    english: "give",
    spanish: "dar",
    emoji: "🎁",
  },
  {
    id: "875",
    english: "day",
    spanish: "día",
    emoji: "🌞",
  },
  {
    id: "876",
    english: "most",
    spanish: "la mayoría",
    emoji: "🌟",
  },
  {
    id: "877",
    english: "us",
    spanish: "nosotros",
    emoji: "🌍",
  },
  {
    id: "878",
    english: "such",
    spanish: "tal, semejante",
    emoji: "🌟",
  },
  {
    id: "879",
    english: "tell",
    spanish: "decir",
    emoji: "💬",
  },
  {
    id: "880",
    english: "very",
    spanish: "muy",
    emoji: "🌟",
  },
  {
    id: "881",
    english: "her",
    spanish: "su (de ella)",
    emoji: "🌟",
  },
  {
    id: "882",
    english: "life",
    spanish: "vida",
    emoji: "🌟",
  },
  {
    id: "883",
    english: "get",
    spanish: "obtener",
    emoji: "🌟",
  },
  {
    id: "884",
    english: "here",
    spanish: "aquí",
    emoji: "📍",
  },
  {
    id: "885",
    english: "own",
    spanish: "propio",
    emoji: "🌟",
  },
  {
    id: "886",
    english: "going",
    spanish: "yendo",
    emoji: "🌟",
  },
  {
    id: "887",
    english: "much",
    spanish: "mucho",
    emoji: "🌟",
  },
  {
    id: "888",
    english: "under",
    spanish: "debajo de",
    emoji: "⬇️",
  },
  {
    id: "889",
    english: "back",
    spanish: "atrás",
    emoji: "🔙",
  },
  {
    id: "890",
    english: "through",
    spanish: "a través de",
    emoji: "⬆️",
  },
  {
    id: "891",
    english: "years",
    spanish: "años",
    emoji: "📅",
  },
  {
    id: "892",
    english: "much",
    spanish: "mucho",
    emoji: "🌟",
  },
  {
    id: "893",
    english: "before",
    spanish: "antes",
    emoji: "⌚",
  },
  {
    id: "894",
    english: "between",
    spanish: "entre",
    emoji: "⬇️",
  },
  {
    id: "895",
    english: "our",
    spanish: "nuestro",
    emoji: "🌟",
  },
  {
    id: "896",
    english: "down",
    spanish: "abajo",
    emoji: "⬇️",
  },
  {
    id: "897",
    english: "should",
    spanish: "debería",
    emoji: "🌟",
  },
  {
    id: "898",
    english: "because",
    spanish: "porque",
    emoji: "🌟",
  },
  {
    id: "899",
    english: "before",
    spanish: "antes",
    emoji: "⌚",
  },
  {
    id: "900",
    english: "those",
    spanish: "esos, esas",
    emoji: "🌍",
  },
];

const Vocabulario = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filtrar los elementos según el término de búsqueda
    const filtered = items.filter((item) =>
      item.english.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <HeroImageSearch
        title="MI  VOCABULARIO"
        gradients={{ top: "from-pink-500", bottom: "to-indigo-500" }}
        emoji="📚"
        onSearch={handleSearch}
        valueInput={searchTerm}
      />
      <main className="container mx-auto mt-7 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <p
                className="border rounded-md border-slate-300 p-2 font-medium text-zinc-600"
                key={item.id}
              >
                <span>{item.emoji}</span> <span>{item.english}</span> →{" "}
                <span>{item.spanish}</span>
              </p>
            ))
          ) : (
            <p className="border rounded-md border-slate-300 p-2 font-medium text-zinc-600">
              Aun no conozco esa palabra
            </p>
          )}
        </div>
        <div className="w-full d-flex justify-center my-9">
          <a
            href="/"
            className="bg-blue-500 px-5 py-3 my-3 mx-auto text-white font-bold hover:to-blue-400 rounded-md"
          >
            Regresar
          </a>
        </div>
      </main>
    </>
  );
};

export default Vocabulario;
