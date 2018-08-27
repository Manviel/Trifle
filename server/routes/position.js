const express = require('express');
const controller = require('../controllers/position');

const router = express.Router();

router.get('/:category', controller.getByCategory);

router.post('/', controller.create);

router.patch('/:id', controller.update);

router.delete('/:id', controller.remove);

module.exports = router;