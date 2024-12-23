import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/events';

export const getEvents = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

export const addEvent = async (event) => {
  try {
    const response = await axios.post(apiUrl, event);
    return response.data;
  } catch (error) {
    console.error("Error adding event:", error);
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error("Error deleting event:", error);
  }
};
