import React from "react";

const Card = ({ name, job, image, onRemove }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img
                    className="w-16 h-16 rounded-full object-cover"
                    src={image || "https://www.w3schools.com/howto/img_avatar.png"}
                    alt="Avatar"
                />
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{job}</p>
                </div>
            </div>
            <button
                onClick={onRemove}
            >
                Löschen
            </button>
        </div>
    );
};

export default Card;
