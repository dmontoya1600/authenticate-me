const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;