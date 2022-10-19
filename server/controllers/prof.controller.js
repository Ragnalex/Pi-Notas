const Asignatura = require("../models/asignatura.model");
const Profesor = require("../models/profesor.model");
const Curso = require("../models/curso.model");

const VerAsignaturas = async (req, res) => {
  try {
    const prof = await Profesor.findOne({ rut: req.body.rut }).populate(
      "asignaturas"
    );
    res.status(200).json(prof.asignaturas);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const VerCursos = async (req, res) => {
  try {
    const prof = await Profesor.findOne({ rut: req.body.rut }).populate(
      "cursos"
    );
    res.status(200).json(prof.cursos);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  VerAsignaturas,
  VerCursos,
};
