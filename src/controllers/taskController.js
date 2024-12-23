import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const updateTaskStatus = async (taskId, status) => {
  try {
    await axios.patch(`${apiUrl}/${taskId}`, { status });
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};

export const assignTask = async (taskId, attendeeId) => {
  try {
    await axios.post(`${apiUrl}/assign`, { taskId, attendeeId });
  } catch (error) {
    console.error("Error assigning task:", error);
  }
};
