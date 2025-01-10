import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemoveTask }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} onRemove={() => onRemoveTask(index)} />
            ))}
        </ul>
    );
};

export default TaskList;
