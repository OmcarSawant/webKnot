import { Schema, model } from 'mongoose';

const AttendeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
});

const Attendee = model('Attendee', AttendeeSchema);
export default Attendee; 
