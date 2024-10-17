// src/components/media/MediaList.js

import React, { useEffect, useState } from 'react';
import { obtenerMedias, eliminarMedia } from '../../services/MediaService'; // Ajusta la ruta

const MediaList = () => {
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        const fetchMedias = async () => {
            try {
                const response = await obtenerMedias();
                setMedias(response.data);
            } catch (error) {
                console.error('Error al obtener medios:', error);
            }
        };
        fetchMedias();
    }, []);

    const handleDelete = async (id) => {
        try {
            await eliminarMedia(id);
            setMedias(medias.filter(media => media._id !== id));
        } catch (error) {
            console.error('Error al eliminar el medio:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Medios</h2>
            <ul>
                {medias.map(media => (
                    <li key={media._id}>
                        {media.titulo}
                        <button onClick={() => handleDelete(media._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MediaList;
