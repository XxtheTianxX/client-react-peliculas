import React, { useEffect, useState } from 'react';
import { obtenerDirectores } from '../../services/DirectoresService'; // Asegúrate de que el nombre de la función y la ruta sean correctos

export default function Directores() {
  const [directores, setDirectores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDirectores = async () => {
      try {
        const response = await obtenerDirectores(); // Llama a tu función de servicio
        setDirectores(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchDirectores();
  }, []); // El array vacío asegura que se ejecute solo una vez

  if (cargando) return <div className="text-center">Cargando...</div>;
  if (error) return <div className="alert alert-danger text-center">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center">Directores</h1>
      {directores.length === 0 ? (
        <p className="text-center">No hay directores disponibles.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {directores.map((director) => (
              <tr key={director._id}>
                <td>{director.name}</td>
                <td>{director.status.toLowerCase() === 'active' || director.status.toLowerCase() === 'activo' ? 'Activo' : 'Inactivo'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

