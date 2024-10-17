// src/services/mediaService.js

import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

// Crear una nueva película o serie
const crearMedia = (media) => {
    const data = {
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagen: media.imagen,
        añoEstreno: media.añoEstreno,
        genero: media.genero,
        director: media.director,
        productora: media.productora,
        tipo: media.tipo
    };
    return axiosConfig.post('/media', data, { headers });
};

// Obtener todos los medios
const obtenerMedias = () => {
    return axiosConfig.get('/media', { headers });
};

// Obtener un medio por ID
const obtenerMediaPorID = (id) => {
    return axiosConfig.get(`/media/${id}`, { headers });
};

// Actualizar un medio
const editarMediaPorID = (media, id) => {
    const data = {
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagen: media.imagen,
        añoEstreno: media.añoEstreno,
        genero: media.genero,
        director: media.director,
        productora: media.productora,
        tipo: media.tipo
    };
    return axiosConfig.put(`/media/${id}`, data, { headers });
};

// Eliminar un medio
const eliminarMedia = (id) => {
    return axiosConfig.delete(`/media/${id}`, { headers });
};

export { crearMedia, obtenerMedias, obtenerMediaPorID, editarMediaPorID, eliminarMedia };
