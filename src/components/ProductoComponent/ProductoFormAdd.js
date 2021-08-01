import React, { Component } from "react";
import axios from "axios";

//Componentes:
import { toUpper } from "../FuncionesGenerales";
import MessageError from "./MessageError";
import FormTemplate from "./FormTemplate";

export default class ProductoFormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productoNombre: "",
      modelo: "",
      precio: "",
      validate: [true, true, true],
    };
  }

  async componentDidMount() {
    this.setPropsToState();
  } /* OK */

  actualize() {
    this.props.actualize();
  }

  async setPropsToState() {
    const { productoNombre, producto_id } = this.props;
    await this.setState({ productoNombre, producto_id });
  } /* OK */

  async addModelo() {
    const { modelo, precio, producto_id } = this.state;
    const modeloClean = toUpper(modelo.trim());
    const precioClean = Number(precio);
    await axios.put(
      "http://localhost:5000/api/productos/addmodelo/" + producto_id,
      { modelo: modeloClean, precio: precioClean }
    );
    this.actualize();
  } /* OK */

  inputValidation() {
    const { productoNombre, modelo, precio } = this.state;
    let validate = this.state;
    const checkValidate = [productoNombre, modelo, precio];
    validate = [];
    for (let i = 0; i < checkValidate.length; i++) {
      if (checkValidate[i] === "" || checkValidate[i].length < 3) {
        validate.push(false);
      } else {
        validate.push(true);
      }
    }
    return validate;
  } /* OK */

  async setValidations(res) {
    await this.setState({ validate: res });
  } /* OK */

  async validateSubmit() {
    await this.setValidations(this.inputValidation());
    const { validate } = this.state;
    if (validate[0] && validate[1] && validate[2]) {
      this.addModelo();
    }
  } /* OK */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateSubmit();
  }; /* OK */

  async componentWillUnmount() {}

  render() {
    const { productoNombre, modelo, precio, validate } = this.state;
    return (
      <FormTemplate
        title={"Crear Modelo:"}
        handle={this.handleChange}
        productValue={productoNombre || ""}
        disabled={"disabled"}
        modeloValue={modelo || ""}
        precioValue={precio || ""}
        button={"AGREGAR"}
        submit={this.handleSubmit}
        validateNombre={!validate[0] ? <MessageError /> : ""}
        validateModelo={!validate[1] ? <MessageError /> : ""}
        validatePrecio={!validate[2] ? <MessageError /> : ""}
      />
    );
  }
}
