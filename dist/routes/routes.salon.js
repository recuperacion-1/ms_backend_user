"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controler = require("../controller/controler.salon");
// En tu archivo de rutas de salones (routes.salon.js)

var rutasalon = (0, _express.Router)();
rutasalon.get("/salon/:id", _controler.metodos.mostrarsalon);
rutasalon.get("/salon", _controler.metodos.listarsalon);
rutasalon.post("/salon", _controler.metodos.Crearestudiante);
rutasalon.put("/salon/:id", _controler.metodos.actualizarsalon);
rutasalon["delete"]("/salon/:id", _controler.metodos.eliminarsalon);
var _default = exports["default"] = rutasalon;