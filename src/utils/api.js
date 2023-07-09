import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API endpoint

const ApiService = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${endpoint}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  // Add other HTTP methods as needed (e.g., put, delete, etc.)
};

export default ApiService;
