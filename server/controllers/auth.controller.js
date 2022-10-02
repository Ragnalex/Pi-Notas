const Usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");

//LOGIN
const userLogin = async (req, res) => {
  try {
    const user = await Usuario.findOne({
      rut: req.body.rut,
      alumno: {
        $exists: true,
      },
    });
    !user && res.status(400).json("Wrong credentials!");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  userLogin,
};
