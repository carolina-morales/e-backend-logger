import jwt from 'jsonwebtoken';
import config from '../config';
import Authorization from '../models/authorizations';
const helpers = {};

helpers.isAuthenticated = async (req, res, next) => {
  const tokenUser = req.header('Authorization');

  if (!tokenUser) return res.status(400).json({ msg: 'Token no proveído.' });

  const tokens = await Authorization.find();
  const exists = tokens.some(token => token.token === tokenUser);

  if (!exists) return res.status(400).json({ msg: 'Token no proveído.' });

  jwt.verify(tokenUser, config.secret_key, (err, decoded) => {
    if (err) return res.status(400).json({ msg: 'Token inválido.' });
    req.decoded = decoded;
    next();
  });
};

module.exports = helpers;