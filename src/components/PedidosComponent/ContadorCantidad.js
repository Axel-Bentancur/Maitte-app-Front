import React from "react";

export default function ContadorCantidad(props) {
  const cantidad = 0;
  function increase() {
    console.log(cantidad);
    const total = cantidad + 1;
    console.log(total);
  }

  function decrease() {
    console.log("decrease");
  }
  return (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-less"
            onClick={(e) => decrease()}
          >
            -
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Cantidad"
          name="cantidad"
          value={cantidad}
          onChange={() => {
            props.handleChange();
          }}
          disabled
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-add"
            onClick={(e) => increase()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
