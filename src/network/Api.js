// api.js
import axios from 'axios';


const token = localStorage.getItem("token")
console.log(token)
export const Api = axios.create({
  baseURL: import.meta.env.VITE_SOME_KEY || 'http://localhost:3500', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    "token":token
  },
});

 
