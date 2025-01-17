import React from "react";

const HoverButton = ({ addCard }) => {
    return (
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
            onClick={addCard}
        >
            Karte hinzufügen
        </button>
    );
};

export default HoverButton;
