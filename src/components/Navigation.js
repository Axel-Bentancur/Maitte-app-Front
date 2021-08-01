import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MaitteApp
          </Link>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    AGREGAR PEDIDO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/clientes">
                    CLIENTES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos">
                    PRODUCTOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-info mr-2" type="submit">
          Salir
        </button>
      </nav>
    );
  }
}
