// SE LA DEPENDENCIA DE EXPRESS
const express = require("express");
// SE IMPORTA EL ADMINISTRADOR DE ROUTER DE LA API
const routerApi = require("./controllers");

// SE INCIALIZA LA APLICACION DE EXPRESS
const app = express();
// ASIGNACIÓN DEL PUERTO DONDE FUNCIONARA LA APLICACIÓN
const port = 3000;

// SE USA MIDDLEWARE PARA ENVIAR Y RECIBIR LOS REQUEST EN FORMATO JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

routerApi(app);

app.listen(port, () => {
  console.log("Api funcionando en el puerto " + port);
});
