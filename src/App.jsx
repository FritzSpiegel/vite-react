import React, { useState } from "react";
import List from "./components/List";
import HoverButton from "./components/HoverButton";
import InputField from "./components/InputField";

function App() {
  const [cards, setCards] = useState([
    { name: "Memet", job: "Festomitarbeiter" },

  ]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [search, setSearch] = useState("");

  const addCard = () => {
    if (name.trim() && job.trim()) {
      setCards([...cards, { name, job }]);
      setName("");
      setJob("");
    }
  };

  const removeCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const filteredCards = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.job.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Meine React-App mit Vite und Tailwind
      </h1>
      <div className="flex items-center gap-x-4 mb-4">
        <InputField label="Name" value={name} onChange={setName} />
        <InputField label="Job" value={job} onChange={setJob} />
        <HoverButton addCard={addCard} />
      </div>
      <div className="mb-6">
        <InputField label="Suche" value={search} onChange={setSearch} />
      </div>
      <List cards={filteredCards} removeCard={removeCard} />
    </div>
  );
}

export default App;
