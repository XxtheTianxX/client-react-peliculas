// src/config/axiosConfig.js
import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'http://localhost:4000', 
    headers: {
        'Content-Type': 'application/json'
    }
});
