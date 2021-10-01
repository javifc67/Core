// const UserModel = require('../../../databases/models/user-model');

async function getUserProfile(req, res, next) {
  //Coge datos de la BD...
  console.log("usuario solucitado");
  const dataReturn = {
    uuid: "001",
    name: "CoreBoi",
    email: "Coreboi@upm.es",
    phone: "654654654",
    friends: ["noOne"],
  };

  return res.status(200).send(dataReturn);
}
module.exports = { getUserProfile };
