const { Router } = require("express");
const router = Router();
const {
  CreateEvento,
  VerAsignaturas,
  VerCursosAsignaturas,
  VerAlumnosCurso,
  AsignarNotaAlumno,
} = require("../controllers/prof.controller");

//Ver asignaturas que hace el profesor
router.get("/verAsignaturas", VerAsignaturas);
router.get("/verCursoAsignaturas", VerCursosAsignaturas);
router.get("/verAlumnosCurso", VerAlumnosCurso);
router.get("/asignarNotaAlumno", AsignarNotaAlumno);
router.post("/ingresarEvento", CreateEvento);
module.exports = router;
