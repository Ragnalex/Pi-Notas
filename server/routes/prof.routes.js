const { Router } = require("express");
const router = Router();
const { VerAsignaturas, VerCursos} = require("../controllers/prof.controller");


//Ver asignaturas que hace el profesor

router.post("/asignatura", VerAsignaturas);
router.post("/asignatura/cursos", VerCursos);

module.exports = router;

