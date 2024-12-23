import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventManagementPage from './pages/EventManagementPage';
import AttendeeManagementPage from './pages/AttendeeManagementPage';
import TaskTrackerPage from './pages/TaskTrackerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventManagementPage />} />
        <Route path="/attendees" element={<AttendeeManagementPage />} />
        <Route path="/tasks" element={<TaskTrackerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
