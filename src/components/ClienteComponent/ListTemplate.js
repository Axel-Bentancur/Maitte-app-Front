import React from "react";

export default function ListTemplate(props) {
  const { clientes } = props;
  return (
    <div className="container">
      <div className="header">
        <h2>Lista de Productos:</h2>
      </div>
      <div className="list-container">
        {clientes.map((cliente) => (
          <div className="card border-secondary mb-3" key={cliente._id}>
            <div className="card-header d-flex justify-content-between">
              <span className="producto-titulo">{cliente.clienteNombre}</span>
              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm mr-2"
                  value={props.clienteValue}
                  onClick={(e) => {
                    props.clickEditCliente(cliente._id);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    props.clickDelCliente(cliente._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
