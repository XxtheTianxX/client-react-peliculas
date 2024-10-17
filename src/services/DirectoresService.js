// src/services/DirectoresService.js
import { axiosConfig } from "../config/axiosConfig"; // Asegúrate de que la ruta sea correcta

const headers = {
    'Content-Type': 'application/json'
};

const obtenerDirectores = async () => {
    try {
        const response = await axiosConfig.get('/director', { headers });
        console.log(response.data); // Agrega este log para verificar qué datos estás obteniendo
        return response;
    } catch (error) {
        console.error("Error obteniendo directores:", error);
        throw error;
    }
};


const crearDirector = (director) => {
    return axiosConfig.post('/director', director, { headers });
};

const editarDirectorPorID = (director, id) => {
    return axiosConfig.put(`/director/${id}`, director, { headers });
};

const obtenerDirectorPorID = (id) => {
    return axiosConfig.get(`/director/${id}`, { headers });
};

export { obtenerDirectores, crearDirector, editarDirectorPorID, obtenerDirectorPorID };
