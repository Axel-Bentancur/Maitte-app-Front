import React from "react";

export default function FormTemplate(props) {
  return (
    <div className="container">
      <div className="header">
        <h2>{props.title}</h2>
      </div>
      <form className="form" onSubmit={props.submit}>
        <div className="form-group">
          <label className="col-form-label" htmlFor="AddCliente">
            Cliente
          </label>
          <input
            type="text"
            className="form-control"
            id="AddCliente"
            name="clienteNombre"
            value={props.clienteValue}
            onChange={props.handle}
          />
          {props.validateNombre}
        </div>
        <button type="submit" className="btn btn-outline-primary button">
          {props.button}
        </button>
      </form>
    </div>
  );
}
