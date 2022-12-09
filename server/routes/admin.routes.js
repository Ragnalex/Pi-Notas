const { Router } = require("express");
const router = Router();
const {
    CreateAlumno,
    CreateProfesor,
    CreateAsignatura,
    CreateCurso,
    AsignarRamoProfesor,
    VerAsignaturasCurso,
    VerAsignaturas,
    NuevaAsignaturaCurso,
    VerCursos,
    VerEstudiantes,
    VerProfesores,
    EliminarAsignatura,
    EliminarAlumno,
    EliminarProfesor,
    EliminarCurso,
    ObtenerProfJefe,
    ObtenerProfesorCurso,
    modificarAlumno
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
//Ver todas las asignaturas de un curso
router.post("/verAsignaturasCurso", VerAsignaturasCurso);
//
router.post("/NuevaAsignaturaCurso", NuevaAsignaturaCurso)
//Ver todas las asignaturas
router.get("/verAsignaturas", VerAsignaturas);
//ver todos los cursos
router.get("/verCursos", VerCursos);
//ver todos los estudiantes
router.get("/verEstudiantes", VerEstudiantes);
//Ver todos los profesores
router.get("/verProfesores", VerProfesores);
//Obtener profesor jefe del curso
router.post("/obtenerProfesor", ObtenerProfJefe);
//Obtener profesor jefe del curso
router.post("/obtenerProfesorCurso", ObtenerProfesorCurso);
//eliminar una asignatura
router.delete("/eliminarAlumno", EliminarAlumno);
router.delete("/eliminarProfesor", EliminarProfesor);
router.delete("/eliminarCurso", EliminarCurso);
router.delete("/eliminarAsignatura", EliminarAsignatura);
router.delete("/modificarAlumno", modificarAlumno);

module.exports = router;
