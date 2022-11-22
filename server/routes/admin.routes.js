const { Router } = require("express");
const router = Router();
const {
    CreateAlumno,
    CreateProfesor,
    CreateAsignatura,
    CreateCurso,
    AsignarRamoProfesor,
    VerAsignaturas,
    VerCursos,
    EliminarAsignatura,
    EliminarAlumno,
    EliminarProfesor,
    EliminarCurso
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
//Ver todas las asignaturas
router.get("/verAsignaturas", VerAsignaturas);
//ver todos los cursos
router.get("/verCursos", VerCursos);
//eliminar una asignatura
router.post("/eliminarAlumno", EliminarAlumno);
router.post("/eliminarProfesor", EliminarProfesor);
router.post("/eliminarCurso", EliminarCurso);
router.post("/eliminarAsignatura", EliminarAsignatura);
module.exports = router;
