const express = require('express');

const v1Router = require('./v1');

const apiRouter = express.Router();

// If any request comes and route starts with /api, we map it to apiRouter
apiRouter.use('/v1', v1Router);

module.exports = apiRouter;