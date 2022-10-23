const Profesor = require("../models/profesor.model");
const Alumno = require("../models/alumno.model");
const bcrypt = require("bcrypt");
//LOGIN
const AlumnoLogin = async (req, res) => {
  try {
    const alum = await Alumno.findOne({
      rut: req.body.rut,
    });
    res.status(200).json(alum);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const ProfesorLogin = async (req, res) => {
  try {
    const prof = await Profesor.findOne({
      correo: req.body.correo.toLowerCase(),
    });
    if (prof) {
      if (await bcrypt.compare(req.body.contrasena, prof.contrasena)) {
        return res.status(200).json(prof);
      } else {
        return res.send("Contraseña ingresada es incorrecta."); //En caso de no coincidir contrasena, envia este mensaje para que aparezca en el frontend
      }
    }
    return res.send("Correo no encontrado en el sistema"); //En caso de no encontrar el correo, envia este mensaje para el frontend
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  AlumnoLogin,
  ProfesorLogin,
};
