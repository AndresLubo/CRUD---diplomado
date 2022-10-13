import React from "react";

const List = ({ listaEstudiantes, eliminar}) => {




  return (
    <>
      <div className="col-6 p-3">
        <h4 className="text-center">Lista de estudiantes</h4>
        <div className="accordion" id="accordionExample">
          {listaEstudiantes.map((estudiante, index) => (
            <div className="accordion-item" key={estudiante.id}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {`${estudiante.nombre} ${estudiante.apellido}`}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p><b>Nombre: </b>{estudiante.nombre} {estudiante.apellido}</p>
                  <p><b>Edad: </b>{estudiante.edad} años</p>
                  <p><b>Carrera: </b>{estudiante.carrera}</p>
                  <p><b>Semestre en curso: </b>{estudiante.semestre}</p>
                  <button className="btn btn-danger" onClick={() => eliminar(estudiante.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
