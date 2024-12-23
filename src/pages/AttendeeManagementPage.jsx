import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AttendeeItem from '../components/AttendeeItem';
import TaskAssignForm from '../components/TaskAssignForm';
import { getAttendees, removeAttendee } from '../controllers/attendeeController';
import { getTasks } from '../controllers/taskController';

const AttendeeManagementPage = () => {
  const [attendees, setAttendees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showTaskAssignForm, setShowTaskAssignForm] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState(null);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const data = await getAttendees();
        setAttendees(data);
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchAttendees();
    fetchTasks();
  }, []);

  const handleRemoveAttendee = async (id) => {
    try {
      await removeAttendee(id);
      setAttendees((prevAttendees) =>
        prevAttendees.filter((attendee) => attendee.id !== id)
      );
    } catch (error) {
      console.error('Error removing attendee:', error);
    }
  };

  const handleAssignTask = (attendee) => {
    setSelectedAttendee(attendee);
    setShowTaskAssignForm(true);
  };

  const handleAssign = (taskId, attendeeId) => {
    console.log(`Task ${taskId} assigned to attendee ${attendeeId}`);
    setShowTaskAssignForm(false);
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      <nav>
        <Link to="/tasks"><button>Tasks</button></Link>
        <Link to="/attendees"><button>Attendees</button></Link>
      </nav>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee.id}>
            <AttendeeItem
              attendee={attendee}
              onRemove={handleRemoveAttendee}
              onAssignTask={handleAssignTask}
            />
          </li>
        ))}
      </ul>
      {showTaskAssignForm && (
        <TaskAssignForm
          tasks={tasks}
          attendee={selectedAttendee}
          onAssign={handleAssign}
        />
      )}
    </div>
  );
};

export default AttendeeManagementPage;
