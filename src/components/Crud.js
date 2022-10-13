import React, { useEffect, useState } from 'react';
import { db } from "./../firebase";
import { collection, onSnapshot, addDoc, doc, deleteDoc} from 'firebase/firestore';


import Form from './Form';
import List from './List';

const initialData = {
  nombre: '',
  apellido: '',
  edad: '',
  carrera: '',
  semestre: ''
}

const Crud = props => {
  const [listaEstudiantes, setListaEstudiantes] = useState([])
  const [data, setData] = useState(initialData)

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

  const create = async (e) => {
    e.preventDefault()

    try {
      
      await addDoc(collection(db,'estudiantes'),{
                
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        carrera: data.carrera,
        semestre: data.semestre
    })

    setData(initialData)

    e.target.reset()

    } catch (error) {
      console.log(error);
    }
  }

  const eliminar = async id => {
    try{
        await deleteDoc(doc(db,'estudiantes',id))
        const newList = listaEstudiantes.filter(estudiante => estudiante.id !== id)
        setListaEstudiantes(newList)
    }catch(error){
        console.log(error)
    }
}


  return (<>
    <h1 className="text-center mt-5">CRUD básico con React</h1>
    <hr/>

    <div className="row" style={{maxWidth: '100%'}}>
    <List listaEstudiantes={listaEstudiantes} eliminar={eliminar}/>
    <Form data={data} setData={setData} create={create}/>
    </div>
    
  </>);
}


export default Crud