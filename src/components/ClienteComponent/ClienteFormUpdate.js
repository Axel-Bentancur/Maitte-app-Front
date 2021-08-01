import React, { Component } from "react";
import axios from "axios";

//Componentes:
import { toUpper } from "../FuncionesGenerales";
import FormTemplate from "./FormTemplate";

export default class ClienteFormUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clienteNombre: "",
      cliente_id: "",
    };
  }

  componentDidMount() {
    this.setPropsToState();
  }

  actualize() {
    this.props.actualize();
  } /*OK*/

  async setPropsToState() {
    const { clienteNombre, cliente_id } = this.props;
    await this.setState({
      clienteNombre,
      cliente_id,
    });
  } /* OK */

  async cleanState() {
    await this.setState({ clienteNombre: "" });
  } /*OK*/

  EditClientes = async () => {
    const { clienteNombre, cliente_id } = this.state;
    const clienteNombreClean = toUpper(clienteNombre.trim());
    await axios.put("http://localhost:5000/api/clientes/" + cliente_id, {
      clienteNombre: clienteNombreClean,
    });
    this.actualize();
    this.cleanState();
  }; /*OK */

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; /*OK */

  handleSubmit = (e) => {
    e.preventDefault();
    this.EditClientes();
  }; /*OK */

  render() {
    const { clienteNombre } = this.state;
    return (
      <FormTemplate
        title={"Actualizar Cliente:"}
        submit={this.handleSubmit}
        clienteValue={clienteNombre || ""}
        handle={this.handleChange}
        button={"ACTUALIZAR"}
      />
    );
  }
}
