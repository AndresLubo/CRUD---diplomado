import React from "react";

const Form = ({ data, setData, create }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {

    if(data.nombre === '' || data.apellido === '' || data.edad === '' || data.carrera === '' || data.semestre === ''){
      alert('Debe rellenar todos los campos.')
      return
    }

    if(parseInt(data.nombre) || parseInt(data.apellido) || parseInt(data.carrera)){
      alert('Ha ingresado valores incorrectos, vuelva a intentar')
      return
    }

    if(!parseInt(data.edad)){
      alert('La edad ingresada es incorrecta')
    }


    create(e)
  }

  return (
    <>
      <div className="col-6 p-3">
        <h4 className="text-center">Agregar estudiante</h4>
        <form className="col-12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
              type="text"
              className="form-control m-1"
              name="nombre"
              placeholder="Nombre"
              value={data.nombre}
              onChange={handleChange}
            />
            </div>
            <div className="col-6">
            <input
              type="text"
              className="form-control m-1"
              name="apellido"
              placeholder="Apellido"
              value={data.apellido}
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
              type="text"
              className="form-control m-1"
              name="edad"
              placeholder="Edad"
              value={data.edad}
              onChange={handleChange}
            />
            </div>
            <div className="col-6">
            <input
              type="text"
              className="form-control m-1"
              name="carrera"
              placeholder="Carrera"
              value={data.carrera}
              onChange={handleChange}
            />
            </div>
          </div>

          <div className="row">
            <div className="col-12 p-3">
              <label htmlFor="semestre">Semestre:</label>
              <select className="form-control" name="semestre" id="semestre" onChange={handleChange}>
                <option value="" select="true">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          
          
          <button type="submit" className="btn btn-primary btn-large m-1">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
