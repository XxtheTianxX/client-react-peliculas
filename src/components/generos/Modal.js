import React from 'react';

export default function Modal({ genero, handleChange, guardar, clearGenero }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Género</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={guardar}> {/* Aquí agregamos el onSubmit */}
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="recipient-name"
                  name='name' // Asegúrate que coincida con 'genero.name'
                  onChange={handleChange}
                  value={genero.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Descripción:</label>
                <textarea 
                  className="form-control" 
                  id="message-text"
                  name='description' 
                  onChange={handleChange}
                  value={genero.description}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearGenero}>Cerrar</button>
                <button type="submit" className="btn btn-primary">Enviar</button> {/* Cambiamos de onClick a type="submit" */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
