const { Router } = require("express");
const router = Router();
const {
    CreateAlumno,
    CreateProfesor,
    CreateAsignatura,
    CreateCurso,
    AsignarRamoProfesor,
} = require("../controllers/admin.controller");

//Creación de Usuarios
router.post("/ingresarAlumno", CreateAlumno);
//Creación de profesores
router.post("/ingresarProfesor", CreateProfesor);
//Creación de Asignatura
router.post("/ingresarAsignatura", CreateAsignatura);
//creación de cursos
router.post("/ingresarCurso", CreateCurso);
//agregar n Asignaturas a un profesor
router.post("/asignaturaProfesor", AsignarRamoProfesor);
module.exports = router;
