const mysql = require("mysql2/promise");

class LoginService {
  constructor() {
    this.table = "usuarios";
    // SE INICIALIZAN LOS DATOS PARA LA CONEXIÓN A LA BASE DE DATOS
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "iefudaciongraciayplenitud",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  // ESTE MÉTODO DEVUELVE TODOS LOS USUARIOS EN LA BASE DE DATOS
  async find() {
    try {
      const [results, fields] = await this.pool.execute(
        `SELECT * FROM ${this.table}`
      );
      return results; // Guardar los datos en una variable
    } catch (err) {
      console.error("Error al realizar la consulta:", err);
      return [];
    }
  }

  // ESTE MÉTODO DEVUELVE UN USUARIO DE LA BASE DE DATOS EN CASO DE ESTAR REGISTRADO
  async findOne(body) {
    try {
      // Se recibe los campos que devuelve la consulta
      const [results, fields] = await this.pool.execute(
        `SELECT * FROM ${this.table} WHERE correo = '${body.correo}' AND contrasena = '${body.contrasena}'`
      );

      /**
       * Si la variable -result está vacía
       * significa que no encontró al usuario
       * por consiguiente se muetra el mensaje de 'Error en la Autenticación'
       * En caso contrario significa que se encontro el usuario
       * y se muestra 'autenticación satisfactoria'
       */
      console.log(results)
      if (results ==  false) {
        return {
          message: "Error en la autenticación",
        };
      } else {
        return {
          message: "Autenticación Satisfactoria",
        };
      }
    } catch (err) {
      console.error("Error al realizar la consulta:", err);
      return [];
    }
  }

  create() {}

  update() {}

  delete() {}
}

module.exports = LoginService;
