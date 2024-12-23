import { Router } from 'express';
import Task from '../models/Task.js';
import Event from '../models/Event.js';  

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { eventId, name, description } = req.body;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const newTask = new Task({ event: eventId, name, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: 'Error creating task', error: err });
  }
});

router.get('/:eventId', async (req, res) => {
  try {
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching tasks', error: err });
  }
});

router.put('/:taskId/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['Pending', 'Completed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      { status },
      { new: true }
    );

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: 'Error updating task status', error: err });
  }
});

export default router;
