const Curso = require("../models/curso.model");

// VerAsignaruturas ()
// Busca el curso y retorna las asignaturas con todos sus datos
// returns 200 [asignaturas]
// returns 500 []
const VerAsignaturas = async (req,res) => {
    try {
      const curso = await Curso.findById(req.body.idCurso).populate("asignaturas");
      res.status(200).json(curso.asignaturas);
    } catch (err) {
      res.status(500).json(err);
    }
}

const ObtenerCurso = async (req,res) => {
  try {
    const curso = await Curso.findOne({_id: req.body.id});
    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
    VerAsignaturas,
    ObtenerCurso,
  };