const express = require("express");
const loginController = express.Router();
const LoginService = require("./../services/login.service");

const loginService = new LoginService();

loginController.get("/", async (req, res) => {
    // SE ESPERA LA RESPUESTA DEL LOGINSERVICE
  const users = await loginService.find();
  // SE MUESTRA LA RESPUESRA
  res.json(users);
});

loginController.post("/", async (req, res) => {
    // SE RECIBEN LOS PARAMETROS ENVIADOS EN EL BODY
  const body = req.body;
  // SE ESPERA LA RESPUESTA DEL LOGINSERVICE
  const respuesta = await loginService.findOne(body);
  // SE MUESTRA LA RESPUESTA
  res.json(respuesta);
});

module.exports = loginController;
