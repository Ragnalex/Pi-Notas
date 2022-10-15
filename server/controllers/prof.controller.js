const Asignatura = require("../models/asignatura.model");

const VerAsignatura = async(req, res) => {
    try {
        const asign = await Asignatura.find({
            cursos: {$elemMatch: {profesor: req.body.rut}}
        });
        res.status(200).json(asign);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {
    VerAsignatura,
};