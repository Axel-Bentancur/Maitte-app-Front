import React, { Component } from "react";
import axios from "axios";

//Componentes:
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

export default class Pedidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: [],
      productos: [],
    };
  }

  obtenerInfo = async () => {
    const clientes = await axios.get("http://localhost:5000/api/clientes");
    const productos = await axios.get("http://localhost:5000/api/productos");
    await this.setState({
      clientes: clientes.data,
      productos: productos.data,
    });
  };

  componentDidMount = async () => {
    await this.obtenerInfo();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6 "></div>
      </div>
    );
  }
}
