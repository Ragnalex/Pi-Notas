const Usuario = require("../models/usuario.model");
const Profesor = require("../models/profesor.model");
const Alumno = require("../models/alumno.model");
const encrypt = require("../controllers/crypt.controller");


const CreateUser = async (req, res) => {
  try {
    const newUser = new Usuario({
      rut: req.body.rut,
      pnombre: req.body.pnombre,
      snombre: req.body.snombre,
      apellidop: req.body.apellidop,
      apellidom: req.body.apellidom,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const CreateProfesor = async (req, res) => {
    try {
      const newProfesor = new Profesor({
        correo: req.body.correo,
        contraseña: encrypt(req.body.contraseña),
      });
      const profesor = await newProfesor.save();
      //const usuario = await Usuario.findOne({rut: req.body.rut})
      //usuario.profesor = profesor;
      res.status(200).json(profesor);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  module.exports ={
    CreateUser,
    CreateProfesor,
  };
