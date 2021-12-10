const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');
const { s3multerUpload } = require('../services/aws');

const { activitiesValidator } = require('../middlewares/activitiesValidator');
const validationHandler = require('../middlewares/validatorMiddleware');

router.post('/', verifyToken, isAdmin, activitiesValidator, validationHandler, activitiesController.create);
router.put('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), activitiesController.update);

module.exports = router;