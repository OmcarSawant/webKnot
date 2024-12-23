import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { getEvents, deleteEvent } from '../controllers/eventController';

const EventManagementPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h1>Event Management</h1>
      <nav>
        <Link to="/tasks"><button>Tasks</button></Link>
        <Link to="/attendees"><button>Attendees</button></Link>
      </nav>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <EventItem event={event} onDelete={handleDeleteEvent} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagementPage;
