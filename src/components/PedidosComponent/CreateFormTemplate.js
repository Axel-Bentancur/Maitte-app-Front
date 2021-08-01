import React from "react";
import "../ProductoComponent/Producto.css";
import "./Pedidos.css";
import ContadorCantidad from "./ContadorCantidad";

export default function CreateFormTemplate(props) {
  const { productos } = props;
  return (
    <div className="container">
      {/* <div className="header">
        <h2>{props.title}</h2>
      </div> */}
      <form className="form" onSubmit={props.submit}>
        {/* <div className="form-group">
          <label className="col-form-label" htmlFor="AddProducto">
            Cliente
          </label>
          <select
            className="form-control"
            id="exampleSelect1"
            name="clienteNombre"
            onChange={(e) => {
              props.handleChange(e);
            }}
          >
            <option defaultValue>Elegir..</option>
            {clientes.map((cliente, idx) => (
              <option key={idx} value={cliente.clienteNombre}>
                {cliente.clienteNombre}
              </option>
            ))}
          </select>
        </div> */}
        <div className="form-group">
          <label className="col-form-label" htmlFor="AddProducto">
            Productos
          </label>
          {productos.map((items, idx) => (
            <div className="list-group" key={idx}>
              <span className="list-group-item list-group-item-action disabled active">
                <h5>{items.producto}</h5>
              </span>
              {items.modelos.map((modelo, idx) => (
                <div
                  className="list-group-item list-group-item-action"
                  key={idx}
                >
                  <h6>{modelo.modelo}</h6>
                  <ContadorCantidad
                    id={modelo._id}
                    cantidad={props.cantidad}
                    handleChange={props.handleChange}
                    increase={props.increase}
                    decrease={props.decrease}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </form>
      {/* <button type="submit" className="btn btn-outline-primary button">
        {props.button}
      </button> */}
    </div>
  );
}
