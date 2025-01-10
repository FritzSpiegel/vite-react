import React from 'react';

const TaskItem = ({ task, onRemove }) => {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                marginBottom: '8px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '4px',
            }}
        >
            {task}
            <button
                onClick={onRemove}
                style={{
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                }}
            >
                Löschen
            </button>
        </li>
    );
};

export default TaskItem;
