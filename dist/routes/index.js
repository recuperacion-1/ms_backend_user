"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("./routes.salon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ruta = (0, _express.Router)();
ruta.get("/", function (req, res) {
  res.send("¡Bienvenido a la aplicación!");
});
ruta.use("/api", _routes["default"]);
var _default = exports["default"] = ruta;