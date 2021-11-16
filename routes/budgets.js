var express = require('express');
var router = express.Router();

var budgetController = require('../controllers/budgetController');

router.get('/', budgetController.getAllBudgets);
router.get('/:id', budgetController.getBudgetById);

module.exports = router;