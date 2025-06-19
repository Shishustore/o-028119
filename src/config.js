// This will be replaced by your Render URL during deployment
const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://your-live-backend-url.onrender.com' 
    : 'http://localhost:3001';

export default API_URL;
