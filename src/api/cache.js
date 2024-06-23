import axios from "axios";

const API_URL = "http://localhost:8080";



export const getCache = async (key) => {
  try {
    const response = await axios.get(`${API_URL}/cache/${key}`);
    return response.data.value;
  } catch (error) {
    throw error;
  }
};

export const setCache = async (key, value) => {
  try {
    const response = await axios.post(`${API_URL}/cache/${key}`, { value });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCache = async (key) => {
  try {
    const response = await axios.delete(`${API_URL}/cache/${key}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
