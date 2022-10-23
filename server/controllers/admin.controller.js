const Alumno = require("../models/alumno.model");
const Profesor = require("../models/profesor.model");
const Asignatura = require("../models/asignatura.model");
const Curso = require("../models/curso.model");
const bcrypt = require("bcrypt");

//creación de modelos - retorna un json sin referencias//
const CreateAlumno = async (req, res) => {
  try {
    const newAlumno = new Alumno({
      rut: req.body.rut,
      pnombre: req.body.pnombre,
      snombre: req.body.snombre,
      apellidop: req.body.apellidop,
      apellidom: req.body.apellidom,
      curso: req.body.curso
    });
    await newAlumno.save();
    res.status(200).json(newAlumno);
  } catch (err) {
    res.status(500).json(err);
  }
};

const CreateProfesor = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.contrasena, salt);
    const newProfesor = new Profesor({
      rut: req.body.rut,
      pnombre: req.body.pnombre,
      snombre: req.body.snombre,
      apellidop: req.body.apellidop,
      apellidom: req.body.apellidom,
      correo: req.body.correo.toLowerCase(),
      contrasena: hashedPass,
      jefatura: req.body.jefatura,
      asignaturas: req.body.asignaturas
    });
    await newProfesor.save();
    res.status(200).json(newProfesor);
  } catch (err) {
    res.status(500).json(err);
  }
};

const CreateAsignatura = async (req, res) => {
  try {
    const newAsignatura = new Asignatura({
      nombre: req.body.nombre,
    });
    await newAsignatura.save();
    res.status(200).json(newAsignatura);
  } catch (err) {
    res.status(500).json(err);
  }
};

const CreateCurso = async (req, res) => {
  try {
    const newCurso = new Curso({
      nombre: req.body.nombre,
      año: req.body.año,
      asignaturas : req.body.asignaturas
    });
    await newCurso.save();
    res.status(200).json(newCurso);
  } catch (err) {
    res.status(500).json(err);
  }
};


const AsignarRamoProfesor = async (req, res) => {
  //recibe una lista de ids
  try {
    const prof = await Profesor.findOne({
      rut: req.body.rut,
    });
    if (prof) {
      prof.asignaturas = req.body.asignaturas;
      await prof.save();
    }
    res.status(200).json(prof);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  CreateAlumno,
  CreateProfesor,
  CreateAsignatura,
  CreateCurso,
  AsignarRamoProfesor,
};
