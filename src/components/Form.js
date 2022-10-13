import React from 'react';


const Form = props => {
  return(
    <>
    <div className="col-6 p-3">
      <div class="row">
      <form className="col-12">
        <input type="text" className="form-control m-1" name="email" placeholder="Email"/>
        <input type="text" className="form-control m-1" name="password" placeholder="password"/>
        <button className="btn btn-primary btn-large m-1">Enviar</button>
      </form>
      </div>
    </div>    
    </>
    )
}


export default Form