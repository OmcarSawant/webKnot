import React from 'react';

const AttendeeItem = ({ attendee, onRemove, onAssignTask }) => {
  return (
    <div className="attendee-item">
      <h2>{attendee.name}</h2>
      <p>Email: {attendee.email}</p>
      <button onClick={() => onRemove(attendee.id)}>Remove</button>
      <button onClick={() => onAssignTask(attendee)}>Assign Task</button>
    </div>
  );
};

export default AttendeeItem;
