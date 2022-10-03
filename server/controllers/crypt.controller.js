const bcrypt = require("bcrypt");


const encrypt = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);
    return hashedPass;
};
module.exports={encrypt};