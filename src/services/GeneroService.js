import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

const crearGenero = (genero) => {
    const data = {
        name: genero.name, 
        description: genero.description 
    };
    return axiosConfig.post('/genres', data, {
        headers: headers
    });
};

const obtenerGeneros = () => {
    return axiosConfig.get('/genres', {
        headers: headers
    });
};

const editarGeneroPorID = (genero, id) => {
    const data = {
        name: genero.name, // Asegúrate de que use 'name'
        description: genero.description // Asegúrate de que use 'description'
    };
    return axiosConfig.put(`/genres/${id}`, data, {
        headers: headers
    });
};

const obtenerGeneroPorID = (id) => {
    return axiosConfig.get(`/genres/${id}`, {
        headers: headers
    });
};

export {
    crearGenero,
    obtenerGeneros,
    editarGeneroPorID,
    obtenerGeneroPorID
};
