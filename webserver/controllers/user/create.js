'use strict';

const UserModel = require('../../../databases/models/user-model');

async function createUser(req, res, next) {
  //Gurda datos en la BD...
  console.log('usuario creado');
  return res.status(200).send();
}
module.exports = { createUser };
