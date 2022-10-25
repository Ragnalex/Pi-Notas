const { Router } = require("express");
const router = Router();
const {
    VerAsignaturas,
} = require("../controllers/alum.controller");

router.post("/verAsignaturas", VerAsignaturas);

module.exports = router;