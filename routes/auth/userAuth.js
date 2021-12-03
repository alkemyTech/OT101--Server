var express = require('express');
var router = express.Router();
const authController = require('../../controllers/authController');
const { body } = require('express-validator');

//bcrypt.js
const saltRounds = 10;

/* Register new user endpoint. */

const registerValidations = [
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    //validate name and last name
    body('firstName').isString(),
    body('lastName').isString(),
]

const loginValidations = [
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
]

router.post('/register',
    registerValidations,
    authController.register
);


/* GET users listing. */
router.post('/login',
    loginValidations,
    authController.login
);

module.exports = router;
