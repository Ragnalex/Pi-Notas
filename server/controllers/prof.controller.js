const Evento = require("../models/evento.model");
const Curso = require("../models/curso.model");
const Profesor = require("../models/profesor.model");
const Alumno = require("../models/alumno.model");

const VerAsignaturas = async (req, res) => {
  try {
    const prof = await Profesor.findOne({ rut: req.body.rut }).populate(
      "asignaturas.asignatura"
    );
    res.status(200).json(prof.asignaturas);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const VerCursosAsignaturas = async (req, res) => {
  try {
    const prof = await Profesor.findOne({ rut: req.body.rut });
    const cursos = await Curso.find({ id: prof.asignaturas.cursos });
    res.status(200).json(cursos);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const VerAlumnosCurso = async (req, res) => {
  try {
    const alumnos = await Alumno.find({ id: req.body.idCurso });
    res.status(200).json(alumnos);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const AsignarNotaAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findOne({ rut: req.body.rut });
    if (alumno) {
      alumno.notas.push({
        asignatura: req.body.idAsignatura,
        calificacion: req.body.calificacion,
        numero: req.body.numero,
        ponderacion: req.body.ponderacion,
      });
      await alumno.save();
    }
    res.status(200).json(alumno);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const CreateEvento = async (req, res) => {
  try {
    const newEvento = new Evento({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
    });
    await newEvento.save();
    const curso = await Curso.findById(req.body.idCurso);
    curso.calendario.push(newEvento.id);
    await curso.save();
    res.status(200).json(newEvento);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  VerAsignaturas,
  VerCursosAsignaturas,
  VerAlumnosCurso,
  AsignarNotaAlumno,
  CreateEvento,
};
