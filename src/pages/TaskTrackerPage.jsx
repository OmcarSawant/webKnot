import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';
import TaskSelectDropdown from '../components/TaskSelectDropdown';
import { getTasks, updateTaskStatus, assignTask } from '../controllers/taskController';
import { getAttendees } from '../controllers/attendeeController';

const TaskTrackerPage = () => {
  const [tasks, setTasks] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const fetchAttendees = async () => {
      try {
        const data = await getAttendees();
        setAttendees(data);
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

    fetchTasks();
    fetchAttendees();
  }, []);

  const handleStatusChange = async (taskId, status) => {
    try {
      await updateTaskStatus(taskId, status);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, status } : task))
      );
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleAssignTask = async (taskId, attendeeId) => {
    try {
      await assignTask(taskId, attendeeId);
    } catch (error) {
      console.error('Error assigning task:', error);
    }
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <nav>
        <Link to="/tasks"><button>Tasks</button></Link>
        <Link to="/attendees"><button>Attendees</button></Link>
      </nav>
      {tasks.length > 0 && (
        <TaskSelectDropdown tasks={tasks} onSelect={setSelectedTask} />
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem
              task={task}
              attendees={attendees}
              onAssign={handleAssignTask}
              onStatusChange={handleStatusChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTrackerPage;
