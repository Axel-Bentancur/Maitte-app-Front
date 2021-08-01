import React, { Component } from "react";
import axios from "axios";
import "./Producto.css";

//Componentes:
import ProductoForm from "./ProductoForm";
import ProductoFormUpdate from "./ProductoFormUpdate";
import ProductoFormAdd from "./ProductoFormAdd";
import ListTemplate from "./ListTemplate";

export default class Producto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: [],
      showHideForm: true,
      showHideFormUpdate: false,
      showHideFormAdd: false,
    };
  }

  async componentDidMount() {
    await this.getproductos();
  } /* OK */

  getproductos = async () => {
    const res = await axios.get("http://localhost:5000/api/productos");
    await this.setState({
      productos: res.data,
      showHideForm: true,
      showHideFormUpdate: false,
      showHideFormAdd: false,
    });
  }; /* OK */

  async getProducto(producto_id) {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/productos/" + producto_id
      );
      await this.setState({ productoNombre: res.data.producto, producto_id });
    } catch (error) {
      console.log("Error al obtener el producto");
    }
  } /* OK */

  eliminarProducto = async (id) => {
    await axios.delete("http://localhost:5000/api/productos/" + id);
    this.getproductos();
  }; /* OK */

  eliminarModelo = async (id, modelo_id) => {
    await axios.put("http://localhost:5000/api/productos/modelo/" + id, {
      modelo_id: modelo_id,
    });
    this.getproductos();
  }; /* OK */

  renderFormAdd = async (producto_id) => {
    await this.getProducto(producto_id);
    await this.setState({
      showHideFormAdd: !this.state.showHideFormAdd,
      showHideForm: false,
    });
    if (this.state.showHideFormAdd) {
      this.setState({ showHideFormUpdate: false, showHideForm: false });
    } else {
      this.setState({ showHideFormUpdate: false, showHideForm: true });
    }
  }; /* OK */

  renderFormUpdate = async (
    productoNombre,
    modelo,
    precio,
    producto_id,
    modelo_id
  ) => {
    await this.getProducto(producto_id);
    await this.setState({
      productoNombre,
      modelo,
      precio,
      producto_id,
      modelo_id,
      showHideFormUpdate: !this.state.showHideFormUpdate,
      showHideForm: false,
    });
    if (this.state.showHideFormUpdate) {
      this.setState({ showHideFormAdd: false, showHideForm: false });
    } else {
      this.setState({ showHideFormAdd: false, showHideForm: true });
    }
  }; /* OK */

  async componentWillUnmount() {}

  render() {
    const {
      productos,
      productoNombre,
      modelo,
      modelo_id,
      precio,
      producto_id,
      showHideForm,
      showHideFormUpdate,
      showHideFormAdd,
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          {showHideForm && <ProductoForm actualize={this.getproductos} />}
          {showHideFormUpdate && (
            <ProductoFormUpdate
              actualize={this.getproductos}
              productoNombre={productoNombre}
              modelo={modelo}
              modelo_id={modelo_id}
              precio={precio}
              producto_id={producto_id}
            />
          )}
          {showHideFormAdd && (
            <ProductoFormAdd
              actualize={this.getproductos}
              productoNombre={productoNombre}
              producto_id={producto_id}
            />
          )}
        </div>
        <div className="col-md-6">
          <ListTemplate
            productos={productos}
            clickAdd={this.renderFormAdd}
            clickDelProd={this.eliminarProducto}
            clickModelUp={this.renderFormUpdate}
            clickDelModelo={this.eliminarModelo}
          />
        </div>
      </div>
    );
  }
}
