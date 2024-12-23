import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
});

const Task = model('Task', TaskSchema);
export default Task;
