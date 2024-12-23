import React from 'react';

const EventItem = ({ event, onDelete }) => {
  return (
    <div className="event-item">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{new Date(event.date).toLocaleString()}</p>
      <button onClick={() => onDelete(event.id)}>Delete</button>
      {/* Optionally, add an Edit button or form here */}
    </div>
  );
};

export default EventItem;
