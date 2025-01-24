import React from "react";

const InputField = ({ label, value, onChange, type = "text" }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <input
                type={type}
                value={type === "file" ? undefined : value}
                onChange={(e) =>
                    onChange(type === "file" ? e.target.files[0] : e.target.value)
                }
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300`}
                placeholder={type === "text" ? `Gib ${label.toLowerCase()} ein` : undefined}
            />
        </div>
    );
};

export default InputField;
