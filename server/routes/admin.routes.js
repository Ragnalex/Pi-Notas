const { Router } = require("express");
const router = Router();
const {
    CreateUser,
    CreateProfesor,
} = require("../controllers/admin.controller");

//Creación de Usuarios
router.post("/ingresarUsuario", CreateUser);
//Creación de profesores
router.post("/ingresarProfesor", CreateProfesor);

module.exports = router;
