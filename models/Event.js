import { Schema, model } from 'mongoose';

const EventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
});

const Event = model('Event', EventSchema);
export default Event;
