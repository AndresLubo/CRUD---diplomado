import React from "react";

const List = ({ listaEstudiantes, setListaEstudiantes }) => {
  return (
    <>
      <div className="col-6 p-3">
        <h4 className="text-center">Lista de estudiantes</h4>
        <ul className="list-group">
          {listaEstudiantes.map((estudiante) => (
            <li className="list-group-item" key={estudiante.id}>
              <span className="lead">{estudiante.nombre} - {estudiante.carrera}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
