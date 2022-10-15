const { Router } = require("express");
const router = Router();
const { VerAsignatura } = require("../controllers/prof.controller");


//Ver asignaturas que hace el profesor

router.post("/profesor/asignatura", VerAsignatura);

module.exports = router;

