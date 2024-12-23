import { Router } from 'express';
import Attendee from '../models/Attendee.js'; 
import Event from '../models/Event.js'; 

const router = Router();

router.get('/attendees', async (req, res) => {
  try {
    const attendees = await Attendee.find(); // Assuming you want to populate the related events

    if (!attendees || attendees.length === 0) {
      return res.status(404).json({ message: 'No attendees found' });
    }

    res.status(200).json({ attendees });
  } catch (err) {
    console.error('Error:', err);
    res.status(400).json({ message: 'Error fetching attendees', error: err.message });
  }
});

router.post('/:attendeeId/events/:eventId', async (req, res) => {
  try {
    const { attendeeId, eventId } = req.params;
    const attendee = await Attendee.findById(attendeeId);
    const event = await Event.findById(eventId); 

    if (!attendee || !event) {
      return res.status(404).json({ message: 'Attendee or Event not found' });
    }

    if (!attendee.events.includes(event._id)) {
      attendee.events.push(event._id); 
      await attendee.save();
    }

    res.status(200).json({ message: 'Attendee assigned to event', attendee });

  } catch (err) {
    console.error('Error:', err); 
    res.status(400).json({ message: 'Error assigning attendee to event', error: err.message });
  }
});

export default router;
