const { Router } = require("express");
const router = Router();
const {
    userSignin,
    adminSignin,
} = require("../controllers/auth.controller");

//INGRESO USUARIO
router.post("/usuario/ingreso", userSignin);
//INGRESO ADMIN
router.post("/administrador/ingreso", adminSignin);




module.exports = router;
