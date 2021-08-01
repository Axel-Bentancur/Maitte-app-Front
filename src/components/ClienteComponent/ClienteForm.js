import React, { Component } from "react";
import axios from "axios";

//Componentes:
import { toUpper } from "../FuncionesGenerales";
import FormTemplate from "./FormTemplate";

export default class ClienteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  actualize() {
    this.props.actualize();
  } /*OK*/

  async cleanState() {
    await this.setState({ clienteNombre: "" });
  } /*OK*/

  async crearCliente() {
    const { clienteNombre } = this.state;
    const clienteNombreClean = toUpper(clienteNombre.trim());
    await axios.post("http://localhost:5000/api/clientes", {
      clienteNombre: clienteNombreClean,
    });
    this.actualize();
    this.cleanState();
  } /*OK*/

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; /*OK */

  handleSubmit = (e) => {
    e.preventDefault();
    this.crearCliente();
  }; /*OK*/

  render() {
    const { clienteNombre } = this.state;
    return (
      <FormTemplate
        title={"Crear Cliente:"}
        submit={this.handleSubmit}
        clienteValue={clienteNombre || ""}
        handle={this.handleChange}
        button={"AGREGAR"}
      />
    );
  }
}
