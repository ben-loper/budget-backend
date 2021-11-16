var express = require('express');
var router = express.Router();

var {isLoggedIn} = require('../controllers/authController');

var budgetController = require('../controllers/budgetController');

router.get('/', isLoggedIn, budgetController.getAllBudgets);
router.get('/:id', budgetController.getBudgetById);

module.exports = router;