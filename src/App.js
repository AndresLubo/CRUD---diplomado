import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (<>
    <h1 className="text-center mt-5">CRUD básico con React</h1>
    <hr/>

    <div className="row" style={{maxWidth: '100%'}}>
    <List/>
    <Form/>
    </div>
    
  </>);
}

export default App;
