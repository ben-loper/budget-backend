var express = require('express');
var router = express.Router();

var transactionController = require('../controllers/transactionController');

router.get('/', transactionController.getAllTransactions);
router.get('/:id', transactionController.getTransactionById);

module.exports = router;