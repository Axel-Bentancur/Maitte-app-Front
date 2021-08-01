import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import "./components/ProductoComponent/Producto.css";

import Navegation from "./components/Navigation";
import Cliente from "./components/ClienteComponent/Cliente";
import CreatePedido from "./components/PedidosComponent/CreatePedido";
import Producto from "./components/ProductoComponent/Producto";
import Pedidos from "./components/PedidosComponent/Pedidos";

function App() {
  return (
    <Router>
      <Navegation />
      <div className="container p-4">
        <Route path="/" exact component={Pedidos} />
        <Route path="/clientes" component={Cliente} />
        <Route path="/pedidos" component={CreatePedido} />
        <Route path="/productos" component={Producto} />
      </div>
    </Router>
  );
}

export default App;
