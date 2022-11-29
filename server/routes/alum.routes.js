const { Router } = require("express");
const router = Router();
const {
    VerAsignaturas,
    ObtenerCurso,
} = require("../controllers/alum.controller");

router.post("/verAsignaturas", VerAsignaturas);
router.post("/ObtenerCurso", ObtenerCurso);

module.exports = router;