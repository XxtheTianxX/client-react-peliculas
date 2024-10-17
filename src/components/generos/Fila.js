import React from 'react'

export default function Fila({genero, index}) {
    return (
        <tr key={genero._id}>
            <th scope="row">{index + 1}</th>
            <td>{genero.name}</td>
            <td>{genero.description}</td>
            <td>{genero.status ? 'Activo' : 'Inactivo'}</td>
            <td>{genero.createdAt}</td>
            <td><button type="button" class="btn btn-outline-success">Editar</button></td>
        </tr>
    )
}
