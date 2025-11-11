const express = require('express');
const { signUp, login, home } = require('../Controller/auth');
// const authorization = require("../Authentication/authenticate")

const router = express.Router();


router.post('/signup', signUp);
router.post('/login', login);
router.get('/home' , home);



module.exports = router;