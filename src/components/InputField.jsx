import React from "react";

const InputField = ({ label, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder={`Gib ${label.toLowerCase()} ein`}
            />
        </div>
    );
};

export default InputField;
