// server.js
// require('dotenv').config();  // Load .env variables
import mongoose from 'mongoose';
import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import eventRoutes from './routes/eventRoutes.js';
import attendeeRoutes from './routes/attendeeRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api/events', eventRoutes);
app.use('/api/attendees', attendeeRoutes);
app.use('/api/tasks', taskRoutes);  

// MongoDB Atlas connection using environment variable
const mongoURI = "mongodb+srv://omcarsawant:Om123@cluster0.9g1mm.mongodb.net/webknot?retryWrites=true&w=majority";  // Using the MongoDB URI from the .env file
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('MongoDB Atlas connection error:', err));

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
