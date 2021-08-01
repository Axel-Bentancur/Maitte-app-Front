import React, { Component } from "react";
import axios from "axios";

//Componentes:
import ClienteForm from "./ClienteForm";
import ClienteFormUpdate from "./ClienteFormUpdate";
import ListTemplate from "./ListTemplate";

export default class Cliente extends Component {
  state = {
    clientes: [],
    clienteNombre: "",
    cliente_id: "",
    render: false,
  };

  obtenerClientes = async () => {
    const res = await axios.get("http://localhost:5000/api/clientes");
    this.setState({ clientes: res.data });
  }; /*OK*/

  async componentDidMount() {
    await this.obtenerClientes();
  } /*OK */

  async getCliente(id) {
    const res = await axios.get("http://localhost:5000/api/clientes/" + id);
    await this.setState({
      clienteNombre: res.data.clienteNombre,
      cliente_id: res.data._id,
    });
  } /*OK */

  renderFormUp = async (id) => {
    await this.getCliente(id);
    await this.setState({ render: !this.state.render });
  }; /* OK */

  deleteCliente = async (id) => {
    await axios.delete("http://localhost:5000/api/clientes/" + id);
    this.obtenerClientes();
  }; /*OK*/

  render() {
    const { clientes, clienteNombre, cliente_id, render } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          {render ? (
            <ClienteFormUpdate
              actualize={this.obtenerClientes}
              clienteNombre={clienteNombre}
              cliente_id={cliente_id}
            />
          ) : (
            <ClienteForm actualize={this.obtenerClientes} />
          )}
        </div>
        <div className="col-md-6">
          <ListTemplate
            clientes={clientes}
            clienteValue={clienteNombre || ""}
            clickDelCliente={this.deleteCliente}
            clickEditCliente={this.renderFormUp}
          />
        </div>
      </div>
    );
  }
}
