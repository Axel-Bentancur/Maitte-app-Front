import React, { Component } from "react";
import axios from "axios";

//Components:
import CreateFormTemplate from "./CreateFormTemplate";

export default class CreatePedido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: [],
      productos: [],
      cantidad: 0,
    };
  }

  obtenerInfo = async () => {
    const clientes = (await axios.get("http://localhost:5000/api/clientes"))
      .data;
    const productos = (await axios.get("http://localhost:5000/api/productos"))
      .data;
    await this.setState({
      clientes,
      productos,
    });
  };

  async componentDidMount() {
    await this.obtenerInfo();
  }

  handleChange = async (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { productos, cantidad } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          {productos.length > 0 ? (
            <CreateFormTemplate
              productos={productos}
              cantidad={cantidad}
              handleChange={this.handleChange}
              increase={this.increase}
              decrease={this.decrease}
            />
          ) : null}
        </div>
        <div className="col-md-6"></div>
      </div>
    );
  }
}
