const express = require("express");

// SE IMPORTA EL CONTROLADOR DE LAS RUTAS PERTENECIENTES AL LOGIN
const loginController = require("./login.controller");

// FUNCION PARA ADMINISTRAR TODAS LOS ROUTERS DE LA APLICACIÓN
function routerApi(app) {

  // TODAS LAS PETICIONES QUE SE RECIBAN POOR LA RUTA '/LOGIN' SERÁN CONTROLADAS POR EL LOGINCONTROLLER
  app.use("/login", loginController);
}

module.exports = routerApi;
