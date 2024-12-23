import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/attendees';

export const getAttendees = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching attendees:", error);
  }
};

export const removeAttendee = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error("Error removing attendee:", error);
  }
};

export const addAttendee = async (attendee) => {
  try {
    const response = await axios.post(apiUrl, attendee);
    return response.data;
  } catch (error) {
    console.error("Error adding attendee:", error);
  }
};
