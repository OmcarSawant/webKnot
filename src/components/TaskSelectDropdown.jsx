import React from 'react';

const TaskSelectDropdown = ({ tasks, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Task</option>
      {tasks.map((task) => (
        <option key={task.id} value={task.id}>
          {task.name}
        </option>
      ))}
    </select>
  );
};

export default TaskSelectDropdown;
