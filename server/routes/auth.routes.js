const { Router } = require("express");
const router = Router();
const {
  AlumnoLogin,
  AdminLogin,
  ProfesorLogin,
} = require("../controllers/auth.controller");
//INGRESO USUARIO
router.post("/alumno/ingreso", AlumnoLogin);
router.post("/profesor/ingreso", ProfesorLogin);
router.post("/admin/ingreso", AdminLogin);

module.exports = router;
