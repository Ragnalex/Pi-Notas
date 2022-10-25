const Curso = require("../models/curso.model");


const VerAsignaturas = async (req,res) => {
    try {
      const curso = await Curso.findById(req.body.idCurso).populate("asignaturas");
      res.status(200).json(curso.asignaturas);
    } catch (err) {
      res.status(500).json(err);
    }
}

module.exports = {
    VerAsignaturas,
  };