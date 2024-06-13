"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = exports["default"] = void 0;
var _promise = require("mysql2/promise");
var pool = exports.pool = (0, _promise.createPool)({
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "",
  port: process.env.MYSQLPORT || 3306,
  database: process.env.MYSQLDATABASE || "institucion"
});
var _default = exports["default"] = pool;