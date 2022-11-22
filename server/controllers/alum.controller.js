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
      console.log(err)
      res.status(500).json(err);
    }
}

module.exports = {
    VerAsignaturas,
  };