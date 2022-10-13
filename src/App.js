import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [listaEstudiantes, setListaEstudiantes] = useState([])

  return (<>
    <h1 className="text-center mt-5">CRUD básico con React</h1>
    <hr/>

    <div className="row" style={{maxWidth: '100%'}}>
    <List setListaEstudiantes={setListaEstudiantes} listaEstudiantes={listaEstudiantes}/>
    <Form setListaEstudiantes={setListaEstudiantes} listaEstudiantes={listaEstudiantes}/>
    </div>
    
  </>);
}

export default App;
