// This file correctly reads the API URL provided by Netlify.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default API_URL;
