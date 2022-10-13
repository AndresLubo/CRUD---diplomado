import React from "react";

const Form = ({ data, setData, create }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="col-6 p-3">
        <h4 className="text-center">Agregar estudiante</h4>
        <form className="col-12" onSubmit={create}>
          <input
            type="text"
            className="form-control m-1"
            name="nombre"
            placeholder="Nombre"
            value={data.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control m-1"
            name="carrera"
            placeholder="Carrera"
            value={data.carrera}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-large m-1">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
