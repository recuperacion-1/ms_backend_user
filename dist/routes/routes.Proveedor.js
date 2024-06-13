"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controler = require("../controller/controler.proveedor");
var rutaProveedor = (0, _express.Router)();
rutaProveedor.get("/proveedor/:id", _controler.metodos.mostrarproveedor);
rutaProveedor.get("/proveedor", _controler.metodos.listarproveedor);
rutaProveedor.post("/proveedor", _controler.metodos.insertarproveedor);
rutaProveedor.put("/proveedor", _controler.metodos.actualizarproveedor);
rutaProveedor["delete"]("/proveedor", _controler.metodos.eliminarproveedor);
var _default = exports["default"] = rutaProveedor;