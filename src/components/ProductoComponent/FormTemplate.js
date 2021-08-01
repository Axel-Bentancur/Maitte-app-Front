import React from "react";

export default function FormTemplate(props) {
  return (
    <div className="container">
      <div className="header">
        <h2>{props.title}</h2>
      </div>
      <form className="form" onSubmit={props.submit}>
        <div className="form-group">
          <label className="col-form-label" htmlFor="AddProducto">
            Producto
          </label>
          <input
            type="text"
            className="form-control"
            id="AddProducto"
            name="productoNombre"
            value={props.productValue}
            onChange={props.handle}
            disabled={props.disabled}
          />
          {props.validateNombre}
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="AddModelo">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            id="AddModelo"
            name="modelo"
            value={props.modeloValue}
            onChange={props.handle}
          />
          {props.validateModelo}
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="AddPrecio">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="AddPrecio"
            name="precio"
            value={props.precioValue}
            onChange={props.handle}
          />
          {props.validatePrecio}
        </div>
        <button type="submit" className="btn btn-outline-primary button">
          {props.button}
        </button>
      </form>
    </div>
  );
}
