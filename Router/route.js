const express = require('express');
const { signUp } = require('../Controller/auth');
const router = express.Router();


router.post('/signup', signUp);



module.exports = router;