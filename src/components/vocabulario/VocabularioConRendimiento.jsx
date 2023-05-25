import React from "react";
import HeroImageSearch from "./HeroImageSearch";
import { useState } from "react";
const items = [
  "Happy",
  "Monday",
  "A",
  "Beautiful",
  "Girl",
  "Hippy",
  "Happen",
  "Haply",
  "Hapax",
  "Harpy",
  "Hasty",
  "Harp",
  "Harry",
  "Happy-go-lucky",
];

const Vocabulario = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filtrar los elementos según el término de búsqueda utilizando el índice invertido
    const filteredIndices = searchIndex(value);
    const filtered = filteredIndices.map((index) => items[index]);
    setFilteredItems(filtered);
  };

  const buildIndex = (items) => {
    const index = {};

    items.forEach((item, idx) => {
      const words = item.toLowerCase().split(" ");

      words.forEach((word) => {
        if (!index[word]) {
          index[word] = [];
        }
        index[word].push(idx);
      });
    });

    return index;
  };
  const index = buildIndex(items); // Construir el índice invertido

  const searchIndex = (term) => {
    if (!term) {
      return [];
    }

    const words = term.toLowerCase().split(" ");
    let result = [];

    words.forEach((word) => {
      if (index[word]) {
        result = result.concat(index[word]);
      }
    });

    return result;
  };

  const filteredIndices = searchIndex(searchTerm);
  const displayedItems = filteredIndices.length > 0 ? filteredItems : items;

  return (
    <>
      <HeroImageSearch
        title="MI  VOCABULARIO"
        gradients={{ top: "from-pink-500", bottom: "to-indigo-500" }}
        emoji="📚"
        onSearch={handleSearch}
        valueInput={searchTerm}
      />
      <main className="container mx-auto px-4 sm:px-8">
        <div>
          {displayedItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </main>
    </>
  );
};

export default Vocabulario;
