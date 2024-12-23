import React from 'react';

const TaskStatusButton = ({ task, onStatusChange }) => {
  const nextStatus = task.status === 'Pending' ? 'Completed' : 'Pending';

  return (
    <div className="task-status-button">
      <button onClick={() => onStatusChange(task.id, nextStatus)}>
        Mark as {nextStatus}
      </button>
    </div>
  );
};

export default TaskStatusButton;
