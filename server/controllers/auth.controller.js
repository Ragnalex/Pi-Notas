const Profesor = require("../models/profesor.model");
const Alumno = require("../models/alumno.model");
const Administrador = require("../models/admin.model");
const bcrypt = require("bcrypt");
//LOGIN

const AdminLogin = async (req, res) => {
  try {
    const admin = await Administrador.findOne({
      correo: req.body.correo.toLowerCase(),
    });
    if (!admin) {
      return res.send("Correo no encontrado en el sistema");
    }
    if (admin.contrasena === "-1") {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.contrasena, salt);
      admin.contrasena = hashedPass;
      await admin.save();
    }
    if (await bcrypt.compare(req.body.contrasena, admin.contrasena)) {
      return res.status(200).json(admin);
    } else {
      return res.send("Contraseña ingresada es incorrecta."); //En caso de no coincidir contrasena, envia este mensaje para que aparezca en el frontend
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

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
  AdminLogin,
};
