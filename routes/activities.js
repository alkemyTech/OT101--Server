const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');
const { s3multerUpload } = require('../services/aws');

const { activitiesValidator } = require('../middlewares/activitiesValidator');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');

router.post(
  '/',
  verifyToken,
  isAdmin,
  s3multerUpload.single('image'),
  activitiesValidator,
  s3validationHandler,
  activitiesController.create
);
router.put('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), activitiesController.update);

module.exports = router;
