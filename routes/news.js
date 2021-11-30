const express = require('express');
const router = express.Router();
// const New = require('../models/new');

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const newObj = await New.findOne({ where: { id } });
    if (newObj) {
      await newObj.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const newsController = require('../controllers/newsController');

/* GET news listing. */
router.get('/', newsController.index);

module.exports = router;
