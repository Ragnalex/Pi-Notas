const Curso = require("../models/curso.model");


const VerAsignaturas = async (req,res) => {
    try {
      console.log(req.body.idCurso)
      const curso = await Curso.findById(req.body.idCurso).populate("asignaturas");
      res.status(200).json(curso.asignaturas);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
}

module.exports = {
    VerAsignaturas,
  };