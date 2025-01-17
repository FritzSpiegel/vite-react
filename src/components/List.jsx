import React from "react";
import Card from "./card";

const List = ({ cards, removeCard }) => {
    return (
        <div className="space-y-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <Card name={card.name} job={card.job} onRemove={() => removeCard(index)} />
                </div>
            ))}
        </div>
    );
};

export default List;
