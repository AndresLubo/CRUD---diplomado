import React, { useEffect, useState } from "react";
import { db } from "./../firebase";
import { collection, onSnapshot, addDoc, doc, deleteDoc} from 'firebase/firestore';

const Form = ({setListaEstudiantes, listaEstudiantes}) => {


  const [data, setData] = useState({
    nombre: '',
    carrera: ''
  })

  useEffect(() => {
    const get = async () => {
      try {
        
        await onSnapshot(collection(db, "estudiantes"), (querySnapshot) => {    
          setListaEstudiantes(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
      } catch (error) {
        console.log(error);
      }
    };


    get()
  }, [])

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  } 



  const create = async (e) => {
    e.preventDefault()

    try {
      
      const datos = await addDoc(collection(db,'estudiantes'),{
                
        nombre: data.nombre,
        carrera: data.carrera
    })

    setData({
      nombre: '',
      carrera: '',
    })

    e.target.reset()

    } catch (error) {
      console.log(error);
    }
  }

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
          <button type="submit" className="btn btn-primary btn-large m-1">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
