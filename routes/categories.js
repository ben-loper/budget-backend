var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

module.exports = router;