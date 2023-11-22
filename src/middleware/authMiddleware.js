// middleware/authMiddleware.js

const expressJwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const UserModel = require('../api/models/UserModel.js');

const authCheck = expressJwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'YOUR_AUTH0_JWKS_URI',
  }),
  audience: 'YOUR_AUTH0_AUDIENCE',
  issuer: 'YOUR_AUTH0_ISSUER',
  algorithms: ['RS256'],
});

module.exports = authCheck;
