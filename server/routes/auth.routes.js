const { Router } = require("express");
const router = Router();
const { AlumnoLogin } = require("../controllers/auth.controller");

//INGRESO USUARIO
router.post("/usuario/ingreso", AlumnoLogin);

module.exports = router;
