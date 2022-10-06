const { Router } = require("express");
const router = Router();
const { AlumnoLogin } = require("../controllers/auth.controller");
const { ProfesorLogin } = require("../controllers/auth.controller");

//INGRESO USUARIO
router.post("/alumno/ingreso", AlumnoLogin);
router.post("/profesor/ingreso", ProfesorLogin);

module.exports = router;
