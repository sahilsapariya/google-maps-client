import axios from 'axios';

const API_URL = 'http://localhost:5000/api/edges';

export const fetchEdges = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addEdge = async (edgeData) => {
  const response = await axios.post(API_URL, edgeData);
  return response.data;
};
