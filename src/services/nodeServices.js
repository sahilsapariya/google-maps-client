import axios from 'axios';

const API_URL = 'http://localhost:5000/api/nodes';

export const fetchNodes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addNode = async (nodeData) => {
  const response = await axios.post(API_URL, nodeData);
  return response.data;
};
