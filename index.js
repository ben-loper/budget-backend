const express = require('express');
const app = express();

var budgetRouter = require('./routes/budgets');
var categoryRouter = require('./routes/categories');
var userRouter = require('./routes/user');
var transactionRouter = require('./routes/transactions');

const port = process.env.PORT || 3000;

// setup the routes
app.use('/users', userRouter);
app.use('/budgets', budgetRouter);
app.use('/categories', categoryRouter);
app.use('/transactions', transactionRouter);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}/`);
});