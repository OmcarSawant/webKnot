import { Router } from 'express';
import Event from '../models/Event.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, description, location, date } = req.body;
    const newEvent = new Event({ name, description, location, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: 'Error creating event', error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching events', error: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, description, location, date } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { name, description, location, date },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: 'Error updating event', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting event', error: err });
  }
});

export default router;
