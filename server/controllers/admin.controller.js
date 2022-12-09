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
      curso: req.body.curso,
    });
    await newAlumno.save();
    res.status(201).json(newAlumno);
  } catch (err) {
    res.status(500).json(err);
  }
};
const CreateProfesor = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(_req.body.contrasena, salt);
    const newProfesor = new Profesor({
      rut: req.body.rut,
      pnombre: req.body.pnombre,
      snombre: req.body.snombre,
      apellidop: req.body.apellidop,
      apellidom: req.body.apellidom,
      correo: req.body.correo.toLowerCase(),
      contrasena: hashedPass,
      jefatura: req.body.jefatura,
      asignaturas: req.body.asignaturas,
    });
    await newProfesor.save();
    res.status(201).json(newProfesor);
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
    res.status(201).json(newAsignatura);
  } catch (err) {
    res.status(500).json(err);
  }
};

const CreateCurso = async (req, res) => {
  try {
    const newCurso = new Curso({
      nombre: req.body.nombre,
      paralelo: req.body.paralelo,
      año: req.body.año,
      asignaturas: req.body.asignaturas,
    });
    await newCurso.save();
    res.status(201).send("Curso creado exitosamente");
  } catch (err) {
    res.status(500).json(err);
  }
};

const AsignarRamoProfesor = async (req, res) => {
  try {
    const prof = await Profesor.findOne({
      rut: req.body.rut
    });
    if (prof) {
      prof.asignaturas.push({asignatura :req.body.idAsignatura,cursos: req.body.idCurso});
      await prof.save();
    }
    res.status(200).json(prof);
  } catch (err) {
    res.status(500).json(err);
  }
};
const AsignarProfJefe = async (req,res) => {
  try {
    const prof = await Profesor.findOne({rut: req.body.rut});
    prof.jefatura = req.body.idCurso;
    await prof.save();
    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
}
const AsignarAlumnoCurso = async(req,res) => {
  try {
    const alum = await Alumno.findOne({rut: req.body.rut});
    alum.curso = req.body.idCurso;
    await alum.save();
    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
}
const VerAsignaturasCurso = async (req, res) => {
  try {
    const curso = await Curso.findById(req.body.idCurso).populate(
      "asignaturas"
    );
    res.status(200).json(curso.asignaturas);
  } catch (err) {
    res.status(500).json(err);
  }
};

const VerAsignaturas = async (req, res) => {
  //manda todas las asignaturas del colegio
  try {
    const asignaturas = await Asignatura.find({});
    res.status(200).json(asignaturas);
  } catch (err) {
    res.status(500).json(err);
  }
};

const VerCursos = async (req, res) => {
  //Manda todos los cursos del colegio
  try {
    const cursos = await Curso.find({});
    res.status(200).json(cursos);
  } catch (err) {
    res.status(500).json(err);
  }
};

const NuevaAsignaturaCurso = async (req,res) => {
  try {
    const curso = await Curso.findOne({_id: req.body.idCurso});
    console.log(curso);
    curso.asignaturas.push(req.body.idAsignatura);
    await curso.save();
    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
}

const VerEstudiantes = async (req, res) => {
  //Manda todas los estudiantes del colegio
  try {
    const estudiantes = await Alumno.find({});
    res.status(200).json(estudiantes);
  } catch (err) {
    res.status(500).json(err);
  }
};

const VerProfesores = async (req, res) => {
  //Manda todas los profesores del colegio
  try {
    const profesores = await Profesor.find({});
    res.status(200).json(profesores);
  } catch (err) {
    res.status(500).json(err);
  }
};

const EliminarAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.deleteOne({ _id: req.body.id });
    res.status(200).json(alumno);
  } catch (err) {
    res.status(500).json(err);
  }
};

const EliminarProfesor = async (req, res) => {
  try {
    const profesores = await Profesor.deleteOne({ _id: req.body.id });
    res.status(200).json(profesores);
  } catch (err) {
    res.status(500).json(err);
  }
};

const EliminarAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignatura.deleteOne({ _id: req.body.id });
    await Profesor.updateMany(
      {},
      { $pull: { asignaturas: { asignatura: req.body.id } } }
    );
    await Curso.updateMany({}, { $pull: { asignaturas: req.body.id } });
    res.status(200).json(asignatura);
  } catch (err) {
    res.status(500).json(err);
  }
};

const EliminarCurso = async (req, res) => {
  try {
    const curso = await Curso.deleteOne({ _id: req.body.id });
    await Profesor.updateOne(
      { jefatura: req.body.id },
      { $unset: { jefatura } }
    );
    await Alumno.updateMany({ curso: req.body.id }, { $unset: { curso: "" } });
    res.status(200).json(curso);
  } catch (err) {
    res.status(500).json(err);
  }
};
const ObtenerProfJefe = async (req, res) => {
  try {
    const profesor = await Profesor.findOne({
      jefatura: req.body.idcurso,
    });
    res.status(200).json(profesor);
  } catch (error) {
    res.status(500).json(error);
  }
};

const ObtenerProfesorCurso = async (req, res) => {
  try {
    const profesores = await Profesor.find({
      "asignaturas.cursos": req.body.idCurso,
    });
    res.status(200).json(profesores);
  } catch (error) {
    res.status(500).json(error);
  }
};

const modificarAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findOne({
      rut: req.body.rut,
    });
      alumno.pnombre = req.body.pnombre;
      alumno.snombre = req.body.snombre;
      alumno.apellidop = req.body.apellidop;
      alumno.apellidom = req.body.apellidom;
      await alumno.save();
    res.status(200).json(alumno);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  CreateAlumno,
  CreateProfesor,
  CreateAsignatura,
  CreateCurso,
  AsignarRamoProfesor,
  AsignarProfJefe,
  AsignarAlumnoCurso,
  NuevaAsignaturaCurso,
  VerAsignaturasCurso,
  VerAsignaturas,
  VerCursos,
  VerEstudiantes,
  VerProfesores,
  EliminarAlumno,
  EliminarProfesor,
  EliminarAsignatura,
  EliminarCurso,
  ObtenerProfJefe,
  ObtenerProfesorCurso,
  modificarAlumno,
};
