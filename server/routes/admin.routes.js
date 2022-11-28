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
    VerEstudiantes,
    VerProfesores,
    EliminarAsignatura,
    EliminarAlumno,
    EliminarProfesor,
    EliminarCurso,
    ObtenerProfJefe
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
//ver todos los estudiantes
router.get("/verEstudiantes", VerEstudiantes);
//Ver todos los profesores
router.get("/verProfesores", VerProfesores);
//eliminar una asignatura
router.post("/eliminarAlumno", EliminarAlumno);
router.post("/eliminarProfesor", EliminarProfesor);
router.post("/eliminarCurso", EliminarCurso);
router.post("/eliminarAsignatura", EliminarAsignatura);
router.post("/obtenerProfesor", ObtenerProfJefe);
module.exports = router;
