const { Router } = require("express");
const router = Router();
const {
  CreateEvento,
  VerAsignaturas,
  VerCursosAsignaturas,
  VerAlumnosCurso,
  AsignarNotaAlumno,
  ObtenerEventos,
  EliminarEvento,
  EliminarNotaAlumno,
} = require("../controllers/prof.controller");

//Ver asignaturas que hace el profesor
router.post("/verAsignaturas", VerAsignaturas);
router.post("/verCursoAsignaturas", VerCursosAsignaturas);
router.post("/verAlumnosCurso", VerAlumnosCurso);
router.post("/asignarNotaAlumno", AsignarNotaAlumno);
router.post("/ingresarEvento", CreateEvento);
router.post("/ObtenerEventos", ObtenerEventos);
router.post("/eliminarEvento", EliminarEvento);
router.delete("/eliminarNotaAlumno", EliminarNotaAlumno);
module.exports = router;
