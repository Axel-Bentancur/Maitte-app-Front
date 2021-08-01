import React from "react";

export default function ListTemplate(props) {
  const { productos } = props;
  return (
    <div className="container">
      <div className="header">
        <h2>Lista de Productos:</h2>
      </div>
      <div className="list-container">
        {productos.map((producto) => (
          <div className="card border-secondary mb-3" key={producto._id}>
            <div className="card-header d-flex justify-content-between">
              <span className="producto-titulo">{producto.producto}</span>
              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm mr-2"
                  onClick={(e) => {
                    props.clickAdd(producto._id);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    props.clickDelProd(producto._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            {producto.modelos.map((articulo, index) => (
              <div
                className="card-body d-flex justify-content-between"
                key={index}
              >
                <span className="modelos-detalle">{articulo.modelo}</span>
                <span className="modelos-detalle precio">
                  ${articulo.precio}
                </span>
                <div>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm mr-2"
                    onClick={(e) => {
                      props.clickModelUp(
                        producto.producto,
                        articulo.modelo,
                        articulo.precio,
                        producto._id,
                        articulo._id
                      );
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      props.clickDelModelo(
                        producto._id,
                        producto.modelos[index]._id
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
