const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/authJWT');
const testimonialsController = require('../controllers/testimonialsController');
const { s3multerUpload } = require('../services/aws');
const isAdmin = require('../middlewares/isAdmin');

router.post(
  '/',
  verifyToken,
  isAdmin,
  /* s3multerUpload.single('image'), testimonialsValidation, s3validationHandler,*/
  testimonialsController.create
);
router.put('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), testimonialsController.update);

module.exports = router;
