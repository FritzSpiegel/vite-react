import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if (input.trim()) {
            onAddTask(input);
            setInput('');
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Neue Aufgabe..."
                style={{
                    padding: '8px',
                    marginRight: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    width: '70%',
                }}
            />
            <button
                onClick={handleAddTask}
                style={{
                    padding: '8px 12px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Hinzufügen
            </button>
        </div>
    );
};

export default TaskInput;
