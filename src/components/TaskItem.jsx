import React from 'react';
import TaskStatusButton from './TaskStatusButton';

const TaskItem = ({ task, attendees, onAssign, onStatusChange }) => {
  const handleAssign = () => {
    const attendeeId = prompt('Enter Attendee ID to assign the task:');
    if (attendeeId) {
      onAssign(task.id, attendeeId);
    }
  };

  return (
    <div className="task-item">
      <h2>{task.name}</h2>
      <p>Description: {task.description}</p>
      <TaskStatusButton task={task} onStatusChange={onStatusChange} />
      <button onClick={handleAssign}>Assign to Attendee</button>
    </div>
  );
};

export default TaskItem;
