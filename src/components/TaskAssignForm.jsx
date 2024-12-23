import React from 'react';
import { getAttendees } from '../controllers/attendeeController'; // Assume you can get attendees
import { useState, useEffect } from 'react';

const TaskAssignForm = ({ taskId, onAssign }) => {
  const [attendees, setAttendees] = useState([]);
  const [selectedAttendee, setSelectedAttendee] = useState('');

  useEffect(() => {
    const fetchAttendees = async () => {
      const data = await getAttendees();
      setAttendees(data);
    };
    fetchAttendees();
  }, []);

  const handleAssign = () => {
    if (!selectedAttendee) {
      alert('Please select an attendee');
      return;
    }
    onAssign(taskId, selectedAttendee);
  };

  return (
    <div className="task-assign-form">
      <h3>Assign Task</h3>
      <select onChange={(e) => setSelectedAttendee(e.target.value)} value={selectedAttendee}>
        <option value="">Select Attendee</option>
        {attendees.map(attendee => (
          <option key={attendee.id} value={attendee.id}>
            {attendee.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default TaskAssignForm;
